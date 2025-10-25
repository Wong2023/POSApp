import styled from "styled-components";

export const PageWrapper = styled.div`
  flex-grow: 1;
  padding: 20px;
  margin-left: ${(props) => (props.expanded ? "290px" : "100px")};
  transition: margin-left 0.9s ease;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  color: #5a1e1e;
`;

export const AddButton = styled.button`
  background: #91162c;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: #b22222;
    transform: translateY(-2px);
  }
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  gap: 15px;
`;

export const DatePickerStyled = styled.input`
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  background-color: #ece7e2;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);

  &:focus {
    outline: none;
    border: 1px solid #91162c;
    box-shadow: 0 0 6px rgba(145, 22, 44, 0.4);
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  background-color: #ece7e2;
  min-width: 220px;

  &:focus {
    outline: none;
    border: 1px solid #91162c;
    box-shadow: 0 0 6px rgba(145, 22, 44, 0.4);
  }
`;

export const ExpenseForm = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 25px;
  flex-wrap: wrap;
  background: #ece7e2;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
`;

export const Input = styled.input`
  padding: 10px;
  border: none;
  border-radius: 8px;
  flex: 1;
  min-width: 150px;
  font-size: 0.95rem;
  background-color: #e1dad2;

  &:focus {
    outline: none;
    border: 1px solid #91162c;
    box-shadow: 0 0 6px rgba(145, 22, 44, 0.4);
  }
`;

export const SaveButton = styled.button`
  background: #2e7d32;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: #1b5e20;
    transform: translateY(-2px);
  }
`;

export const ExpenseList = styled.div`
  margin-top: 20px;
`;

export const ExpenseItem = styled.div`
  background: #ece7e2;
  padding: 14px 18px;
  margin-bottom: 14px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
    background: #ece7e2;
  }
`;

export const ExpenseInfo = styled.div`
  font-size: 0.95rem;
  line-height: 1.4;

  span {
    display: block;
    margin-bottom: 4px;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
`;

export const DeleteButton = styled.button`
  background: #d32f2f;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: #b71c1c;
    transform: translateY(-2px);
  }
`;

export const EditButton = styled.button`
  background: #91162c;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: #7a0d25;
    transform: translateY(-2px);
  }
`;

export const Toast = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: ${(props) => (props.type === "error" ? "#d32f2f" : "#2e7d32")};
  color: white;
  padding: 12px 18px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: bold;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  opacity: ${(props) => (props.show ? 1 : 0)};
  transform: translateY(${(props) => (props.show ? "0" : "20px")});
  transition: all 0.4s ease;
  z-index: 2000;
`;

export const SummaryBar = styled.div`
  margin-top: 15px;
  background: #f9f7f3;
  padding: 12px 18px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  color: #5a1e1e;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
`;
