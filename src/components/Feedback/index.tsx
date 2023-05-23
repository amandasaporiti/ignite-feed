import { useState, FormEvent } from "react"
import { FeedbackContainer } from "./styles"

interface FeedbackProps {
  comments: string[]
  onSetComments: (comment: string[]) => void
}

export const Feedback = ({ comments, onSetComments }: FeedbackProps) => {
  const [textAreaComment, setTextAreaComment] = useState("")
  const [isFocused, setIsFocused] = useState(false)

  const handleCreateNewComment = (event: FormEvent) => {
    event.preventDefault()

    onSetComments([...comments, textAreaComment])
    setTextAreaComment("")
  }

  const isTextAreaFocused = () => {
    textAreaComment ? setIsFocused(true) : setIsFocused(false)
  }

  const isNewCommentEmpty = !textAreaComment

  return (
    <FeedbackContainer>
      <form onSubmit={handleCreateNewComment}>
        <h3>Deixe seu feedback</h3>

        <textarea
          placeholder="Deixe seu comentário"
          value={textAreaComment}
          onChange={(e) => setTextAreaComment(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={isTextAreaFocused}
        />

        {isFocused && (
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        )}
      </form>
    </FeedbackContainer>
  )
}
