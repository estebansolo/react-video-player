import styled from "styled-components";

const StyledPlayer = styled.div`
  display: flex;
  transition: all 0.5s ease;
  min-height: 100vh;
  align-items: flex-start;
  background: ${props => props.theme.bgcolor};

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export default StyledPlayer;
