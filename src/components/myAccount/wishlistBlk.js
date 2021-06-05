/** @format */

import React, { useState } from "react";
import Pagination from "../category/pagination";
import fa2 from "../../assets/images/img/fa2.png";
import msg from "../../assets/images/icons/msg.png";
import fa1 from "../../assets/images/img/fa1.png";
import fa3 from "../../assets/images/img/fa3.png";
import dBook from "../../assets/images/img/d-book.png";
import book1 from "../../assets/images/img/book-1.png";
import book2 from "../../assets/images/img/book-2.png";
import untohim from "../../assets/images/img/rel-book.png";
import Like from "../like/like";
import ratings from "../../assets/images/icons/ratings-grp.png";
import { Link } from "react-router-dom";

function WishlistBlk() {
  const [posts, setPosts] = useState([
    {
      userId: 1,
      id: 8,
      book: dBook,
      category: "Category",
      title: "Pulli Aadu Pullukattu",
      author: "by: Friedrich Wilhelm",
      detail:
        "It is a long established fact that a reader will be distracted by readable...",
    },
    {
      userId: 2,
      id: 7,
      book: dBook,
      category: "Category",
      title: "City Of Ashes",
      author: "by: Friedrich Wilhelm",
      detail:
        "It is a long established fact that a reader will be distracted by readable...",
    },
    {
      userId: 3,
      id: 6,
      book: dBook,
      category: "Category",
      title: "Pulli Aadu Pullukattu",
      author: "by: Friedrich Wilhelm",
      detail:
        "It is a long established fact that a reader will be distracted by readable...",
    },
    {
      userId: 4,
      id: 5,
      book: dBook,
      category: "Category",
      title: "Lorem Ipsum event title",
      author: "by: Friedrich Wilhelm",
      detail:
        "It is a long established fact that a reader will be distracted by readable...",
    },
    {
      userId: 5,
      id: 4,
      category: "Category",
      title: "City Of Ashes",
      author: "by: Friedrich Wilhelm",
    },
    {
      userId: 6,
      id: 3,
      title: "City Of Ashes",
      author: "by: Friedrich Wilhelm",
    },
    {
      userId: 7,
      id: 2,
      title: "City Of Ashes",
      author: "by: Friedrich Wilhelm",
    },
    {
      userId: 8,
      id: 1,
      title: "City Of Ashes",
      author: "by: Friedrich Wilhelm",
    },
  ]);
  const [showPerPage, setShowPerPage] = useState(4);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };
  return (
    <div className='n-eventsBlk App'>
      <div className=' py-4'>
        <div className='row'>
          {posts.slice(pagination.start, pagination.end).map((post) => (
            <div className='col-md-2 mb-3' key={post.id}>
              <div className='n-wishlist-card fade-in one'>
                <div className='n-wishlistSec1'>
                  <img src={post.book} alt='book' className='book' />
                </div>
                <div className='n-wishlistSec2'>
                  <p className='category'>{post.category}</p>
                  <p className='title'>{post.title}</p>
                  <p className='author'>{post.author}</p>
                  <div className='rating-reviews'>
                    <img src={ratings} alt='ratings' className='ratingsImg' />
                    <div className='reviews'>
                      <img src={msg} alt='msg' className='reviewsImg' />
                      <p className=''>120 Reviews</p>
                    </div>
                  </div>
                  <p className='detail'>{post.detail}</p>
                  <div className='priceBlk'>
                    <p className='mainprice'> ₹ 115</p>
                    <strike> ₹ 150</strike>
                    <p class='stocks'>5 stocks left</p>
                  </div>
                  <button className='cart-btn'>Add to Cart</button>
                </div>
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

export default WishlistBlk;
