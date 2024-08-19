import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  background-color: #1e2445;
  color: #fff;
`;

export const Tbody = styled.tbody`
  background-color: #fff;
`;

export const Tr = styled.tr`
  border-bottom: 1px solid #ddd;
`;

export const Th = styled.th`
  padding: 10px;
  text-align: ${(props) => (props.alignCenter ? "center" : "left")};
  width: ${(props) => props.width}%;
`;

export const Td = styled.td`
  padding: 10px;
  text-align: ${(props) => (props.alignCenter ? "center" : "left")};
`;

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #1e2445;
  font-size: 16px;
  &:hover {
    color: red;
  }`;
