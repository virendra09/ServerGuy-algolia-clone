import React, { useEffect, useState } from 'react';
import PostItem from './PostItem';
import Pagination from './Pagination';

const PostList = ({ query }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://hn.algolia.com/api/v1/search?query=${query}&page=${page}`);
        const result = await response.json();
        setData(result.hits);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [query, page]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <ul>
        {data.map((item) => (
          <PostItem key={item.objectID} post={item} />
        ))}
      </ul>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default PostList;
