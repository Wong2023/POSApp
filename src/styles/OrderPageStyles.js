import styled from "styled-components";

export const OrderPageContainer = styled.div`
  flex: 1;
  display: flex;
  background: #faf7f2;
  min-height: 100vh;
  padding: 20px;
  margin-left: ${(props) => (props.expanded ? "250px" : "70px")};
  transition: margin-left 0.6s ease;
`;

/* 🔹 Левая панель */
export const LeftPanel = styled.div`
  flex: 2;
  padding: 20px;
  overflow-y: auto;
`;

/* 🔹 Правая панель */
export const RightPanel = styled.div`
  flex: 1;
  background: #f9f7f3;
  border: 2px solid #800020;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 40px);
  margin-left: 20px;
`;

/* 🔹 Контейнер шапки */
/* Контейнер шапки */
export const TabsContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(236, 234, 230, 0.7); /* еле заметный */
  border-radius: 12px 12px 12px 25px;
  padding: 35px 20px 0; /* верх сделали больше */
  margin: -30px -30px 30px -30px; /* растянуть на всю ширину контейнера */
`;


/* Вкладки */
export const Tabs = styled.div`
  display: flex;
  gap: 20px;
`;

export const Tab = styled.div`
  flex: 1;
  text-align: center;
  padding: 12px 18px;
  font-weight: 700;
  font-size: 14px;
  color: #5c0a1f;
  background: ${(props) => (props.active ? "#f9f7f3" : "transparent")};
  border-radius: ${(props) => (props.active ? "10px 10px 0 0" : "0")};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  box-shadow: ${(props) =>
    props.active ? "0px 3px 6px rgba(0,0,0,0.15)" : "none"};
`;

/* Поиск теперь под контейнером */
export const SearchWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px 0 20px;
`;

export const SearchBar = styled.input`
  width: 220px;
  padding: 8px 12px;
  border-radius: 20px;
  border: 1px solid #ddd;
  outline: none;
  background: #f7f5f2;
  font-size: 14px;
`;


/* 🔹 Заголовок категории */
export const SectionTitle = styled.h4`
  margin: 40px 0 15px;
  color: #b25a70;
  font-size: 16px;
  font-weight: bold;
  border-top: 1px solid #e6b8c7;
  padding-top: 10px;
`;

/* 🔹 Сетка продуктов */
export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 20px;
`;

export const ProductCard = styled.div`
  background: #f2efeb;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  font-weight: 600;
  color: #800020;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #e6dcdc;
  }
`;

/* 🔹 Хедер заказа */
export const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #800020;
  color: #fff;
  padding: 12px 15px;
  font-weight: 700;
  border-radius: 10px 10px 0 0;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

/* 🔹 Список заказов */
export const OrderList = styled.div`
  flex: 1;
  padding: 15px;
  overflow-y: auto;
`;

export const OrderItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

export const OrderItem = styled.div`
  flex: 1;
  padding: 12px 15px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  width: ${(props) => (props.selected ? "75%" : "100%")};
`;

export const OrderItemInfo = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #5c0a1f;
`;

export const HiddenActions = styled.div`
  display: flex;
  gap: 8px;
  margin-left: 10px;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.3s ease;

  button {
    border: none;
    border-radius: 6px;
    padding: 6px 10px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    color: white;
  }

  .plus { background: #008000; }
  .edit { background: #444; }
  .delete { background: #b22222; }

  button:hover {
    opacity: 0.85;
  }
`;

export const Summary = styled.div`
  padding: 15px;
  border-top: 1px solid #ddd;
  background: #fefefe;
  border-radius: 8px;
  margin: 10px;

  p {
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
    font-size: 14px;
    color: #800020;
  }

  input {
    width: 100%;
    padding: 8px;
    border-radius: 6px;
    border: 1px solid #ccc;
    margin: 8px 0;
    outline: none;
  }

  h3 {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    font-size: 16px;
    font-weight: bold;
    color: #800020;
  }
`;

export const PayButton = styled.button`
  background: #800020;
  color: white;
  border: none;
  margin: 15px;
  padding: 15px;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background: #660018;
  }
`;
