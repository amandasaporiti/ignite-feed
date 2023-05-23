import styled from "styled-components"

export const FeedbackContainer = styled.section`
  margin-top: 1.5rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    h3 {
      font-weight: 700;
      font-size: 1rem;
      line-height: 160%;
      color: var(--gray-100);
    }

    textarea {
      height: 6rem;
      width: 100%;
      background: var(--gray-900);
      color: var(--gray-100);
      font-weight: 400;
      font-size: 1rem;
      line-height: 140%;
      border: 0;
      border-radius: 8px;
      outline: 0;
      padding: 1rem 0.8125rem;
      resize: none;

      :focus {
        border: 1px solid var(--green-500);
      }
    }

    button {
      font-weight: 700;
      font-size: 1rem;
      line-height: 1.1875rem;
      color: var(--white);
      background: var(--green-700);
      border-radius: 8px;
      border: 0;
      width: 108px;
      height: 49px;
      transition: background-color 0.1s;

      :not(:disabled):hover {
        background: var(--green-500);
      }

      :disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }
    }
  }
`
