import React from 'react';

const PostItem = ({ post }) => (
  <li>
    <a href={post.url} target="_blank" rel="noopener noreferrer">
      {post.title || 'No Title'}
    </a>
    <p>Author: {post.author}</p>
  </li>
);

export default PostItem;
