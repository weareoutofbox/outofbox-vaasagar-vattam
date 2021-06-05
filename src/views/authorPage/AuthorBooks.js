/** @format */

import React, { useState } from "react";
import msgIcon from "../../assets/images/Naren/msg.svg";
import Pagination from "./pagination";
import { Link } from "react-router-dom";
import Book1 from "../../assets/images/img/book-1.png";
import Book2 from "../../assets/images/img/book-2.png";
import Book3 from "../../assets/images/img/book-3.png";
import { AuthorBookWrap } from "./AuthorPageElements";

export default function AuthorBooks() {
  const [posts, setPosts] = useState([
    {
      userId: 1,
      id: 1,
      image: Book1,
      title: "City Of Ashes",
    },
    {
      userId: 1,
      id: 2,
      image: Book2,
      title: "City Of Ashes",
    },
    {
      userId: 1,
      id: 3,
      image: Book3,
      title: "City Of Ashes",
    },
    {
      userId: 1,
      id: 1,
      image: Book2,
      title: "City Of Ashes",
    },
    {
      userId: 1,
      id: 2,
      image: Book1,
      title: "City Of Ashes",
    },
    {
      userId: 1,
      id: 3,
      image: Book2,
      title: "City Of Ashes",
    },
    {
      userId: 1,
      id: 1,
      image: Book3,
      title: "City Of Ashes",
    },
    {
      userId: 1,
      id: 2,
      image: Book1,
      title: "City Of Ashes",
    },
    {
      userId: 1,
      id: 3,
      image: Book2,
      title: "City Of Ashes",
    },
    {
      userId: 1,
      id: 1,
      image: Book3,
      title: "City Of Ashes",
    },
    {
      userId: 1,
      id: 2,
      image: Book1,
      title: "City Of Ashes",
    },
    {
      userId: 1,
      id: 3,
      image: Book2,
      title: "City Of Ashes",
    },
  ]);
  const [showPerPage, setShowPerPage] = useState(10);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  return (
    <div>
      <AuthorBookWrap>
        {posts.slice(pagination.start, pagination.end).map((post) => (
          <div key={post.id}>
            <div>
              <div className='card-body'>
                <div className='homeCImg'>
                  <img src={post.image} className='bookImg' alt='bookImg' />
                </div>
                <p id='title'>City Of Ashes</p>
                <div className='reviewBox'>
                  <img width='16' src={msgIcon} alt='REVIEW' />
                  <Link to='/product'>
                    <p>
                      21 <span>reviews</span>
                    </p>
                  </Link>
                </div>
                <Link id='viewBtn' to='/product'>
                  View
                </Link>
              </div>
            </div>
          </div>
        ))}
      </AuthorBookWrap>
      <Pagination
        showPerPage={showPerPage}
        onPaginationChange={onPaginationChange}
        total={posts.length}
      />
    </div>
  );
}
