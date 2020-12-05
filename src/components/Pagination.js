import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PaginationLink = styled(Link)`
  display: inline-block;
  min-width: 15px;
  & ~ & {
    margin-left: 5px;
  }
`

export default function Pagination({ currentPage, totalPages }) {
  let pages = [];
  for (let i = currentPage - 2; i <= currentPage + 2; i++) {
    pages.push(i);
  }
  return (
    <div>
      {currentPage > 1 ? <PaginationLink to={`/posts?page=${currentPage - 1}`} >上一頁</PaginationLink> : ''}
      {pages
        .filter(page => {
          return page > 0 && page <= totalPages;
        })
        .map(page => {
          return (
            <PaginationLink key={page} to={`/posts?page=${page}`}>{page}</PaginationLink>
          )
        })
      }
      {currentPage < totalPages ? <PaginationLink to={`/posts?page=${currentPage + 1}`} >下一頁</PaginationLink> : ''}
    </div>
  )
}