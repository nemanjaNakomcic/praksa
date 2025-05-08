import Link from "next/link";
import { getUserById, getPostById } from "@/services/api";
import CommentList from "../../../components/CommentList";
import styles from "@/styles/pages/postPage.module.scss";

export async function generateMetadata({ params }) {
  const post = await getPostById(params.id);

  if (!post) {
    return {
      title: "Post not found",
      description: "Post could not be found",
    };
  }

  return {
    title: post.title,
    description: post.body.substring(0, 150),
  };
}

export default async function PostPage({ params }) {
  const post = await getPostById(params.id);
  if (!post) return null; // TODO: 404 ako ne postoji custom

  const author = await getUserById(post.userId);

  return (
    <main className={styles.postPage}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p className={styles.authorInfo}>
        Autor: <Link href={`/users/${author.id}`}>{author.name}</Link> (
        {author.email})
      </p>
      <CommentList postId={post.id} />
    </main>
  );
}
