import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  width: 26rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme["base-post"]};
  padding: 2rem 2rem 2rem 2rem;
  border: 2px solid transparent;

  &:hover {
    border: 2px solid ${({ theme }) => theme["base-label"]};
    cursor: pointer;
    transition: border 0.4s;
  }

  > p {
    font-family: inherit;
    color: ${({ theme }) => theme["base-text"]};
    line-height: 160%;
  }
`;

export const ContentPost = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  > h3 {
    font-family: inherit;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 160%;
    color: ${({ theme }) => theme["base-title"]};
    max-width: 283px;
    width: 100%;
  }

  > span {
    font-family: inherit;
    font-size: 0.875rem;
    color: ${({ theme }) => theme["base-span"]};
    line-height: 215%;
  }
`;
