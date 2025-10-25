import React from "react";
import {
  StatsWrapper, Header, Title, Subtitle, TabsRow, Tab, FiltersBar, CardsRow,
  Card, TwoCols, Panel, PanelTitle, Hint, ScrollArea, Table, TableHead,
  TableBodyScroll, TableRow, TotalsRow, List, ListRow,
} from "../styles/StatsStyles";

export default function StatsView({
  expanded, mode, setMode, day, setDay, week, setWeek, month, setMonth,
  year, setYear, search, setSearch, rows = [], totalRevenue = 0,
  totalQty = 0, ordersCount = 0, grand = 0, years = [],
}) {
  const top = Array.isArray(rows) ? rows.slice(0, 20) : [];
  const fmt = (v) => (isNaN(v) ? "0.00" : v.toFixed(2));

  return (
    <StatsWrapper expanded={expanded}>
      <Header>
        <div className="title-wrap">
          <Title>Sales Statistics</Title>
          <Subtitle>Track revenue and bestsellers by Day / Week / Month / Year</Subtitle>
        </div>
        <div>
          <TabsRow>
            {["DAY", "WEEK", "MONTH", "YEAR"].map((t) => (
              <Tab key={t} active={mode === t} onClick={() => setMode(t)}>{t}</Tab>
            ))}
          </TabsRow>
          <FiltersBar>
            {mode === "DAY" && <><label>Day</label><input type="date" value={day} onChange={(e)=>setDay(e.target.value)} /></>}
            {mode === "WEEK" && <><label>Week</label><input type="week" value={week} onChange={(e)=>setWeek(e.target.value)} /></>}
            {mode === "MONTH" && <><label>Month</label><input type="month" value={month} onChange={(e)=>setMonth(e.target.value)} /></>}
            {mode === "YEAR" && (
              <><label>Year</label><select value={year} onChange={(e)=>setYear(e.target.value)}>
                {years.map((y)=><option key={y}>{y}</option>)}</select></>
            )}
            <div className="spacer" />
            <input className="search" placeholder="Search..." value={search} onChange={(e)=>setSearch(e.target.value)} />
          </FiltersBar>
        </div>
      </Header>

      <CardsRow>
        <Card><div className="label">Orders</div><div className="value">{ordersCount}</div></Card>
        <Card><div className="label">Revenue (orders)</div><div className="value">€{fmt(grand)}</div></Card>
        <Card><div className="label">Items sold</div><div className="value">{totalQty}</div></Card>
        <Card><div className="label">Revenue (items)</div><div className="value">€{fmt(totalRevenue)}</div></Card>
      </CardsRow>

      <TwoCols>
        <Panel>
          <PanelTitle>Bestsellers</PanelTitle>
          <ScrollArea>
            <List>
              {top.length === 0 ? <div style={{ color: "#8e8076" }}>No data.</div> :
                top.map((r, i) => (
                  <ListRow key={r.name+i}>
                    <div className="name">{i+1}. {r.name}</div>
                    <div className="qty">{r.qty}</div>
                    <div className="revenue">€{fmt(r.revenue)}</div>
                  </ListRow>
                ))}
            </List>
          </ScrollArea>
          <Hint>Sorted by quantity sold.</Hint>
        </Panel>

        <Panel>
          <PanelTitle>Revenue by Product</PanelTitle>
          <Table>
            <TableHead>
              <div>Product</div>
              <div style={{ textAlign: "right" }}>Qty</div>
              <div style={{ textAlign: "right" }}>Revenue</div>
            </TableHead>
            <TableBodyScroll>
              {rows.length === 0
                ? <div style={{ padding: 14, color: "#8e8076" }}>No data for this period.</div>
                : rows.map((r) => (
                  <TableRow key={r.name}>
                    <div className="cell-name">{r.name}</div>
                    <div className="cell-qty">{r.qty}</div>
                    <div className="cell-sum">€{fmt(r.revenue)}</div>
                  </TableRow>
                ))}
            </TableBodyScroll>
            {rows.length > 0 && (
              <TotalsRow>
                <div className="label">Totals</div>
                <div className="qty">{totalQty}</div>
                <div className="sum">€{fmt(totalRevenue)}</div>
              </TotalsRow>
            )}
          </Table>
        </Panel>
      </TwoCols>
    </StatsWrapper>
  );
}
