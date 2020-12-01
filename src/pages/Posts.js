import { useState, useEffect } from 'react';
import styled from 'styled-components';
import queryString from 'query-string';
import { getPosts } from '../WebAPI';


export default function Posts() {
  const queryParams = queryString.parse(window.location.hash);
  console.log(queryParams);
  const requestParams = {}
  const [posts, setPosts] = useState(queryParams);
  useEffect(() => {
    console.log(posts);
  }, [posts]);
  return (
    <h1>
      Posts
    </h1>
  )
}
