/** @format */

import React, { useState } from "react";
import Pagination from "../../components/category/pagination";
import fa2 from "../../assets/images/img/fa2.png";
import fa1 from "../../assets/images/img/fa1.png";
import fa3 from "../../assets/images/img/fa3.png";
import Like from "../like/like";
import ratings from "../../assets/images/icons/ratings-grp.png";
import { Link } from "react-router-dom";

function Author() {
  const [posts, setPosts] = useState([
    {
      userId: 1,
      id: 1,
      image: fa1,
      title: "City Of Ashes",
    },
    {
      userId: 1,
      id: 2,
      image: fa2,
      title: "City Of Ashes",
    },
    {
      userId: 1,
      id: 3,
      image: fa3,
      title: "City Of Ashes",
    },
    {
      userId: 1,
      id: 1,
      image: fa1,
      title: "City Of Ashes",
    },
    {
      userId: 1,
      id: 2,
      image: fa2,
      title: "City Of Ashes",
    },
    {
      userId: 1,
      id: 3,
      image: fa3,
      title: "City Of Ashes",
    },
    {
      userId: 1,
      id: 1,
      image: fa1,
      title: "City Of Ashes",
    },
    {
      userId: 1,
      id: 2,
      image: fa2,
      title: "City Of Ashes",
    },
    {
      userId: 1,
      id: 3,
      image: fa3,
      title: "City Of Ashes",
    },
    {
      userId: 1,
      id: 1,
      image: fa1,
      title: "City Of Ashes",
    },
    {
      userId: 1,
      id: 2,
      image: fa2,
      title: "City Of Ashes",
    },
    {
      userId: 1,
      id: 3,
      image: fa3,
      title: "City Of Ashes",
    },
    {
      userId: 1,
      id: 1,
      image: fa1,
      title: "City Of Ashes",
    },
    {
      userId: 1,
      id: 2,
      image: fa2,
      title: "City Of Ashes",
    },
    {
      userId: 1,
      id: 3,
      image: fa3,
      title: "City Of Ashes",
    },
    {
      userId: 1,
      id: 1,
      image: fa1,
      title: "City Of Ashes",
    },
    {
      userId: 1,
      id: 2,
      image: fa2,
      title: "City Of Ashes",
    },
    {
      userId: 1,
      id: 3,
      image: fa3,
      title: "City Of Ashes",
    },
    {
      userId: 1,
      id: 1,
      image: fa1,
      title: "City Of Ashes",
    },
    {
      userId: 1,
      id: 2,
      image: fa2,
      title: "City Of Ashes",
    },
    {
      userId: 1,
      id: 3,
      image: fa3,
      title: "City Of Ashes",
    },
    {
      userId: 1,
      id: 1,
      image: fa1,
      title: "City Of Ashes",
    },
    {
      userId: 1,
      id: 2,
      image: fa2,
      title: "City Of Ashes",
    },
    {
      userId: 1,
      id: 3,
      image: fa3,
      title: "City Of Ashes",
    },
    {
      userId: 1,
      id: 1,
      image: fa1,
      title: "City Of Ashes",
    },
    {
      userId: 1,
      id: 2,
      image: fa2,
      title: "City Of Ashes",
    },
    {
      userId: 1,
      id: 3,
      image: fa3,
      title: "City Of Ashes",
    },
    {
      userId: 1,
      id: 1,
      image: fa1,
      title: "City Of Ashes",
    },
    {
      userId: 1,
      id: 2,
      image: fa2,
      title: "City Of Ashes",
    },
    {
      userId: 1,
      id: 3,
      image: fa3,
      title: "City Of Ashes",
    },
  ]);
  const [showPerPage, setShowPerPage] = useState(12);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };
  return (
    <div className='App'>
      <div className=' py-4'>
        <div className='row'>
          {posts.slice(pagination.start, pagination.end).map((post) => (
            <div className='col-md-4 mb-3' key={post.id}>
              <div className='card fade-in one'>
                <Link to='/product'>
                  <div className='card-body'>
                    <div className='homeCImg'>
                      <img src={post.image} className='bookImg' alt='bookImg' />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className='categoryBlk'>
          <Pagination
            showPerPage={showPerPage}
            onPaginationChange={onPaginationChange}
            total={posts.length}
          />
        </div>
      </div>
    </div>
  );
}

export default Author;
