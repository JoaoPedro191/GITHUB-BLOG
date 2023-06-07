import styled from "styled-components";

export const PublicationsContainer = styled.div`
  margin-top: 4.5rem;
  display: flex;
  flex-direction: column;
  gap: 12px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      font-family: inherit;
      font-weight: 700;
      font-size: 18px;
      color: ${({ theme }) => theme["base-subtitle"]};
      line-height: 160%;
    }

    span {
      font-family: inherit;
      font-size: 14px;
      color: ${({ theme }) => theme["base-span"]};
    }
  }

  form {
    display: flex;
    > input {
      flex: 1;
      font-family: inherit;
      padding: 0.75rem 1rem;
      background-color: transparent;
      border-radius: 6px;
      background-color: ${({ theme }) => theme["base-input"]};
      border: 1px solid ${({ theme }) => theme["base-border"]};
      color: ${({ theme }) => theme["base-text"]};
      &:focus {
        border-color: rgb(50, 148, 248);
        box-shadow: 0 1px 1px rgba(229, 103, 23, 0.075) inset,
          0 0 8px rgb(50, 148, 248);
        outline: 0 none;
      }
      &::placeholder {
        color: ${({ theme }) => theme["base-label"]};
      }
    }
  }
`;
