import styled from "styled-components";

export const StatsWrapper = styled.div`
  flex: 1;
  padding: 24px;
  background: #f9f7f3;
  min-height: 100vh;
  transition: margin-left 0.8s ease;
  margin-left: ${({ $expanded }) => ($expanded ? "290px" : "100px")};
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 18px;

  .title-wrap {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 26px;
  font-weight: 800;
  color: #5c0a1f;
`;

export const Subtitle = styled.div`
  color: #8e8076;
  font-size: 13px;
`;

export const TabsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

export const Tab = styled.button`
  flex: 0 0 auto;
  width: 96px;
  height: 42px;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.04);
  background: ${({ $active }) => ($active ? "#5c0a1f" : "#ece7e2")};
  color: ${({ $active }) => ($active ? "#fff" : "#1b1b1b")};
  font-weight: 700;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  transition: background 0.2s ease, color 0.2s ease;
  outline: none;
  user-select: none;

  &:hover {
    background: ${({ $active }) => ($active ? "#6d0f22" : "#e7e1db")};
  }
`;

export const FiltersBar = styled.div`
  background: #f1ede8;
  padding: 10px 14px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  min-height: 60px;
  width: 505px;

  label {
    font-size: 13px;
    color: #6a5e56;
  }

  input,
  select {
    background: #ece7e2;
    border: none;
    border-radius: 10px;
    padding: 10px 12px;
    outline: none;
    font-size: 0.95rem;
    color: #2a2725;
    min-width: 160px;
    max-width: 200px;
  }

  .spacer {
    flex: 1;
  }

  .search {
    min-width: 220px;
  }
`;

export const CardsRow = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(4, minmax(180px, 1fr));
  gap: 12px;
  align-items: stretch;
  justify-items: stretch;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Card = styled.div`
  background: #f1ede8;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.12);
    background: #efe9e2;
  }

  .label {
    color: #8e8076;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 12px;
  }

  .value {
    font-size: 24px;
    font-weight: 800;
    color: #3a3430;
  }
`;

export const TwoCols = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 14px;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

export const Panel = styled.div`
  background: #f1ede8;
  border-radius: 12px;
  padding: 18px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  height: 420px;
  overflow: hidden;
`;

export const ScrollArea = styled.div`
  overflow-y: auto;
  flex: 1;
  padding-right: 6px;

  /* Красивый кастомный скролл */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #c7bab0;
    border-radius: 6px;
    transition: background 0.3s ease;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #a78e80;
  }
  &::-webkit-scrollbar-track {
    background: #efe9e2;
    border-radius: 6px;
  }

  scrollbar-color: #c7bab0 #efe9e2;
  scrollbar-width: thin;
`;

export const PanelTitle = styled.h3`
  margin: 0 0 14px 0;
  font-size: 14px;
  color: #5c0a1f;
  letter-spacing: 0.4px;
  font-weight: 900;
  text-transform: uppercase;
`;

export const Hint = styled.div`
  margin-top: 4px;
  font-size: 12px;
  color: #8e8076;
`;

export const List = styled.div`
  display: grid;
  gap: 8px;
`;

export const ListRow = styled.div`
  background: #ece7e2;
  border-radius: 10px;
  padding: 12px;
  display: grid;
  grid-template-columns: 1fr 80px 120px;
  align-items: center;
  font-weight: 600;
  color: #2c2622;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);

  .name {
    color: #91162c;
    font-weight: 800;
  }

  .qty {
    text-align: right;
    color: #3a3430;
  }

  .revenue {
    text-align: right;
    color: #3a3430;
  }
`;

export const Table = styled.div`
  width: 100%;
  background: #ece7e2;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

export const TableHead = styled.div`
  display: grid;
  grid-template-columns: 1fr 110px 130px;
  background: #e7dfd7;
  padding: 12px 14px;
  font-size: 12px;
  font-weight: 800;
  color: #5c0a1f;
  text-transform: uppercase;
`;

export const TableBodyScroll = styled.div`
  max-height: 250px;
  overflow-y: auto;

  /* красивый скролл */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #c7bab0;
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #a78e80;
  }
  &::-webkit-scrollbar-track {
    background: #efe9e2;
  }

  scrollbar-color: #c7bab0 #efe9e2;
  scrollbar-width: thin;
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 110px 130px;
  padding: 12px 14px;
  border-top: 1px solid #dfd6ce;
  background: #f6f2ed;

  &:nth-child(even) {
    background: #f2eee8;
  }

  .cell-name {
    font-weight: 700;
    color: #2f2a27;
  }

  .cell-qty,
  .cell-sum {
    text-align: right;
    font-weight: 700;
    color: #3c3631;
  }
`;

export const TotalsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 110px 130px;
  padding: 12px 14px;
  background: #eaddd2;
  border-top: 2px solid #cdbfb1;
  font-weight: 900;

  .label {
    color: #5c0a1f;
    text-transform: uppercase;
  }

  .qty,
  .sum {
    text-align: right;
    color: #5c0a1f;
  }
`;
