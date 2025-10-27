import React, { useState, useEffect } from "react";
import {
  PageWrapper, Header, Title, NewOrderButton, Tabs, Tab,
  SearchWrapper, SearchBox, OrdersGroup, OrdersTitle, OrderCard,
  OrderSummary, OrderDetails, DetailRow, ItemsList, Item,
} from "../styles/OrderHistoryStyles";
import { useNavigate } from "react-router-dom";
const OrderHistoryPage = ({ expanded }) => {
  const [activeTab, setActiveTab] = useState("ALL");
  const [search, setSearch] = useState("");
  const [orders, setOrders] = useState([]);
  const [expandedOrder, setExpandedOrder] = useState(null);
  const navigate = useNavigate();
  const loadOrders = () => {
    const saved = localStorage.getItem("orders");
    if (saved) setOrders(JSON.parse(saved));
  };
  useEffect(() => { loadOrders(); }, []);
  const filteredOrders = orders.filter(
    (o) =>
      o.date?.includes(search) ||
      o.id?.toString().includes(search) ||
      o.total?.toString().includes(search)
  );

  const filterByTab = (list) => {
    if (activeTab === "ALL") return list;
    const now = new Date();
    const today = now.toISOString().split("T")[0];
    const month = now.toISOString().slice(0, 7);
    const year = now.getFullYear().toString();
    if (activeTab === "DAY") return list.filter((o) => o.date?.startsWith(today));
    if (activeTab === "MONTH") return list.filter((o) => o.date?.startsWith(month));
    if (activeTab === "YEAR") return list.filter((o) => o.date?.startsWith(year));
    return list;
  };

  const filteredByTab = filterByTab(filteredOrders);
  const grouped = filteredByTab.reduce((acc, o) => {
    if (!acc[o.date]) acc[o.date] = [];
    acc[o.date].push(o);
    return acc;
  }, {});

  return (
    <PageWrapper expanded={expanded}>
      <Header>
        <Title>Order History</Title>
        <NewOrderButton onClick={() => navigate("/order")}>
          + NEW ORDER
        </NewOrderButton>
      </Header>

      <Tabs>
        {["ALL", "DAY", "MONTH", "YEAR"].map((tab) => (
          <Tab key={tab} active={activeTab === tab} onClick={() => setActiveTab(tab)}>
            {tab}
          </Tab>
        ))}
      </Tabs>

      <SearchWrapper>
        <SearchBox
          type="text"
          placeholder="Search orders..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </SearchWrapper>

      {Object.keys(grouped).length === 0 && (
        <p style={{ color: "#777", marginTop: "20px" }}>No orders found</p>
      )}

      {Object.keys(grouped).map((date) => (
        <OrdersGroup key={date}>
          <OrdersTitle>📅 DATE: {date}</OrdersTitle>
          {grouped[date].map((order) => {
            const isOpen = expandedOrder === order.id;
            return (
              <OrderCard
                key={order.id}
                onClick={() => setExpandedOrder(isOpen ? null : order.id)}
              >
                <OrderSummary>
                  <span style={{ color: "#91162c", fontWeight: "700" }}>
                    ORDER #{order.id}
                  </span>
                  <span>💶 Total: €{(order.total || 0).toFixed(2)}</span>
                </OrderSummary>

                <OrderDetails open={isOpen}>
                  {["subtotal", "tax", "discount"].map((f) => (
                    <DetailRow key={f}>
                      <b>{f.charAt(0).toUpperCase() + f.slice(1)}:</b> €
                      {(order[f] || 0).toFixed(2)}
                    </DetailRow>
                  ))}
                  <DetailRow highlight>
                    <b>Total:</b> €{(order.total || 0).toFixed(2)}
                  </DetailRow>

                  <h4 style={{ marginTop: "14px", marginBottom: "8px" }}>
                    🛒 Items:
                  </h4>
                  <ItemsList>
                    {(order.items || []).map((item, i) => (
                      <Item key={i}>
                        <span>{item.qty} × {item.name}</span>
                        <span>{item.price}</span>
                      </Item>
                    ))}
                  </ItemsList>
                </OrderDetails>
              </OrderCard>
            );
          })}
        </OrdersGroup>
      ))}
    </PageWrapper>
  );
};
export default OrderHistoryPage;