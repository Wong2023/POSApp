import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  OrderPageContainer, LeftPanel, RightPanel, TabsContainer, Tabs, Tab,
  SearchWrapper, SearchBar, SectionTitle, ProductGrid, ProductCard,
  OrderHeader, CloseButton, OrderList, OrderItemWrapper, OrderItem,
  OrderItemInfo, HiddenActions, Summary, PayButton,
} from "../styles/OrderPageStyles";

// export default function OrderPage({ expanded }) {
const OrderPage = ({ expanded }) => {
  const nav = useNavigate();
  const products = {
    coffee: [
      "Americano (Small)€2.00","Americano (Medium)€2.50","Americano (Big)€3.00",
      "Latte (Small)€2.80","Latte (Medium)€3.20","Latte (Big)€3.80",
      "Cappuccino (Small)€2.70","Cappuccino (Medium)€3.10","Cappuccino (Big)€3.60",
      "Espresso (Single)€1.50","Espresso (Double)€2.40","Flat White (Medium)€3.40"],
    teas: [
      "Green Tea (Small)€2.00","Green Tea (Medium)€2.40","Green Tea (Big)€2.90",
      "Chai Latte (Small)€2.60","Chai Latte (Medium)€3.00","Chai Latte (Big)€3.50",
      "Matcha Latte (Small)€3.00","Matcha Latte (Medium)€3.40","Matcha Latte (Big)€3.90",
      "Black Tea (Small)€1.80","Black Tea (Medium)€2.00","Black Tea (Big)€2.40"],
    food: ["Ham Sandwich€4.50","Chicken Wrap€5.20","Veggie Salad€4.80","Cheese Croissant€3.00"],
  };

  const [tab, setTab] = useState("all"), [search, setSearch] = useState(""),
        [order, setOrder] = useState([]), [discount, setDiscount] = useState(""),
        [sel, setSel] = useState(null);

  const parsePrice = (p) => parseFloat(p.replace(/[^0-9.]/g, ""));
  const add = (n, price) => {
    setOrder((prev) => {
      const e = prev.find((x) => x.name === n);
      return e
        ? prev.map((x) => (x.name === n ? { ...x, qty: x.qty + 1 } : x))
        : [...prev, { name: n, price, qty: 1 }];
    });
  };
  const qty = (n, d) =>
    setOrder((p) =>
      p.map((x) => (x.name === n ? { ...x, qty: Math.max(1, x.qty + d) } : x))
    );
  const remove = (n) => setOrder((p) => p.filter((x) => x.name !== n));
  const subtotal = order.reduce((s, i) => s + parsePrice(i.price) * i.qty, 0);
  const tax = subtotal * 0.02, disc = parseFloat(discount) || 0;
  const total = subtotal + tax - disc;
  const pay = () => {
    if (!order.length) return;
    const o = {
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
      items: order, subtotal,tax,discount: disc, total,
    };
    const ex = JSON.parse(localStorage.getItem("orders") || "[]");
    localStorage.setItem("orders", JSON.stringify([...ex, o]));
    nav("/orders");
  };
  const render = () => {
    const cats = tab === "all" ? Object.keys(products) : [tab];
    return cats.map((c) => {
      let list = products[c];
      if (search && tab === "all")
        list = list.filter((i) => i.toLowerCase().includes(search.toLowerCase()));
      return (
        <div key={c}>
          <SectionTitle>{c.toUpperCase()} - POPULAR</SectionTitle>
          <ProductGrid>
            {list.map((it, i) => {
              const [name, price] = it.split("€");
              return (
                <ProductCard key={i} onClick={() => add(name, "€" + price)}>
                  {name.toUpperCase()} <br />
                  <span style={{ fontSize: 13, color: "#800020" }}>€{price}</span>
                </ProductCard>
              );
            })}
          </ProductGrid>
        </div>
      );
    });
  };
  return (
    <OrderPageContainer expanded={expanded}>
      <LeftPanel>
        <TabsContainer>
          <Tabs>
            {["all", "coffee", "teas", "food"].map((t) => (
              <Tab key={t} active={tab === t} onClick={() => setTab(t)}>
                {t === "teas" ? "TEAS & LATTES" : t.toUpperCase()}
              </Tab>
            ))}
          </Tabs>
        </TabsContainer>
        {tab === "all" && (
          <SearchWrapper>
            <SearchBar
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}/>
          </SearchWrapper>
        )}
        {render()}
      </LeftPanel>
      <RightPanel>
        <OrderHeader>
          ORDER #1 <CloseButton onClick={() => nav(-1)}>×</CloseButton>
        </OrderHeader>
        <OrderList>
          {order.map((i, k) => (
            <OrderItemWrapper key={k}>
              <OrderItem selected={sel === k} onClick={() => setSel(sel === k ? null : k)}>
                <OrderItemInfo>
                  {i.qty} × {i.name} — {i.price}
                </OrderItemInfo>
              </OrderItem>
              <HiddenActions visible={sel === k}>
                <button className="plus" onClick={() => qty(i.name, 1)}>+</button>
                <button className="edit">✎</button>
                <button className="delete" onClick={() => remove(i.name)}>✕</button>
              </HiddenActions>
            </OrderItemWrapper>
          ))}
        </OrderList>
        <Summary>
          <p><span>Subtotal:</span> <span>€{subtotal.toFixed(2)}</span></p>
          <p><span>Tax:</span> <span>€{tax.toFixed(2)}</span></p>
          <input
            placeholder="Discount"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}/>
          <h3><span>Total:</span> <span>€{total.toFixed(2)}</span></h3>
        </Summary>
        <PayButton onClick={pay}>PAYMENTS</PayButton>
      </RightPanel>
    </OrderPageContainer>
  );
}

export  default OrderPage;