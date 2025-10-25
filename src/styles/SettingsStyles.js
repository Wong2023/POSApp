import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: #f9f7f3;
  min-height: 100vh;
  width: 100vw;
`;

export const SaveButton = styled.button`
  width: 240px;
  margin-left: 550px;
  padding: 12px 0;
  margin-top: 10px;
  background: #a00032;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);

  &:hover { opacity: 0.9; }
`;

export const Content = styled.div`
  flex: 1;
  padding: 40px 60px;
  margin-left: ${(props) => (props.expanded ? "250px" : "70px")};
  min-height: 100vh;
  transition: margin-left 0.6s ease;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e0ddd7;
  padding-bottom: 10px;

  h1 {
    font-size: 26px;
    margin: 5px 0 0;
  }

  span {
    font-size: 14px;
    color: #555;
  }
`;

export const NewOrderButton = styled.button`
  background: #91162c;
  color: white;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 0px 0px 10px 10px;
  height: 65px;
  width: 180px;
  margin-top: -70px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);

  &:hover { opacity: 0.9; }
`;

export const SettingsList = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const SettingsItem = styled.div`
  background: #ece7e2;
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
  width: calc(100% - 100px);
  margin: 0 50px;
  color: #7d6e5c;
  display: flex;
  flex-direction: column;

  /* 🔥 плавный hover-фидбек для всей карточки */
  transition: box-shadow .25s ease, transform .25s ease, background-color .25s ease;

  &:hover {
    box-shadow: 0 6px 14px rgba(0,0,0,0.14);
    transform: translateY(-2px);
  }

  /* лёгкое подсвечивание шапки при наведении на карточку */
  &:hover .item-header {
    background: #f3eee9;
  }

  .item-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 120px;
    padding: 0 20px;
    font-weight: bold;
    color: #a00032;
    border-bottom: 1px solid #e0ddd7;
    flex-shrink: 0;
    cursor: pointer; /* открытие только по клику */

    /* мягкий переход фона, чтобы hover был аккуратным */
    transition: background-color .25s ease;
  }

  .item-body {
    overflow: hidden;
    max-height: ${(props) => (props.open ? "1000px" : "0px")};
    transition: max-height 0.5s ease-in-out;
  }

  .item-body-inner {
    padding: ${(props) => (props.open ? "20px" : "0 20px")};
    opacity: ${(props) => (props.open ? 1 : 0)};
    transform: translateY(${(props) => (props.open ? "0" : "-5px")});
    transition: opacity 0.4s ease, transform 0.4s ease, padding 0.4s ease;
  }
`;

export const EditButton = styled.button`
  background: transparent;
  border: none;
  font-size: 14px;
  cursor: pointer;
  color: black;
`;

export const BusinessInfoForm = styled.form`
  background: transparent;
  font-family: inherit;
  font-weight: 400;
  color: #7d6e5c;

  label {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 3px;
    display: block;
  }

  input {
    width: 100%;
    padding: 12px 14px;
    margin-bottom: 16px;
    border-radius: 10px;
    border: 1px solid #e0ddd7;
    font-size: 15px;
    background: #f9f7f3;
    outline: none;
    box-sizing: border-box;
    transition: border-color 0.3s, box-shadow 0.3s;

    &:focus {
      border-color: #a00032;
      box-shadow: 0 0 0 2px rgba(160, 0, 50, 0.2);
    }
  }

  .inputs-row {
    display: flex;
    gap: 16px;
    margin-bottom: 10px;
  }

  .inputs-row > div { flex: 1; }

  button.save-btn {
    width: 240px;
    margin-left: 550px;
    margin-top: 6px;
    padding: 12px 0;
    background: #a00032;
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;

    &:hover { opacity: 0.9; }
  }
`;

export const UsersTable = styled.div`
  max-height: 250px;
  overflow-y: auto;
  margin-bottom: 15px;

  table {
    width: 100%;
    border-collapse: collapse;

    th {
      text-align: left;
      padding: 10px;
      color: #a00032;
      font-weight: 600;
    }

    td {
      padding: 10px;
      border-right: 1px solid #d4cfc9;
    }

    td:last-child { border-right: none; }

    input {
      width: 100%;
      padding: 8px 10px;
      border-radius: 10px;
      border: 1px solid #e0ddd7;
      background: #f9f7f3;
    }
  }
`;

export const AddUserButton = styled.button`
  font-weight: bold;
  padding: 12px 20px;
  width: 240px;
  margin-left: 550px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);

  background: ${(props) => (props.saving ? "white" : "#a00032")};
  color: ${(props) => (props.saving ? "#a00032" : "white")};
  border: ${(props) => (props.saving ? "1px solid #a00032" : "none")};

  &:hover { opacity: 0.9; }
`;

export const Toast = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #333;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 14px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  animation: slideUp 0.3s ease, fadeOut 0.3s ease 2.7s forwards;

  @keyframes slideUp {
    from { transform: translateY(40px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  @keyframes fadeOut {
    to { opacity: 0; transform: translateY(40px); }
  }
`;

export const TaxesContent = styled.div`
  font-size: 14px;
  line-height: 1.6;
  color: #111;
  white-space: pre-line;
  font-family: Arial, sans-serif;
  font-weight: bold;

  .save-btn {
    margin-top: 10px;
    padding: 12px 0;
    width: 100%;
    background: #a00032;
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);

    &:hover { opacity: 0.9; }
  }
`;

export const PermissionsTable = styled.div`
  background: #222;
  border-radius: 10px;
  padding: 20px;
  color: white;
  font-family: Arial, sans-serif;
  margin-bottom: 15px;

  h4 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    margin-bottom: 15px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    background: #111;
    border-radius: 8px;
    overflow: hidden;
  }

  th {
    background: #333;
    color: white;
    font-weight: bold;
    padding: 10px;
    text-align: center;
    border: 1px solid #444;
  }

  td {
    padding: 10px;
    text-align: center;
    border: 1px solid #444;
    font-size: 18px;
  }

  .check {
    color: #00c851;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
  }

  .cross {
    color: #ff4444;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
  }
`;
