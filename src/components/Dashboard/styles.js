import styled from "styled-components";

export const Container = styled.div`
  width: 98%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1050px;
  margin: 20px auto;
  
  h2 {
    margin-bottom: 20px;
    text-align: center;
  }
`;

export const GraphContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 1120px;
  margin: 20px auto;
`;

export const Graph = styled.div`
  width: 48%;
`;
