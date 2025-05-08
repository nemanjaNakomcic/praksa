import PostList from "@/components/PostList";
import { getUserById, getPostsByUserId } from "@/services/api";
import styles from "@/styles/pages/userPage.module.scss";

export default async function UserPage({ params }) {
  const user = await getUserById(params.id);

  if (!user) return null; // TODO: 404 ako ne postoji custom

  const posts = await getPostsByUserId(params.id);

  return (
    <main className={styles.userPage}>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <h2>Users posts:</h2>
      <PostList posts={posts} />
    </main>
  );
}
