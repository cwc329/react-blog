import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPosts } from '../WebAPI';
import { timeStampConvert } from '../utils';

export default function SinglePost() {
  const [post, setPost] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getPosts({ id })
      .then(response => response.json())
      .then(data => { setPost(data) });
  }, [])
  return (
    <div>
      <h1>{post.title}</h1>
      <h4>{timeStampConvert(post.createdAt)}</h4>
      <p>{post.body}</p>
    </div>
  )
}