import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getPosts } from '../WebAPI';
import { timeStampConvert } from '../utils';
import Pagination from '../components/Pagination';


const PostTitleLink = styled(Link)`
  text-decoration: none;
  color: blue;
`


export default function PostsList({ page }) {
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalpages] = useState();
  
  useEffect(() => {
    const querystrings = {
      page,
      sort: 'createdAt',
      order: 'desc',
      limit: 5
    }
    getPosts({ querystrings })
      .then(res => {
        setTotalpages(Math.ceil(Number(res.headers.get('X-Total-Count')) / 5));
        return res.json()
      })
      .then(json => {
        setPosts(json);
      })
  }, [page]);

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
      <Pagination currentPage={page} totalPages={totalPages} />
    </div>
  )
}