import styled from "styled-components";

export const InfosWithIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > span {
    font-weight: inherit;
    color: ${({ theme }) => theme["base-subtitle"]};
  }
`;
