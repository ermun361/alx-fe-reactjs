import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Blog Post Detail</h2>
      <p>Viewing post with ID: <strong>{id}</strong></p>
    </div>
  );
};

export default BlogPost;