import {
  CommentContainer,
  CommentContent,
  CommentBox,
  LikeComment,
} from "./styles"

import { Trash, ThumbsUp } from "phosphor-react"

import avatarProfileImg from "../../assets/leslie-avatar.svg"
import { Avatar } from "../Avatar"
import { useState } from "react"

interface CommentProps {
  content: string
  onDeleteComment: (comment: string) => void
}

export const Comment = ({ content, onDeleteComment }: CommentProps) => {
  const [applaudCount, setApplaudCount] = useState(0)

  const handleDeletePost = () => {
    onDeleteComment(content)
  }

  const handleApplaudComment = () => {
    setApplaudCount((state) => {
      return state + 1
    })
  }

  return (
    <CommentContainer>
      <Avatar src={avatarProfileImg} alt="Leslie" hasBorder={false} />
      <CommentContent>
        <CommentBox>
          <div>
            <h3>Leslie Alexander (você)</h3>
            <time title="21 de Janeiro as 15:30">Cerca de 2h</time>
            <p>{content}</p>
          </div>
          <button onClick={() => handleDeletePost()}>
            <Trash size={24} />
          </button>
        </CommentBox>
        <LikeComment>
          <button onClick={handleApplaudComment}>
            <ThumbsUp size={24} />
            Aplaudir {applaudCount}
          </button>
        </LikeComment>
      </CommentContent>
    </CommentContainer>
  )
}
