import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  align-items: center;
  font-size: 1.5rem;

  > h2 {
    color: #61787b;
    > span {
      color: orange;
    }
  }
`;