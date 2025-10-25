import React, { useState } from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import LoginPage from "./components/LoginPage";
import ProfilePage from "./components/ProfilePageLogic";  // ✅ исправлено
import SettingsPage from "./components/SettingsPage";
import Sidebar from "./components/Sidebar";
import OrderHistoryPage from "./components/OrderHistoryPage";
import CatalogPage from "./components/CatalogPageLogic";
import OrderPage from "./components/OrderPage";
import DashboardPage from "./components/DashboardPage";
import ExpensesPage from "./components/ExpensesPage";
import StatsLogic from "./components/StatsLogic";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <>
      <GlobalStyle />
      {isLoggedIn ? (
        <Router>
          <div style={{ display: "flex", width: "100%" }}>
            <div
              onMouseEnter={() => setExpanded(true)}
              onMouseLeave={() => setExpanded(false)}
            >
              <Sidebar />
            </div>
            <Routes>
              <Route path="/dashboard" element={<DashboardPage expanded={expanded} />} />
              <Route
                path="/profile"
                element={<ProfilePage onLogout={handleLogout} expanded={expanded} />}
              />
              <Route
                path="/settings"
                element={<SettingsPage expanded={expanded} />}
              />
              <Route
                path="/catalog"
                element={<CatalogPage expanded={expanded} />}
              />
              <Route path="/order" element={<OrderPage expanded={expanded} />} />
              <Route
                path="/orders"
                element={<OrderHistoryPage expanded={expanded} />}
              />
              <Route
                path="/expenses"
                element={<ExpensesPage expanded={expanded} />}   // ✅ новый маршрут
              />
              <Route path="/stats" element={<StatsLogic expanded={expanded} />} />
              {/* Пока корень ведет на профиль */}
              <Route
                path="/"
                element={<ProfilePage onLogout={handleLogout} expanded={expanded} />}
              />
            </Routes>
          </div>
        </Router>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </>
  );
}

export default App;
