import styled from "styled-components"

interface AvatarContainerProps {
  hasBorder: boolean
}
export const AvatarContainer = styled.div<AvatarContainerProps>`
  img {
    height: 3rem;
    width: 3rem;
    border-radius: 8px;
    box-sizing: ${(props) => (props.hasBorder ? "initial" : "border-box")};
    border: ${(props) => (props.hasBorder ? "4px solid var(--gray-800)" : "0")};
    outline: ${(props) =>
      props.hasBorder ? "2px solid var(--green-500)" : "0"};
  }
`
