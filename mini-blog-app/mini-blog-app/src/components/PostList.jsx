import PostItem from "./PostItem";
import Pagination from "./Pagination";

export default function PostList({
  posts,
  currentPage,
  totalPages,
  onPageChange,
}) {
  return (
    <>
      <ul>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </>
  );
}
