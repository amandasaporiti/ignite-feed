import { ProfileContainer, ProfileContent, EditProfile } from "./styles"

import { PencilSimpleLine } from "phosphor-react"

import headerProfileImg from "../../assets/header-profile.svg"

import avatarProfileImg from "../../assets/leslie-avatar.svg"

import { Avatar } from "../Avatar"

export const Profile = () => {
  return (
    <ProfileContainer>
      <img src={headerProfileImg} />
      <ProfileContent>
        <Avatar src={avatarProfileImg} alt="Leslie" hasBorder />
        <h2>Leslie Alexander</h2>
        <p>UI Designer</p>
      </ProfileContent>
      <EditProfile>
        <button type="button">
          <PencilSimpleLine size={22} />
          Editar seu perfil
        </button>
      </EditProfile>
    </ProfileContainer>
  )
}
