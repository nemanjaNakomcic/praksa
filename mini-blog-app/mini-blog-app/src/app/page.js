import PostList from "@/components/PostList";
import Search from "@/components/Search";
import { getPosts } from "@/services/api";

export default async function Home({ searchParams }) {
  const page = parseInt(searchParams?.page || "1", 10);
  const fallbackPosts = await getPosts(10, page);

  return (
    <main>
      <h1>All blog posts</h1>
      <Search fallbackPosts={fallbackPosts} initialPage={page} />
    </main>
  );
}
