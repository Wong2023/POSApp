import React, { useEffect, useState } from "react";
import {
  DashboardWrapper, Header, Welcome, NewOrderButton, Grid, Card,
  SectionGrid, Section, SectionTitle, BestsellersList, OrdersList,
  OrderButton, Stats, HistoryList, HistoryItem,
} from "../styles/DashboardStyles";
import { useNavigate } from "react-router-dom";

const DashboardPage = ({ expanded }) => {
  const navigate = useNavigate();
  const [todayOrders, setTodayOrders] = useState([]);
  const [todayRevenue, setTodayRevenue] = useState(0);
  const loadTodayData = () => {
    const savedOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    const today = new Date().toISOString().split("T")[0];
    const filtered = savedOrders.filter((o) => o.date?.startsWith(today));
    setTodayOrders(filtered);
    const totalRevenue = filtered.reduce((sum, o) => sum + (o.total || 0), 0);
    setTodayRevenue(totalRevenue);
  };

  useEffect(() => { loadTodayData(); }, []);

  return (
    <DashboardWrapper expanded={expanded}>
      <Header>
        <Welcome>
          Dashboard
          <br />
          Welcome!
        </Welcome>
        <NewOrderButton onClick={() => navigate("/order")}>
          + NEW ORDER
        </NewOrderButton>
      </Header>

      <Grid>
        <Card>
          <div>Today's Orders</div>
          <div className="big">{todayOrders.length}</div>
        </Card>
        <Card>
          <div>Today's Revenue</div>
          <div className="big">€{todayRevenue.toFixed(2)}</div>
        </Card>
        <Card>
          <div>Today's Orders</div>
          <div className="big">{todayOrders.length}</div>
        </Card>
        <Card>
          <div>Today's Revenue</div>
          <div className="big">€{todayRevenue.toFixed(2)}</div>
        </Card>
      </Grid>

      <SectionGrid>
        <Section>
          <SectionTitle>Bestsellers</SectionTitle>
          <BestsellersList>
            {["1. best", "2. bestbest", "3. bestbest", "4. bestbest", "5. bestbest", "6. bestbest"].map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </BestsellersList>
        </Section>
        <Section>
          <SectionTitle>Active Orders</SectionTitle>
          <OrdersList>
            {Array(4).fill(null).map((_, i) => (
              <OrderButton key={i}>ORDER #{i + 1} (220039)</OrderButton>
            ))}
            <OrderButton disabled>ORDER #5 (220039)</OrderButton>
          </OrdersList>
        </Section>
      </SectionGrid>

      <SectionGrid>
        <Section>
          <SectionTitle>Current Orders</SectionTitle>
          <Stats>
            <div>Active: <b>12</b></div>
            <div>Completed: <b>7</b></div>
            <div>Canceled: <b>5</b></div>
          </Stats>
        </Section>

        <Section>
          <SectionTitle>Order History (Today)</SectionTitle>
          <HistoryList>
            {todayOrders.length > 0 ? (
              todayOrders.map((o) => (
                <HistoryItem key={o.id}>
                  <span className="order">ORDER #{o.id}</span>
                  <span>Total: €{(o.total || 0).toFixed(2)}</span>
                </HistoryItem>
              ))
            ) : (
              <p style={{ color: "#777" }}>No orders today</p>
            )}
          </HistoryList>
        </Section>
      </SectionGrid>
    </DashboardWrapper>
  );
};

export default DashboardPage;
