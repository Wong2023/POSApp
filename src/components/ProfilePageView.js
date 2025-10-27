import React from "react";
import {
  Container, Avatar, Name, Role, Card, CardHeader, CardEdit, InputGrid,
  InputWrapper, InputLabel, InputField, Section, SectionEdit, SectionHeader,
  Button, ButtonDanger, ButtonWrapper, SaveButton, Toast, accent
} from "../styles/ProfileStyles";

const ProfilePageView = ({ onLogout, profile, tempProfile, editing, handleChange,
  handleEditToggle, handleSave, editingPassword, handlePasswordEditToggle,
  handlePasswordChange, passwords, handlePasswordSave, toast }) => {
  const field = (label, name, type = "text") => (
    <InputWrapper>
      <InputLabel>{label}</InputLabel>
      <InputField
        name={name}
        type={type}
        value={editing ? tempProfile[name] : profile[name]}
        onChange={handleChange}
        readOnly={!editing}
      />
    </InputWrapper>
  );

  const passField = (label, name) => (
    <InputWrapper>
      <InputLabel>{label}</InputLabel>
      <InputField
        type="password"
        name={name}
        value={passwords[name]}
        onChange={handlePasswordChange}
      />
    </InputWrapper>
  );

  return (
    <Container>
      <button
        style={{
          background: "none", border: "none", cursor: "pointer",
          display: "flex", flexDirection: "column", alignItems: "center"
        }}
      >
        <Avatar />
        <Name>User</Name>
        <Role style={{
          fontSize: "1rem", color: accent, textAlign: "center", marginBottom: "1.5rem"
        }}>text</Role>
      </button>

      {/* Profile Card */}
      <Card>
        <CardHeader>
          <SectionHeader>User Profile</SectionHeader>
          <CardEdit
            onClick={handleEditToggle}
            style={{
              textDecoration: editing ? "underline" : "none",
              color: editing ? accent : "#7e788a"
            }}
          >Edit</CardEdit>
        </CardHeader>

        <InputGrid>
          {field("First Name", "firstName")}
          {field("Last Name", "lastName")}
          {field("Mail", "email", "email")}
          {field("Phone", "phone", "tel")}
        </InputGrid>

        {editing && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <SaveButton onClick={handleSave}>SAVE CHANGE</SaveButton>
          </div>
        )}
      </Card>

      {/* Password Section */}
      <Section>
        <SectionEdit>
          <SectionHeader>Change Password</SectionHeader>
          <CardEdit
            onClick={handlePasswordEditToggle}
            style={{
              textDecoration: editingPassword ? "underline" : "none",
              color: editingPassword ? accent : "#7e788a"
            }}
          >Edit</CardEdit>
        </SectionEdit>

        {editingPassword && (
          <>
            <div style={{ maxWidth: "420px", margin: "0 auto" }}>
              {passField("Current Password", "current")}
              {passField("New Password", "newPass")}
              {passField("Confirm New Password", "confirm")}
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <SaveButton onClick={handlePasswordSave}>SAVE CHANGE</SaveButton>
            </div>
          </>
        )}
      </Section>

      <ButtonWrapper>
        <Button>Switch Profile</Button>
        <ButtonDanger onClick={onLogout}>Log Out</ButtonDanger>
      </ButtonWrapper>

      {toast.visible && (
        <Toast $visible={toast.visible} $type={toast.type}>
          {toast.message}
        </Toast>
      )}
    </Container>
  );
}

export default ProfilePageView;
