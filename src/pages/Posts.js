import { useState, useEffect, createContext } from 'react';
import styled from 'styled-components';
import {
  Switch,
  Route,
  useParams,
  useRouteMatch,
  useLocation
} from 'react-router-dom'
import { useQuery } from '../utils';
import PostsList from '../components/PostsList';
import SinglePost from '../components/SinglePost'

export default function Posts() {
  const { path } = useRouteMatch();
  const query = useQuery();
  //const [page, setPage] = useState();
  const page = Number(query.get('page')) || 1;
  /*
  useEffect(() => {
    setPage(Number(query.get('page')) || 1);
  }, [page, query])
  */
  return (
      <Switch>
        <Route exact path={path}>
          <PostsList page={page} />
        </Route>
        <Route path={`${path}/:id`}>
          <SinglePost />
        </Route>
      </Switch>
  )
}
