import React, { useState, useEffect } from "react";
import {
  PageWrapper,Header,Title,NewOrderButton,Tabs,
  Tab,SearchWrapper,SearchBox,OrdersGroup,OrdersTitle,OrderCard,OrderSummary,OrderDetails,DetailRow,ItemsList,Item,
} from "../styles/OrderHistoryStyles";
import { useNavigate } from "react-router-dom";
const OrderHistoryPage = ({ expanded }) => {
  const [activeTab, setActiveTab] = useState("ALL");
  const [search, setSearch] = useState("");
  const [orders, setOrders] = useState([]);
  const [expandedOrder, setExpandedOrder] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(savedOrders);
  }, []);
  const filteredOrders = orders.filter(
    (o) =>
      o.date?.includes(search) ||
      o.id?.toString().includes(search) ||
      o.total?.toString().includes(search)
  );
  const filterByTab = (ordersList) => {
    if (activeTab === "ALL") return ordersList;
    const now = new Date();
    if (activeTab === "DAY") {
      const today = now.toISOString().split("T")[0];
      return ordersList.filter((o) => o.date?.startsWith(today));
    }
    if (activeTab === "MONTH") {
      const month = now.toISOString().slice(0, 7); // YYYY-MM
      return ordersList.filter((o) => o.date?.startsWith(month));
    }
    if (activeTab === "YEAR") {
      const year = now.getFullYear().toString(); // YYYY
      return ordersList.filter((o) => o.date?.startsWith(year));
    }
    return ordersList;
  };
  const filteredByTab = filterByTab(filteredOrders);
  const grouped = filteredByTab.reduce((acc, order) => {
    if (!acc[order.date]) acc[order.date] = [];
    acc[order.date].push(order);
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
          <Tab
            key={tab}
            active={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
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
                onClick={() => setExpandedOrder(isOpen ? null : order.id)}>
                <OrderSummary>
                  <span style={{ color: "#91162c", fontWeight: "700" }}>
                    ORDER #{order.id}
                  </span>
                  <span>💶 Total: €{(order.total || 0).toFixed(2)}</span>
                </OrderSummary>
                <OrderDetails open={isOpen}>
                  <DetailRow>
                    <b>Subtotal:</b> €{(order.subtotal || 0).toFixed(2)}
                  </DetailRow>
                  <DetailRow>
                    <b>Tax:</b> €{(order.tax || 0).toFixed(2)}
                  </DetailRow>
                  <DetailRow>
                    <b>Discount:</b> €{(order.discount || 0).toFixed(2)}
                  </DetailRow>
                  <DetailRow highlight>
                    <b>Total:</b> €{(order.total || 0).toFixed(2)}
                  </DetailRow>
                  <h4 style={{ marginTop: "14px", marginBottom: "8px" }}>
                    🛒 Items:
                  </h4>
                  <ItemsList>
                    {(order.items || []).map((item, idx) => (
                      <Item key={idx}>
                        <span>
                          {item.qty} × {item.name}
                        </span>
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