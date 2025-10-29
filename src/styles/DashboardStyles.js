import styled from "styled-components";

export const DashboardWrapper = styled.div`
  flex: 1;
  padding: 25px;
  padding-left: ${({ $expanded }) => ($expanded ? "290px" : "100px")};
  transition: padding-left 0.8s ease;
  background: #f9f7f3;
  min-height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Welcome = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin: 0;
  color: #5c0a1f;
`;

export const NewOrderButton = styled.button`
  background: #91162c;
  color: white;
  border: none;
  height: 75px;
  width: 180px;
  margin-top: -55px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);

  &:hover {
    background: #7a1224;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  margin: 25px 0;
`;

export const Card = styled.div`
  background: #f1ede8;
  border-radius: 12px;
  padding: 18px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);

  .big {
    font-size: 24px;
    font-weight: 700;
    margin-top: 6px;
  }
`;

export const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 15px;
  margin-bottom: 20px;
`;

export const Section = styled.div`
  background: #f1ede8;
  border-radius: 12px;
  padding: 18px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
`;

export const SectionTitle = styled.h3`
  font-size: 14px;
  font-weight: 700;
  margin: 0 0 10px 0;
  color: #5c0a1f;
  text-transform: uppercase;
  border-bottom: 1px solid #d8cfc7;
  padding-bottom: 6px;
`;

export const BestsellersList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6px;
  font-size: 15px;

  span {
    color: #91162c;
    font-weight: 600;
  }
`;

export const OrdersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const OrderButton = styled.button`
  background: ${({ disabled }) => (disabled ? "#e5dfdb" : "#ece7e2")};
  color: ${({ disabled }) => (disabled ? "#aaa" : "#91162c")};
  border: none;
  border-radius: 12px;
  padding: 10px;
  font-weight: 700;
  text-align: left;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

  &:hover {
    background: ${({ disabled }) => (disabled ? "#e5dfdb" : "#e0d9d3")};
  }
`;

export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 15px;

  div {
    color: #5c0a1f;
  }
`;

export const HistoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const HistoryItem = styled.div`
  background: #ece7e2;
  border-radius: 12px;
  padding: 12px 18px;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

  .order {
    color: #91162c;
    font-weight: 700;
  }
`;
