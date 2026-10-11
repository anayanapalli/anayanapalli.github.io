import { glob } from "astro/loaders"
import { defineCollection } from "astro:content"
import { z } from "zod"

const postSchema = z.object({
  title: z.string(),
  pubDate: z.coerce.date(),
})

const enPostsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/posts" }),
  schema: postSchema,
})

export const collections = {
  enPosts: enPostsCollection,
}
