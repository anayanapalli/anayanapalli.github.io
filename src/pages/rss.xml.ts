import rss from "@astrojs/rss"
import { common } from "~/config"
import { getPostsByLocale } from "~/utils"

/** Generate the RSS feed */
export async function GET() {
  // Fetch posts (currently only English)
  const posts = await getPostsByLocale("en")
  const config = common

  return rss({
    title: config.meta.title,
    description: config.meta.description,
    site:
      process.env.NODE_ENV === "development"
        ? "http://localhost:4321"
        : config.meta.url,
    items: posts.map((post: any) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/posts/${post.id}/`,
      content: post.rendered ? post.rendered.html : post.data.description,
    })),
    // Optional: custom XML for RSS extensions
    customData: "",
  })
}
