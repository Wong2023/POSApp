// Layout.jsx
import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";

const LayoutWrapper = styled.div`
  display: flex;
  width: max;
  height: max;
  overflow: hidden; /* убираем скроллы */
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center; /* центрируем горизонтально */
  align-items: center;     /* центрируем вертикально */
  background: #f7f4f1;
  overflow: hidden;        /* гарантируем отсутствие скроллов */
`;

const Layout = ({ children }) => (
  <LayoutWrapper>
    <Sidebar />
    <MainContent>{children}</MainContent>
  </LayoutWrapper>
);

export default Layout;
