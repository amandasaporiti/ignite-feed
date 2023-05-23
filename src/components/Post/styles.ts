import styled from "styled-components"

export const PostContainer = styled.main`
  background: var(--gray-800);
  border-radius: 8px;
  padding: 2.5rem;

  & + main {
    margin-top: 2rem;
  }
`
export const PostHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  time {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 160%;
    color: var(--gray-400);
  }
`
export const HeaderContent = styled.div`
  display: flex;
  align-items: center;

  .profile-container {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;

    h3 {
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
  }
`
export const PublishPost = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
  border-bottom: 1px solid var(--gray-600);

  p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;
    color: var(--gray-300);
  }

  .link-post {
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;
    color: var(--green-500);
    margin-bottom: 1.5rem;
  }
`
