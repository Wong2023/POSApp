import React, { useEffect, useState } from "react";
import {
  DashboardWrapper,Header,Welcome,NewOrderButton,Grid,Card,SectionGrid,Section,SectionTitle,BestsellersList,OrdersList,
  OrderButton,Stats,HistoryList,HistoryItem,
} from "../styles/DashboardStyles";
import { useNavigate } from "react-router-dom";

const DashboardPage = ({ expanded }) => {
  const navigate = useNavigate();

  const [todayOrders, setTodayOrders] = useState([]);
  const [todayRevenue, setTodayRevenue] = useState(0);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    const today = new Date().toISOString().split("T")[0];
    const filtered = savedOrders.filter((o) => o.date?.startsWith(today));

    setTodayOrders(filtered);
    const totalRevenue = filtered.reduce(
      (sum, order) => sum + (order.total || 0),
      0
    );
    setTodayRevenue(totalRevenue);
  }, []);

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

      {/* Верхние 4 карточки */}
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

      {/* Бестселлеры + активные заказы */}
      <SectionGrid>
        <Section>
          <SectionTitle>Bestsellers</SectionTitle>
          <BestsellersList>
            <span>1. best</span>
            <span>4. bestbest</span>
            <span>2. bestbest</span>
            <span>5. bestbest</span>
            <span>3. bestbest</span>
            <span>6. bestbest</span>
          </BestsellersList>
        </Section>
        <Section>
          <SectionTitle>Active Orders</SectionTitle>
          <OrdersList>
            <OrderButton>ORDER #1 (220039)</OrderButton>
            <OrderButton>ORDER #1 (220039)</OrderButton>
            <OrderButton>ORDER #1 (220039)</OrderButton>
            <OrderButton>ORDER #1 (220039)</OrderButton>
            <OrderButton disabled>ORDER #1 (220039)</OrderButton>
          </OrdersList>
        </Section>
      </SectionGrid>

      {/* Текущие заказы + История */}
      <SectionGrid>
        <Section>
          <SectionTitle>Current Orders</SectionTitle>
          <Stats>
            <div>
              Active: <b>12</b>
            </div>
            <div>
              Completed: <b>7</b>
            </div>
            <div>
              Canceled: <b>5</b>
            </div>
          </Stats>
        </Section>
        <Section>
          <SectionTitle>Order History (Today)</SectionTitle>
          <HistoryList>
            {todayOrders.length > 0 ? (
              todayOrders.map((order) => (
                <HistoryItem key={order.id}>
                  <span className="order">ORDER #{order.id}</span>
                  <span>Total: €{(order.total || 0).toFixed(2)}</span>
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