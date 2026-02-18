import React from 'react';
import { useQuery } from 'react-query';

// Function to fetch posts from the API
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponents = () => {
     // useQuery hook handles loading, error, and data states automatically
  const { data, error, isLoading, isError, refetch } = useQuery('posts', fetchPosts, {
    // Optional: caching configurations
    cacheTime: 10 * 60 * 1000, // Cache for 10 minutes
    staleTime: 5 * 60 * 1000,  // Data stays "fresh" for 5 minutes
  });

  // Handle loading state
  if (isLoading) return <div>Loading posts...</div>;

  // Handle error state
  if (error) return <div>Error loading data</div>;
  // Render the list of posts
  return(
    <div>
      <h2>Posts</h2>
      {/* Implement Refetch Feature */}
      <button onClick={() => refetch()} style={{ marginBottom: '20px' }}>
        Refetch Posts
      </button>

      <ul>
        {data.map((post) => (
          <li key={post.id} style={{ marginBottom: '10px', borderBottom: '1px solid #ccc' }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponents;