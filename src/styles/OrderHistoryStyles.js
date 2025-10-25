import styled from "styled-components";

export const PageWrapper = styled.div`
  flex: 1;
  padding: 30px 40px;
  padding-left: ${(props) => (props.expanded ? "290px" : "100px")};
  transition: padding-left 0.8s ease;
  background: #f9f7f3;
  min-height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0;
`;

export const NewOrderButton = styled.button`
  background: #91162c;
  color: white;
  height: 75px;
  width: 180px;
  margin-top: -40px;
  padding: 12px 26px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  font-size: 0.95rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: background 0.2s;

  &:hover {
    background: #7a1224;
  }
`;

export const Tabs = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin: 24px 0 12px 0;
  border-bottom: 1px solid #e1dad2;
  padding-bottom: 16px;
`;

export const Tab = styled.button`
  flex: 1;
  padding: 12px 0;
  border-radius: 12px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  background: ${(props) => (props.active ? "#5c0a1f" : "#ece7e2")};
  color: ${(props) => (props.active ? "white" : "black")};
  transition: background 0.2s;
  box-shadow: ${(props) =>
    props.active
      ? "0px 4px 8px rgba(0,0,0,0.25)"
      : "inset 0 2px 4px rgba(0,0,0,0.1)"};

  &:hover {
    background: ${(props) => (props.active ? "#7a1224" : "#e6e6e6")};
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

export const SearchBox = styled.input`
  border: none;
  padding: 12px 18px;
  border-radius: 12px;
  background: #ece7e2;
  font-size: 0.95rem;
  outline: none;
  width: 100%;
  max-width: 280px;
`;

export const OrdersGroup = styled.div`
  margin-top: 28px;
`;

export const OrdersTitle = styled.div`
  font-weight: bold;
  margin-bottom: 14px;
  color: #b5a9a0;
  text-transform: uppercase;
  font-size: 0.9rem;
`;

export const OrderCard = styled.div`
  background: #ece7e2;
  border-radius: 16px;
  margin-bottom: 14px;
  padding: 16px 22px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
    background: #ece7e2;
  }
`;

export const OrderSummary = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 1rem;
`;

export const OrderDetails = styled.div`
  max-height: ${(props) => (props.open ? "600px" : "0")};
  overflow: hidden;
  transition: max-height 0.4s ease, opacity 0.4s ease, margin-top 0.3s ease;
  opacity: ${(props) => (props.open ? 1 : 0)};
  margin-top: ${(props) => (props.open ? "15px" : "0")};
  border-top: 1px dashed #ccc;
  padding-top: ${(props) => (props.open ? "12px" : "0")};
`;

export const DetailRow = styled.p`
  margin: 6px 0;
  display: flex;
  justify-content: space-between;
  font-size: 0.95rem;
  color: ${(props) => (props.highlight ? "#5c0a1f" : "#333")};
  font-weight: ${(props) => (props.highlight ? "700" : "400")};
`;

export const ItemsList = styled.ul`
  margin: 10px 0 0 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  background: #f4f1ec;
  padding: 8px 12px;
  border-radius: 8px;
  margin-bottom: 8px;
  font-size: 0.9rem;
`;
