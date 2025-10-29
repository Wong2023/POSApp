import styled from "styled-components";

/* Обёртка сайдбара */
export const SidebarWrapper = styled.div`
  width: 70px;
  height: 100vh;
  background: #ece7e2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 20px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  transition: width 0.8s ease;
  overflow: visible;

  border-top-right-radius: 28px;
  border-bottom-right-radius: 28px;
  box-shadow: 10px 0 24px rgba(0, 0, 0, 0.15);

  &:hover {
    width: 250px;
  }
`;

export const SidebarIcon = styled.div`
  width: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 20px 13px;
  cursor: pointer;
  transition: transform 0.6s ease-in-out;

  ${SidebarWrapper}:hover & {
    transform: translateX(93px);
    transition: transform 0.7s ease-in-out;
  }
`;

export const IconCircle = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: #732031;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 0.9rem;
  margin-bottom: 8px;
  margin-right: 20px;
`;

export const IconName = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  color: #732031;
  margin-bottom: 2px;
  margin-right: 20px;
`;

export const IconText = styled.div`
  font-size: 0.9rem;
  color: #732031;
  margin-right: 20px;
`;

export const SidebarItem = styled.div`
  position: relative;
  margin-left: 10px;
  width: calc(100% - 10px);
  height: 50px;
  border-radius: 30px;
  background: transparent;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s, box-shadow 0.3s;

  ${SidebarWrapper}:hover &.active {
    background: #f9f7f3;
    border-radius: 30px 0 0 30px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    z-index: 2;
    overflow: visible;
  }

  ${SidebarWrapper}:hover &.active::after {
    content: "";
    position: absolute;
    top: 0;
    right: -24px;
    width: 24px;
    height: 100%;
    background: #f9f7f3;
    box-shadow: 16px 0 26px rgba(255, 255, 255, 0.85);
    z-index: 1;
  }

  svg {
    margin-right: 25px;
    font-size: 1.3rem;
    min-width: 20px;
    flex-shrink: 0;
  }

  span {
    white-space: nowrap;
    font-weight: bold;
    opacity: 0;
    transform: translateX(-20px);
    transition: opacity 0.6s ease, transform 0.3s ease;
  }

  ${SidebarWrapper}:hover & span {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const IconWrapper = styled.div`
  position: relative;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    width: 55px;
    height: 45px;
    border-radius: 25px;
    background: ${(props) => (props.$active ? "#f9f7f3" : "transparent")};
    left: -17px;
    top: 0;
    z-index: 0;
    transition: background 0.3s ease;
  }

  ${SidebarWrapper}:hover &::before {
    background: transparent;
  }

  svg {
    position: relative;
    z-index: 1;
    color: #000;
    font-size: 1.2rem;
  }
`;

export const Spacer = styled.div`
  flex-grow: ${(props) => props.$grow || 1};
`;

export const MiddleItemsGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
