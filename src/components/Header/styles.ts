import styled from "styled-components"

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--gray-800);
  padding: 1.25rem 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  gap: 1rem;

  h1 {
    color: var(--gray-100);
    font-weight: 700;
    font-size: 1.62rem;
    line-height: 160%;
  }
`
