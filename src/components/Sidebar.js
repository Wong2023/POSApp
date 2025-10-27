import React from "react";
import {
  SidebarWrapper,
  SidebarIcon,
  IconCircle,
  IconName,
  IconText,
  SidebarItem,
  MiddleItemsGroup,
  Spacer,
  IconWrapper,
} from "../styles/SidebarStyles";
import {
  FaHome,
  FaFileAlt,
  FaTv,
  FaCog,
  FaMoneyBill,
  FaChartBar, 
} from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <SidebarWrapper>
      <SidebarIcon onClick={() => navigate("/profile")}>
        <IconCircle>P</IconCircle>
        <IconName>User</IconName>
        <IconText>text</IconText>
      </SidebarIcon>

      <Spacer grow={2} />
      <MiddleItemsGroup>
        <SidebarItem
          onClick={() => navigate("/dashboard")}
          className={location.pathname === "/dashboard" ? "active" : ""}
        >
          <IconWrapper active={location.pathname === "/dashboard"}>
            <FaHome />
          </IconWrapper>
          <span>Dashboard</span>
        </SidebarItem>

        <SidebarItem
          onClick={() => navigate("/catalog")}
          className={location.pathname === "/catalog" ? "active" : ""}
        >
          <IconWrapper active={location.pathname === "/catalog"}>
            <FaFileAlt />
          </IconWrapper>
          <span>Catalog</span>
        </SidebarItem>
        <SidebarItem
          onClick={() => navigate("/stats")}
          className={location.pathname === "/stats" ? "active" : ""}
        >
          <IconWrapper active={location.pathname === "/stats"}>
            <FaChartBar />
          </IconWrapper>
          <span>Statistics</span>
        </SidebarItem>

        <SidebarItem
          onClick={() => navigate("/expenses")}
          className={location.pathname === "/expenses" ? "active" : ""}
        >
          <IconWrapper active={location.pathname === "/expenses"}>
            <FaMoneyBill />
          </IconWrapper>
          <span>Expenses</span>
        </SidebarItem>

        <SidebarItem
          onClick={() => navigate("/orders")}
          className={location.pathname === "/orders" ? "active" : ""}
        >
          <IconWrapper active={location.pathname === "/orders"}>
            <FaTv />
          </IconWrapper>
          <span>Order History</span>
        </SidebarItem>
      </MiddleItemsGroup>

      <Spacer grow={3} />

      <SidebarItem
        onClick={() => navigate("/settings")}
        className={location.pathname === "/settings" ? "active" : ""}
      >
        <IconWrapper active={location.pathname === "/settings"}>
          <FaCog />
        </IconWrapper>
        <span>Settings</span>
      </SidebarItem>
    </SidebarWrapper>
  );
};

export default Sidebar;
