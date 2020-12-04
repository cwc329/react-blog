import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getPosts } from '../WebAPI';
import { useQuery, timeStampConvert } from '../utils';

const PostTitleLink = styled(Link)`
  text-decoration: none;
  color: blue;
`


export default function PostsList() {
  const [posts, setPosts] = useState([]);
  let query = useQuery();
  useEffect(() => {
    let page = query.get('page') || 1;
    const querystrings = {
      page,
      sort: 'createdAt',
      order: 'desc',
      limit: 5
    }
    getPosts({ querystrings }).then(data => setPosts(data))
  }, [])
  return (
    <div>
      {posts.map(post => {
        return (
          <div key={post.id}>
            <PostTitleLink to={`posts/${post.id}`}><h1 key={post.id}>{post.title}</h1></PostTitleLink>
            <h4>{timeStampConvert(post.createdAt)}</h4>
          </div>
        )
      })}
    </div>
  )
}