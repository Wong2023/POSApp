import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Content,
  Header,
  NewOrderButton,
  SettingsList,
  Toast
} from "../styles/SettingsStyles";

import BusinessInfoSection from "./componentsB/BusinessInfoSection";
import UsersSection from "./componentsB/UsersSection";
import PermissionsSection from "./componentsB/PermissionsSection";
import TaxesSection from "./componentsB/TaxesSection";

const SettingsPage = ({ expanded }) => {
  const [toastMessage, setToastMessage] = useState("");
  const navigate = useNavigate();

  return (
    <Content expanded={expanded}>
      <Header>
        <div>
          <span>12332</span>
          <h1>Settings</h1>
        </div>
        <NewOrderButton onClick={() => navigate("/order")}>
          + NEW ORDER
        </NewOrderButton>
      </Header>

      <SettingsList>
        <BusinessInfoSection setToastMessage={setToastMessage} />
        <UsersSection setToastMessage={setToastMessage} />
        <PermissionsSection />
        <TaxesSection setToastMessage={setToastMessage} />
      </SettingsList>

      {toastMessage && <Toast>{toastMessage}</Toast>}
    </Content>
  );
};

export default SettingsPage;
