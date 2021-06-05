/** @format */

import React, { useState } from "react";
import Pagination from "../category/pagination";
import book1 from "../../assets/images/img/book-1.png";
import book2 from "../../assets/images/img/book-2.png";
import untohim from "../../assets/images/img/rel-book.png";
import Like from "../like/like";
import lm from "../../assets/images/img/lm.png";
import ratings from "../../assets/images/icons/ratings-grp.png";
import { Link } from "react-router-dom";

function CustomerReviews() {
  const [posts, setPosts] = useState([
    {
      userId: 1,
      id: 1,
      image: lm,
      name: "Leena Maheshwari",
      brand: "Author",
      text: "Many desktop publishing packages and default model text and a search for lorem ipsum will uncover many web sites still in their infancy.",
      ratings: "4",
    },
    {
      userId: 2,
      id: 2,
      image: lm,
      name: "Leena Maheshwari",
      brand: "Author",
      text: "Many desktop publishing packages and default model text and a search for lorem ipsum will uncover many web sites still in their infancy.",
      ratings: "4",
    },
    {
      userId: 3,
      id: 3,
      image: lm,
      name: "Leena Maheshwari",
      brand: "Author",
      text: "Many desktop publishing packages and default model text and a search for lorem ipsum will uncover many web sites still in their infancy.",
      ratings: "4",
    },
    {
      userId: 4,
      id: 4,
      image: lm,
      name: "Leena Maheshwari",
      brand: "Author",
      text: "Many desktop publishing packages and default model text and a search for lorem ipsum will uncover many web sites still in their infancy.",
      ratings: "4",
    },
    {
      userId: 5,
      id: 5,
      image: lm,
      name: "Leena Maheshwari",
      brand: "Author",
      text: "Many desktop publishing packages and default model text and a search for lorem ipsum will uncover many web sites still in their infancy.",
      ratings: "4",
    },
    {
      userId: 6,
      id: 6,
      image: lm,
      name: "Leena Maheshwari",
      brand: "Author",
      text: "Many desktop publishing packages and default model text and a search for lorem ipsum will uncover many web sites still in their infancy.",
      ratings: "4",
    },
    {
      userId: 7,
      id: 7,
      image: lm,
      name: "Leena Maheshwari",
      brand: "Author",
      text: "Many desktop publishing packages and default model text and a search for lorem ipsum will uncover many web sites still in their infancy.",
      ratings: "4",
    },
    {
      userId: 8,
      id: 8,
      image: lm,
      name: "Leena Maheshwari",
      brand: "Author",
      text: "Many desktop publishing packages and default model text and a search for lorem ipsum will uncover many web sites still in their infancy.",
      ratings: "4",
    },
    {
      userId: 9,
      id: 9,
      image: lm,
      name: "Leena Maheshwari",
      brand: "Author",
      text: "Many desktop publishing packages and default model text and a search for lorem ipsum will uncover many web sites still in their infancy.",
      ratings: "4",
    },
    {
      userId: 10,
      id: 10,
      image: lm,
      name: "Leena Maheshwari",
      brand: "Author",
      text: "Many desktop publishing packages and default model text and a search for lorem ipsum will uncover many web sites still in their infancy.",
      ratings: "4",
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
    <div className='App'>
      <div className=' py-4'>
        <div className='row'>
          {posts.slice(pagination.start, pagination.end).map((post) => (
            <div className='' key={post.id}>
              <div className='fade-in one productSecWrap  '>
                <div className='showReviewBlk'>
                  <div className='reviewBox'>
                    <div className='rBWrap'>
                      <div className='rBBlk'>
                        <img src={lm} alt='img' />
                        <div>
                          <p className='name'>{post.name}</p>
                          <p className='brand'>{post.brand}</p>
                        </div>
                      </div>
                      <div className='rBBlk1'>
                        <p className='text'>{post.text}</p>
                        <div className='ratings'>
                          <p className='number'>{post.ratings}</p>
                          <img src={ratings} alt='ratings' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="reviewsPaginationWrap">
        <div className="categoryBlk">
        <Pagination
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          total={posts.length}
        />
      </div>
      </div>
      </div>
    </div>
  );
}

export default CustomerReviews;
