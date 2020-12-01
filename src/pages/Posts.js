import { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  Switch,
  Route,
  useParams,
  useRouteMatch,
  useLocation
} from 'react-router-dom'
import { getPosts } from '../WebAPI';


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function PostsRouter() {
  let { url, path } = useRouteMatch();
  let query = useQuery();
  let page = query.get('page');
  console.log({ page, url, path });
  const [posts, setPosts] = useState();
  useEffect(() => {
    console.log(posts);
  }, [posts]);
  return (
    <Switch>
      <Route exact path={path}>
        Posts root
      </Route>
      <Route path={`${path}/:id`}>
        Posts params
      </Route>
    </Switch>
  )
}
