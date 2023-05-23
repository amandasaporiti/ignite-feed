import { ImgHTMLAttributes } from "react"

import { AvatarContainer } from "./styles"

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder: boolean
}

export const Avatar = ({ hasBorder, ...rest }: AvatarProps) => {
  return (
    <AvatarContainer hasBorder={hasBorder}>
      <img {...rest} />
    </AvatarContainer>
  )
}
