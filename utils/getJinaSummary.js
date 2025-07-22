// utils/getJinaSummary.ts

import axios from 'axios';

export default async function getJinaSummary(url) {
  try {
    const { data } = await axios.post(
      'https://r.jina.ai/',
      {  url },
      {
        headers: { 'Content-Type': 'application/json' },
      }

    );

    return data.summary || 'No summary available';
  } catch (err) {
    console.error('Jina summary error:', err);
    return 'Error generating summary';
  }
}
