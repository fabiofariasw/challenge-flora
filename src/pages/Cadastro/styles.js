import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  margin: 30px auto;
  border-radius: 8px;
  border: 1px solid #d3d3d3;
  padding: 20px;

  h1 {
    text-align: center;
    margin: 16px 0;
  }

  p {
    margin: 0;
  }
`;

export const ContCircle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 4px;
  z-index: 1;

  label {
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 500;
    color: var(--cyano-400);
  }

  &:last-child{
    div {
      background: transparent;
      border: 1px solid var(--cyano-400);
      color: var(--cyano-400);
    }
  }
`;

export const Circle = styled.div`
  color: #fff; 
  background: var(--cyano-400);
  border-radius: 50%;
  height: 50px;
  width: 50px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    font-size: 26px;
  }
`

export const SpanLabel = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Roboto';
  
  label {
    font-weight: 500;
  }

  p {
    font-size: 12px;
  }
`;

export const SubCont = styled.div`
  margin-top: 10px;
  
  label {
    text-decoration: underline;
  }

  p {
    margin: 0;
  }
`;

export const ContButton1 = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContButton2 = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LittleButton = styled.button`
  width: 150px;
  padding: 6px 0;
  border-radius: 4px;
  cursor: pointer;
  border: none;
`;

export const BigButton = styled.button`
  margin-top: 10px;
  border-radius: 4px;
  border: none;
  padding: 12px 0;
  cursor: pointer;

  &:last-child {
    background: var(--orange);
    color: #fff;
  }
`