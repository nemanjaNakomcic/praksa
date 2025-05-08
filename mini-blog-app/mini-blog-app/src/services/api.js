const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function getPosts(limit = 10, page = 1) {
  const res = await fetch(`${BASE_URL}/posts?_limit=${limit}&_page=${page}`);
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export async function getAllPosts() {
  const res = await fetch(`${BASE_URL}/posts`);
  if (!res.ok) throw new Error("Failed to fetch all posts");
  return res.json();
}

export async function getPostById(id) {
  const res = await fetch(`${BASE_URL}/posts/${id}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) return null;
  return await res.json();
}

export async function getUserById(id) {
  const res = await fetch(`${BASE_URL}/users/${id}`);
  if (!res.ok) return null;
  return await res.json();
}

export async function getPostsByUserId(userId) {
  const res = await fetch(`${BASE_URL}/posts?userId=${userId}`);

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const posts = await res.json();

  return posts;
}

export async function getCommentsByPostId(postId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
  if (!res.ok) return [];

  return await res.json();
}
