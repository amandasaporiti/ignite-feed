import { PostContainer, PostHeader, HeaderContent, PublishPost } from "./styles"

import { format, formatDistanceToNow } from "date-fns"

import ptBR from "date-fns/esm/locale/pt-BR"

import { Feedback } from "../Feedback"
import { Comment } from "../Comment"
import { Avatar } from "../Avatar"
import { useState } from "react"

interface Author {
  name: string
  role: string
  authorUrl: string
}

interface Content {
  type: string
  content: string
}

interface PostProps {
  author: Author
  content: Content[]
  publishedAt: Date
}

export const Post = ({ content, author, publishedAt }: PostProps) => {
  const publishedDate = format(publishedAt, "d 'de' LLLL 'ás' HH:mm' hrs'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  const [comments, setComments] = useState(["Post muito bacana"])

  const deleteComment = (commentToDelete: string) => {
    const commentsWithoutDeletedComment = comments.filter((item) => {
      return item !== commentToDelete
    })

    setComments(commentsWithoutDeletedComment)
  }

  return (
    <PostContainer>
      <PostHeader>
        <HeaderContent>
          <Avatar src={author.authorUrl} alt={author.name} hasBorder />
          <div className="profile-container">
            <h3>{author.name}</h3>
            <p>{author.role}</p>
          </div>
        </HeaderContent>
        <time title={publishedDate} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </PostHeader>

      <PublishPost>
        {content.map((item) => {
          if (item.type === "paragraph") {
            return <p key={item.content}>{item.content}</p>
          } else if (item.type === "link") {
            return (
              <p className="link-post" key={item.content}>
                {item.content}
              </p>
            )
          }
        })}
      </PublishPost>

      <Feedback comments={comments} onSetComments={setComments} />

      {comments.map((comment) => (
        <Comment
          content={comment}
          key={comment}
          onDeleteComment={deleteComment}
        />
      ))}
    </PostContainer>
  )
}
