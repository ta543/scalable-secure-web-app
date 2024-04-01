import { fetchData } from './utils/api.js';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

async function loadPosts() {
  const posts = await fetchData(API_URL);
  if (posts) {
    console.log('Posts:', posts);
  } else {
    console.log('Failed to fetch posts.');
  }
}

loadPosts();
