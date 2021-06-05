/** @format */

import React, { useState } from "react";
import {
  AuthorInterviewWrap,
  AuthorInterviewContainer,
} from "./AuthorPageElements";
import { Link } from "react-router-dom";
import Pagination from "./pagination";

export default function AuthorInterview() {
  const [posts, setPosts] = useState([
    {
      userId: 1,
      id: 1,
      review:
        "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy...",
      title: "An interview with Sandro Loren",
    },
    {
      userId: 1,
      id: 1,
      review:
        "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy...",
      title: "An interview with Sandro Loren",
    },
    {
      userId: 1,
      id: 1,
      review:
        "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy...",
      title: "An interview with Sandro Loren",
    },
    {
      userId: 1,
      id: 1,
      review:
        "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy...",
      title: "An interview with Sandro Loren",
    },
    {
      userId: 1,
      id: 1,
      review:
        "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy...",
      title: "An interview with Sandro Loren",
    },
    {
      userId: 1,
      id: 1,
      review:
        "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy...",
      title: "An interview with Sandro Loren",
    },
  ]);
  const [showPerPage, setShowPerPage] = useState(5);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };
  return (
    <div>
      <AuthorInterviewWrap>
        {posts.slice(pagination.start, pagination.end).map((post) => (
          <AuthorInterviewContainer key={post.id}>
            <p id='p1'>{post.title}</p>
            <p id='p2'>
              {post.review}
              <Link to='/author-details/authorInterview'>Read More</Link>
            </p>
          </AuthorInterviewContainer>
        ))}
      </AuthorInterviewWrap>
      <Pagination
        showPerPage={showPerPage}
        onPaginationChange={onPaginationChange}
        total={posts.length}
      />
    </div>
  );
}
