import styled from "styled-components";

export const CatalogContainer = styled.div`
  flex: 1;
  padding: 20px;
  transition: margin-left 0.9s ease;
  margin-left: ${({ expanded }) => (expanded ? "270px" : "100px")};
  background: #f9f7f3;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 26px;
  font-weight: 700;
  margin: 0;
`;

export const Tabs = styled.div`
  display: flex;
  gap: 15px;
  margin: 20px 0;
  flex-wrap: wrap;
`;

export const TabButton = styled.button`
  background: ${({ active }) => (active ? "#5c0a1f" : "#ece7e2")};
  color: ${({ active }) => (active ? "white" : "black")};
  border: none;
  width: 200px;
  padding: 13px 20px;
  border-radius: 15px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ active }) => (active ? "#660018" : "#e0e0e0")};
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const OrderButton = styled.button`
  background: #91162c;
  color: white;
  border: none;
  height: 75px;
  width: 180px;
  margin-top: -40px;
  padding: 10px 15px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);

  &:hover {
    background: #660018;
  }
`;

export const AddButton = styled.button`
  background: #5c0a1f;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 18px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #7a0d25;
  }
`;

export const CatalogList = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CatalogItem = styled.div`
  background: #ece7e2;
  border-radius: 16px;
  padding: 10px 15px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
    background: #ece7e2;
  }
`;

export const ItemName = styled.div`
  font-size: 15px;
`;

export const ItemActions = styled.div`
  font-size: 14px;
  display: flex;
  gap: 10px;

  span {
    cursor: pointer;
    &:hover {
      color: #b22222;
    }
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: #fffaf5;
  padding: 25px;
  border-radius: 12px;
  width: 400px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    margin: 0;
    color: #5c0a1f;
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 22px;
  cursor: pointer;
  color: #91162c;

  &:hover {
    color: #7a0d25;
  }
`;

export const ModalForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  
  label {
    margin: 8px 0 4px 0;
    font-size: 14px;
    color: #5c0a1f;
  }

  select {
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
    background: #ece7e2;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background: #ece7e2;
`;

export const Textarea = styled.textarea`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  min-height: 60px;
  background: #ece7e2;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 15px;
`;

export const SaveButton = styled.button`
  background: #91162c;
  color: white;
  padding: 10px 18px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #7a0d25;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

export const CancelButton = styled.button`
  background: #ddd;
  color: #333;
  padding: 10px 18px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #bbb;
  }
`;
