import Link from "next/link";
import styles from "@/styles/components/pagination.module.scss";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const handleClick = (page) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  return (
    <nav className={styles.pagination}>
      {currentPage > 1 &&
        (onPageChange ? (
          <button onClick={() => handleClick(currentPage - 1)}>
            ← Previous
          </button>
        ) : (
          <Link href={`/?page=${currentPage - 1}`}>← Previous</Link>
        ))}

      <span>{currentPage}</span>

      {currentPage < totalPages &&
        (onPageChange ? (
          <button onClick={() => handleClick(currentPage + 1)}>Next →</button>
        ) : (
          <Link href={`/?page=${currentPage + 1}`}>Next →</Link>
        ))}
    </nav>
  );
}
