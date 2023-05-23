import styled from "styled-components"

export const CommentContainer = styled.section`
  display: flex;
  margin-top: 2rem;
  align-items: flex-start;
  gap: 1rem;
`

export const CommentContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`

export const CommentBox = styled.div`
  display: flex;
  padding: 1rem 1rem 1.5rem 1rem;
  background: #29292e;
  border-radius: 9px;
  justify-content: space-between;
  align-items: flex-start;

  button {
    color: var(--gray-400);
    cursor: pointer;
    line-height: 0;
    background: transparent;
    border: 0;
    transition: color 0.1s;

    :hover {
      color: var(--red-danger);
    }
  }

  div {
    display: flex;
    flex-direction: column;

    h3 {
      font-weight: 700;
      font-size: 0.875rem;
      line-height: 160%;
      color: var(--gray-100);
    }

    time {
      font-weight: 400;
      font-size: 0.75rem;
      line-height: 160%;
      color: var(--gray-400);
    }

    p {
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 160%;
      margin-top: 1rem;
      color: var(--gray-300);
    }
  }
`
export const LikeComment = styled.div`
  display: flex;
  button {
    gap: 0.625rem;
    font-weight: 700;
    font-size: 0.875rem;
    background: transparent;
    border: 0;
    color: var(--gray-400);
    cursor: pointer;
    line-height: 0;
    display: flex;
    align-items: center;
    transition: color 0.1s;

    :hover {
      color: var(--green-500);
    }
  }
`
