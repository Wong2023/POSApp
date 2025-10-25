import styled, { keyframes } from "styled-components";

// Цвета строго как на фото
export const pageBg = "#f9f7f3"; // фон страницы (самый светлый)
export const cardBg = "#ece7e2"; // карточка (чуть темнее)
export const accent = "#732031"; // основной акцент
export const buttonBg = "#91162c"; // кнопки
export const buttonBgDanger = "#b80627";
export const inputText = "#732031"; // текст в инпуте
export const border = "#e1dad2"; // бордер карточки

export const Container = styled.div`
  background: ${pageBg};
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding-top: 34px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 85px;
  height: 85px;
  background: ${accent};
  border-radius: 50%;
  margin-bottom: 1.1rem;
`;

export const Name = styled.div`
  font-size: 2.1rem;
  font-weight: bold;
  color: ${accent};
  margin-bottom: 0.09rem;
`;

export const Role = styled.div`
  margin-bottom: 1.8rem;
  font-size: 1rem;
  width: 180px;
  text-align: left;
`;

export const Card = styled.div`
  background: ${cardBg};
  box-shadow: 0 2px 12px rgba(100, 100, 100, 0.1);
  width: 880px;
  margin-bottom: 20px;
  padding: 24px 26px 26px 26px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`;

export const SectionHeader = styled.div`
  font-weight: 600;
  height: 40px;
  padding-top: 10px;
  color: ${accent};
  font-size: 1.07rem;
`;

export const CardEdit = styled.div`
  color: #7e788a;
  font-size: 1.02rem;
  cursor: pointer;
  transition: color 0.2s;
  user-select: none;
  &:hover {
    color: ${accent};
  }
`;

export const InputGrid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => (props.singleColumn ? "1fr" : "1fr 1fr")};
  gap: 19px 30px;
  margin-top: 2px;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    gap: 14px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InputLabel = styled.div`
  margin-top: 18px;
  font-size: 0.91rem;
  color: #845159;
  font-weight: 500;
  margin-bottom: 6px;
  text-align: left;
  display: flex;
  align-items: center;
  height: 26px;
`;

export const InputField = styled.input`
  background: ${pageBg};
  border: none;
  border-radius: 7px;
  font-size: 1.08rem;
  padding: 12px 15px;
  width: 100%;
  color: ${inputText};
  font-weight: 500;
  box-sizing: border-box;
  text-align: left;
  outline: none;

  &:focus {
    outline: 2px solid ${accent};
    background: ${cardBg};
  }
`;

export const Section = styled.div`
  margin-top: 18px;
  background: ${cardBg};
  width: 890px;
  box-sizing: border-box;
  border-radius: 12px;
  padding-bottom: 16px;
`;

export const SectionEdit = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 24px 6px 24px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 42px;
  width: 100%;
  max-width: 340px;
  display: flex;
  flex-direction: column;
  gap: 17px;
  align-items: center;
`;

export const Button = styled.button`
  background: ${buttonBg};
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1.15rem;
  font-weight: 600;
  padding: 12px 0;
  width: 100%;
  cursor: pointer;
  transition: background 0.2s;
  box-shadow: 0 1px 6px rgba(100, 100, 100, 0.07);

  &:hover {
    background: #660014;
  }
`;

export const ButtonDanger = styled(Button)`
  background: ${buttonBgDanger};
  &:hover {
    background: #971228;
  }
`;

export const SaveButton = styled(ButtonDanger)`
  margin: 28px auto 0 auto;
  width: 220px;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 0.5px;
  box-shadow: 0 3px 10px rgba(184, 6, 39, 0.25);
`;

/* === Toast уведомление === */
const slideIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideOut = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(30px); }
`;

export const Toast = styled.div`
  position: fixed;
  bottom: 25px;
  right: 25px;
  background: ${(props) =>
    props.$type === "error" ? "#b80627" : "#2e7d32"};
  color: white;
  padding: 14px 22px;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
  z-index: 2000;
  animation: ${(props) => (props.$visible ? slideIn : slideOut)} 0.4s ease;
`;

