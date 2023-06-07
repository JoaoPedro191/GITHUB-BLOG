import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 54rem;
  width: 100%;
  margin: -82px auto;
  padding-bottom: 14.625rem;
`;

export const ProfileContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem 0 2.5rem;
  background-color: ${({ theme }) => theme["base-profile"]};
  height: 13.25rem;
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
`;

export const ProfileInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 2rem;

  > span {
    font-family: inherit;
    font-weight: 700;
    font-size: 1.5rem;
    color: ${({ theme }) => theme["base-title"]};
  }

  > p {
    margin-top: 0.5rem;
    font-family: inherit;
    color: ${({ theme }) => theme["base-text"]};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 2rem;
  grid-column-gap: 2rem;
  margin-top: 3rem;
`;
