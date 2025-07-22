// lib/fetchMeta.ts
import axios from 'axios'
import * as cheerio from 'cheerio'

export async function getPageMeta(url: string) {
  const { data } = await axios.get(url)
  const $ = cheerio.load(data)

  const title = $('title').text()
  const favicon =
    $('link[rel="icon"]').attr('href') ||
    $('link[rel="shortcut icon"]').attr('href') ||
    '/favicon.ico'

  const summary = $('meta[name="description"]').attr('content') || 'No summary available.'

  return { title, favicon, summary }
}
