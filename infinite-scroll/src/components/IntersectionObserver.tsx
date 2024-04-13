import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  body: string;
}

const InfiniteScrollPosts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const observer = useRef<IntersectionObserver | null>(null);
  const bottomBoundaryRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    // Function to fetch more posts
    const fetchMorePosts = async () => {
      setLoading(true);
      try {
        const response = await axios.get<Post[]>(
          `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`
        );
        const newPosts = response.data;
        setPosts((prevPosts) => [...prevPosts, ...newPosts]);
        setPage(page + 1);
        setLoading(false);
        if (newPosts.length === 0) {
          setHasMore(false); // No more posts to fetch
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };
    // Create IntersectionObserver when component mounts
    observer.current = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        console.log({target})
        if (target.isIntersecting && !loading && hasMore) {
          fetchMorePosts();
        }
      },
      { threshold: 0.5 }
    );

    if (bottomBoundaryRef.current) {
      observer.current.observe(bottomBoundaryRef.current);
    }

    // Clean up function
    return () => {
      if (observer.current && bottomBoundaryRef.current) {
        observer.current.unobserve(bottomBoundaryRef.current);
      }
    };
  }, [loading, hasMore, page]);

  return (
    <div style={{ height: '200px', overflowY: 'scroll' }}>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
        {loading && <li>Loading...</li>}
        {hasMore && <li ref={bottomBoundaryRef}></li>}
      </ul>
    </div>
  );
};

export default InfiniteScrollPosts;
