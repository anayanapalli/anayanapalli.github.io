import { OGImageRoute } from "astro-og-canvas"
import { getPostsByLocale } from "~/utils"

const posts = await getPostsByLocale("en")

// Transform the collection into an object
// @ts-ignore
const pages = Object.fromEntries(posts.map(({ id, data }) => [id, { data }]))

export const { getStaticPaths, GET } = OGImageRoute({
  // The name of your dynamic route segment.
  // In this case it’s `route`, because the file is named `[...route].ts`.
  param: "route",

  // A collection of pages to generate images for.
  pages,
  // For each page, this callback will be used to customize the OG image.
  getImageOptions: async (_, { data }: (typeof pages)[string]) => {
    return {
      title: data.title,
      bgGradient: [
        [6, 38, 45],
        [8, 3, 2],
      ],
      logo: {
        path: "./public/favicon.png",
        size: [100],
      },
      fonts: ["./public/fonts/hwmc.otf"],
    }
  },
})
