import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme["base-profile"]};
  height: 18.5rem;
  padding-top: 4rem;
  background-image: url("./src/assets/effectRight.svg"),
    url("./src/assets/effectLeft.svg"), url("./src/assets/effectBottom.svg");
  background-position: right, left, center bottom;
  background-repeat: no-repeat;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
