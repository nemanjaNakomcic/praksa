"use client";

import { useState, useEffect } from "react";
import { getAllPosts, getPosts } from "@/services/api";
import PostList from "./PostList";
import styles from "@/styles/components/search.module.scss";

export default function Search({ fallbackPosts, initialPage }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [serverPosts, setServerPosts] = useState(fallbackPosts);
  const [currentPage, setCurrentPage] = useState(initialPage || 1);

  const postsPerPage = 10;

  useEffect(() => {
    if (!searchTerm) {
      getPosts(postsPerPage, currentPage).then(setServerPosts);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [searchTerm, currentPage]);

  useEffect(() => {
    if (searchTerm.length > 0 && allPosts.length === 0) {
      getAllPosts().then(setAllPosts);
    }
  }, [searchTerm]);

  // Filter all posts client-side
  useEffect(() => {
    if (searchTerm) {
      const filtered = allPosts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPosts(filtered);
      setCurrentPage(1);
    }
  }, [searchTerm, allPosts]);

  const postsToShow = searchTerm ? filteredPosts : serverPosts;
  const totalPages = searchTerm
    ? Math.ceil(filteredPosts.length / postsPerPage)
    : 10;

  const paginatedPosts = searchTerm
    ? postsToShow.slice(
        (currentPage - 1) * postsPerPage,
        currentPage * postsPerPage
      )
    : postsToShow;

  return (
    <>
      <div className={styles.searchContainer}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <PostList
        posts={paginatedPosts}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
}
