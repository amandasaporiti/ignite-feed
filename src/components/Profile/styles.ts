import styled from "styled-components"

export const ProfileContainer = styled.aside`
  background: var(--gray-800);
  border-radius: 8px;
  overflow: hidden;

  img {
    object-fit: cover;
  }
`
export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin: -35px 0 1rem 0;
  }

  h2 {
    font-weight: 700;
    font-size: 1rem;
    line-height: 160%;
    color: var(--gray-100);
  }

  p {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 160%;
    color: var(--gray-400);
  }
`

export const EditProfile = styled.footer`
  display: flex;
  justify-content: center;
  border-radius: 4px;
  border-top: 1px solid var(--gray-600);
  margin-top: 1.5rem;

  button {
    background: transparent;
    border: 1px solid var(--green-500);
    border-radius: 8px;
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    color: var(--green-500);
    font-weight: 700;
    font-size: 1rem;
    line-height: 19px;
    gap: 0.625rem;
    margin: 1.5rem 0 2rem 0;
    transition: color 0.1s, background-color 0.1s;

    :hover {
      background-color: var(--green-500);
      color: var(--white);

      svg {
        color: var(--white);
      }
    }
  }
`
