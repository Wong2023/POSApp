import React, { useMemo, useState } from "react";
import StatsView from "./StatsView";

const num = (v) => (isNaN(v) ? 0 : +v);
const parsePrice = (p) =>
  typeof p === "string" ? parseFloat(p.replace(/[€\s]/g, "").replace(",", ".")) || 0 : num(p);
const parseDate = (v) => {
  if (!v) return null;
  if (v instanceof Date) return v;
  if (/^\d{4}-\d{2}-\d{2}/.test(v)) return new Date(v);
  if (/^\d{2}\.\d{2}\.\d{4}$/.test(v)) {
    const [d, m, y] = v.split(".").map(Number);
    return new Date(y, m - 1, d);
  }
  return new Date(v);
};
const sameDay = (a, b) => a.toDateString() === b.toDateString();
const sameMonth = (a, y, m) => a.getFullYear() === y && a.getMonth() === m;
const sameYear = (a, y) => a.getFullYear() === y;
const weekRange = (iso) => {
  const [, Y, W] = iso.match(/^(\d{4})-W(\d{2})$/) || [];
  if (!Y) return null;
  const y = +Y, w = +W, jan4 = new Date(Date.UTC(y, 0, 4));
  const d = jan4.getUTCDay() || 7;
  const mon = new Date(jan4);
  mon.setUTCDate(jan4.getUTCDate() - (d - 1) + (w - 1) * 7);
  const sun = new Date(mon);
  sun.setUTCDate(mon.getUTCDate() + 6);
  return {
    start: new Date(mon.getUTCFullYear(), mon.getUTCMonth(), mon.getUTCDate()),
    end: new Date(sun.getUTCFullYear(), sun.getUTCMonth(), sun.getUTCDate(), 23, 59, 59),
  };
};

const aggregate = (orders) => {
  const map = new Map();
  let rev = 0, qty = 0;
  for (const o of orders)
    for (const it of o.items || []) {
      const n = it.name || "Unknown", q = num(it.qty), p = parsePrice(it.price), r = q * p;
      const prev = map.get(n) || { qty: 0, revenue: 0 };
      prev.qty += q; prev.revenue += r; map.set(n, prev);
      qty += q; rev += r;
    }
  const rows = [...map.entries()].map(([name, v]) => ({ name, ...v })).sort((a, b) => b.qty - a.qty);
  return { rows, totalRevenue: rev, totalQty: qty };
};

const loadOrders = () => {
  try { return JSON.parse(localStorage.getItem("orders") || "[]"); }
  catch { return []; }
};

export default function StatsLogic({ expanded }) {
  const all = loadOrders(), now = new Date();
  const [mode, setMode] = useState("DAY");
  const [day, setDay] = useState(now.toISOString().split("T")[0]);
  const [week, setWeek] = useState(`${now.getFullYear()}-W01`);
  const [month, setMonth] = useState(`${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`);
  const [year, setYear] = useState(String(now.getFullYear())), [search, setSearch] = useState("");

  const filtered = useMemo(() =>
    all.filter((o) => {
      const d = parseDate(o.date); if (!d) return false;
      let ok =
        mode === "DAY" ? sameDay(d, new Date(day)) :
        mode === "WEEK" ? (() => { const r = weekRange(week); return r && d >= r.start && d <= r.end; })() :
        mode === "MONTH" ? sameMonth(d, ...month.split("-").map(Number).map((x, i) => (i ? x - 1 : x))) :
        mode === "YEAR" ? sameYear(d, +year) : false;
      if (!ok) return false;
      if (!search.trim()) return true;
      const s = search.toLowerCase();
      return o.items?.some((it) => it.name?.toLowerCase().includes(s)) || (o.date + "").toLowerCase().includes(s);
    }), [all, mode, day, week, month, year, search]);

  const { rows = [], totalRevenue = 0, totalQty = 0 } = useMemo(() => aggregate(filtered), [filtered]);
  const ordersCount = filtered.length, grand = filtered.reduce((s, o) => s + num(o.total), 0);
  const years = [...new Set(all.map((o) => parseDate(o.date)?.getFullYear()))].filter(Boolean);

  return (
    <StatsView {...{ expanded, mode, setMode, day, setDay, week, setWeek,
      month, setMonth, year, setYear, search, setSearch, rows,
      totalRevenue, totalQty, ordersCount, grand, years }} />
  );
}
