import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  align-items: center;
  font-size: 1.5rem;

  > h2 {
    justify-content: center;
    color: #61787b;
    padding: 0 100px;
    > span {
      color: orange;
    }
  }
`;