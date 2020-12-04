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
import PostsList from '../components/PostsList';
import SinglePost from '../components/SinglePost'

export default function Posts() {
  let { path } = useRouteMatch();
  
  return (
    <Switch>
      <Route exact path={path}>
        <PostsList />
      </Route>
      <Route path={`${path}/:id`}>
        <SinglePost />
      </Route>
    </Switch>
  )
}
