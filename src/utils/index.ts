import { getCollection } from "astro:content"

export const formatDate = (
  date: Date | string | undefined,
  format: string = "DD MMM YYYY",
): string => {
  const validDate = date ? new Date(date) : new Date()

  const monthsShort = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]

  const tokens: Record<string, string> = {
    YYYY: validDate.getFullYear().toString(),
    MMM: monthsShort[validDate.getMonth()],
    MM: String(validDate.getMonth() + 1).padStart(2, "0"),
    DD: String(validDate.getDate()).padStart(2, "0"),
    HH: String(validDate.getHours()).padStart(2, "0"),
    mm: String(validDate.getMinutes()).padStart(2, "0"),
    ss: String(validDate.getSeconds()).padStart(2, "0"),
  }

  return format.replace(/YYYY|MMM|MM|DD|HH|mm|ss/g, (match) => tokens[match])
}

/**
 * Returns all posts from the English collection, sorted by pubDate descending.
 * @param locale - defaults to "en"
 */
export const getPostsByLocale = async (locale: string = "en") => {
  // Only English is used now
  const posts = await getCollection("enPosts")
  return posts.sort(
    (a, b) =>
      new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf(),
  )
}
