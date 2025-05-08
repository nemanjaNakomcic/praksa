"use client";

import styles from "@/styles/components/commentList.module.scss";

import { useEffect, useState } from "react";
import { getCommentsByPostId } from "@/services/api";

export default function CommentList({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsByPostId(postId).then(setComments);
  }, [postId]);

  return (
    <section className={styles.comments}>
      <h3>Comments</h3>
      {comments.map((c) => (
        <div key={c.id} className={styles.comment}>
          <strong>{c.name}</strong>
          <span>({c.email})</span>
          <p>{c.body}</p>
        </div>
      ))}
    </section>
  );
}
