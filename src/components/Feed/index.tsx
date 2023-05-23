import { Post } from "../Post"
import { Profile } from "../Profile"
import { FeedContainer } from "./styles"

export const Feed = () => {
  const posts = [
    {
      id: 1,
      author: {
        name: "Diego Fernandes",
        role: "Dev Front-End",
        authorUrl: "https://github.com/diego3g.png",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa 👋" },
        {
          type: "paragraph",
          content:
            " Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        { type: "link", content: " 👉 diego.rocketseat" },
        { type: "link", content: " #novoprojeto #nlw #rocketseat" },
      ],
      publishedAt: new Date("2023-01-21 20:23:00"),
    },
    {
      id: 2,
      author: {
        name: "Mayk Brito",
        role: "Dev Fron-End",
        authorUrl: "https://github.com/maykbrito.png",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa 👋" },
        {
          type: "paragraph",
          content:
            "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 ",
        },
        {
          type: "link",
          content: "Acesse e deixe seu feedback 👉 maykbrito.rocketseat",
        },
        { type: "link", content: "#front-end #userexperience" },
      ],
      publishedAt: new Date("2023-01-21 20:23:00"),
    },
  ]

  return (
    <FeedContainer>
      <Profile />

      <div>
        {posts.map((post) => (
          <Post
            key={post.id}
            content={post.content}
            author={post.author}
            publishedAt={post.publishedAt}
          />
        ))}
      </div>
    </FeedContainer>
  )
}
