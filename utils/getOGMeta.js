// utils/getOpenGraphMeta.ts

import axios from 'axios';
import * as cheerio from 'cheerio';

export default async function getOpenGraphMeta(url) {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const title =
      $('meta[property="og:title"]').attr('content') || $('title').text();

    const description =
      $('meta[property="og:description"]').attr('content') ||
      $('meta[name="description"]').attr('content');

    const image =
      $('meta[property="og:image"]').attr('content') ||
      $('link[rel="icon"]').attr('href') ||
      new URL('/favicon.ico', url).href;

    return {
      title: title || 'No title found',
      description: description || 'No description found',
      image: image || 'No image found',
    };
  } catch (error) {
    console.error('Error fetching Open Graph metadata:', error);
    return {
      title: 'Error fetching title',
      description: 'Error fetching description',
      image: '/favicon.ico',
    };
  }
}
