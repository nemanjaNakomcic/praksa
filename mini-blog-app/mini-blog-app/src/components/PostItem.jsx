import styles from "../styles/components/postItem.module.scss";
import Link from "next/link";

export default function PostItem({ post }) {
  return (
    <div className={styles.postItem}>
      <h2>
        <Link href={`/posts/${post.id}`}>{post.title}</Link>
      </h2>
      <p>{post.body.substring(0, 100)}...</p>
    </div>
  );
}
