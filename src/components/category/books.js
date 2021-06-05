/** @format */

import React, { useState } from "react";
import Pagination from "./pagination";
import book1 from "../../assets/images/img/book-1.png";
import book2 from "../../assets/images/img/book-2.png";
import untohim from "../../assets/images/img/rel-book.png";
import Like from "../like/like";
import ratings from "../../assets/images/icons/ratings-grp.png";
import { Link } from "react-router-dom";

function Books() {
  const [posts, setPosts] = useState([
    {
      userId: 1,
      id: 1,
      image: book1,
      title: "City Of Ashes",
      name: "Category Name",
      author: "by: Friedrich Wilhelm",
      price: " ₹ 115",
      oldprice: " ₹ 150",
    },
    {
      userId: 1,
      id: 2,
      image: book2,
      title: "City Of Ashes",
      name: "Category Name",
      author: "by: Friedrich Wilhelm",
      price: " ₹ 115",
      oldprice: " ₹ 150",
    },
    {
      userId: 1,
      id: 3,
      image: untohim,
      title: "City Of Ashes",
      name: "Category Name",
      author: "by: Friedrich Wilhelm",
      price: " ₹ 115",
      oldprice: " ₹ 150",
    },
    {
      userId: 1,
      id: 4,
      image: untohim,
      title: "City Of Ashes",
      name: "Category Name",
      author: "by: Friedrich Wilhelm",
      price: " ₹ 115",
      oldprice: " ₹ 150",
    },
    {
      userId: 1,
      id: 5,
      image: untohim,
      title: "City Of Ashes",
      name: "Category Name",
      author: "by: Friedrich Wilhelm",
      price: " ₹ 115",
      oldprice: " ₹ 150",
    },
    {
      userId: 1,
      id: 6,
      image: untohim,
      title: "City Of Ashes",
      name: "Category Name",
      author: "by: Friedrich Wilhelm",
      price: " ₹ 115",
      oldprice: " ₹ 150",
    },
    {
      userId: 1,
      id: 7,
      image: untohim,
      title: "City Of Ashes",
      name: "Category Name",
      author: "by: Friedrich Wilhelm",
      price: " ₹ 115",
      oldprice: " ₹ 150",
    },
    {
      userId: 1,
      id: 8,
      image: untohim,
      title: "City Of Ashes",
      name: "Category Name",
      author: "by: Friedrich Wilhelm",
      price: " ₹ 115",
      oldprice: " ₹ 150",
    },
    {
      userId: 1,
      id: 9,
      image: untohim,
      title: "City Of Ashes",
      name: "Category Name",
      author: "by: Friedrich Wilhelm",
      price: " ₹ 115",
      oldprice: " ₹ 150",
    },
    {
      userId: 1,
      id: 10,
      image: book1,
      title: "City Of Ashes",
      name: "Category Name",
      author: "by: Friedrich Wilhelm",
      price: " ₹ 115",
      oldprice: " ₹ 150",
    },
    {
      userId: 2,
      id: 11,
      image: book1,
      title: "City Of Ashes",
      name: "Category Name",
      author: "by: Friedrich Wilhelm",
      price: " ₹ 115",
      oldprice: " ₹ 150",
    },
    {
      userId: 2,
      id: 12,
      image: book1,
      title: "City Of Ashes",
      name: "Category Name",
      author: "by: Friedrich Wilhelm",
      price: " ₹ 115",
      oldprice: " ₹ 150",
    },
    {
      userId: 2,
      id: 13,
      image: book1,
      title: "City Of Ashes",
      name: "Category Name",
      author: "by: Friedrich Wilhelm",
      price: " ₹ 115",
      oldprice: " ₹ 150",
    },
    {
      userId: 2,
      id: 14,
      image: book1,
      title: "City Of Ashes",
      name: "Category Name",
      author: "by: Friedrich Wilhelm",
      price: " ₹ 115",
      oldprice: " ₹ 150",
    },
    {
      userId: 2,
      id: 15,
      image: book1,
      title: "City Of Ashes",
      name: "Category Name",
      author: "by: Friedrich Wilhelm",
      price: " ₹ 115",
      oldprice: " ₹ 150",
    },

    {
      userId: 1,
      id: 1,
      image: book1,
      title: "City Of Ashes",
      name: "Category Name",
      author: "by: Friedrich Wilhelm",
      price: " ₹ 115",
      oldprice: " ₹ 150",
    },
    {
      userId: 1,
      id: 2,
      image: book2,
      title: "City Of Ashes",
      name: "Category Name",
      author: "by: Friedrich Wilhelm",
      price: " ₹ 115",
      oldprice: " ₹ 150",
    },
    {
      userId: 1,
      id: 3,
      image: untohim,
      title: "City Of Ashes",
      name: "Category Name",
      author: "by: Friedrich Wilhelm",
      price: " ₹ 115",
      oldprice: " ₹ 150",
    },
    {
      userId: 1,
      id: 4,
      image: untohim,
      title: "City Of Ashes",
      name: "Category Name",
      author: "by: Friedrich Wilhelm",
      price: " ₹ 115",
      oldprice: " ₹ 150",
    },
    {
      userId: 1,
      id: 5,
      image: untohim,
      title: "City Of Ashes",
      name: "Category Name",
      author: "by: Friedrich Wilhelm",
      price: " ₹ 115",
      oldprice: " ₹ 150",
    },
    {
      userId: 1,
      id: 6,
      image: untohim,
      title: "City Of Ashes",
      name: "Category Name",
      author: "by: Friedrich Wilhelm",
      price: " ₹ 115",
      oldprice: " ₹ 150",
    },
    {
      userId: 1,
      id: 7,
      image: untohim,
      title: "City Of Ashes",
      name: "Category Name",
      author: "by: Friedrich Wilhelm",
      price: " ₹ 115",
      oldprice: " ₹ 150",
    },
    {
      userId: 1,
      id: 8,
      image: untohim,
      title: "City Of Ashes",
      name: "Category Name",
      author: "by: Friedrich Wilhelm",
      price: " ₹ 115",
      oldprice: " ₹ 150",
    },
    {
      userId: 1,
      id: 9,
      image: untohim,
      title: "City Of Ashes",
      name: "Category Name",
      author: "by: Friedrich Wilhelm",
      price: " ₹ 115",
      oldprice: " ₹ 150",
    },
    {
      userId: 1,
      id: 10,
      image: book1,
      title: "City Of Ashes",
      name: "Category Name",
      author: "by: Friedrich Wilhelm",
      price: " ₹ 115",
      oldprice: " ₹ 150",
    },
    {
      userId: 2,
      id: 11,
      image: book1,
      title: "City Of Ashes",
      name: "Category Name",
      author: "by: Friedrich Wilhelm",
      price: " ₹ 115",
      oldprice: " ₹ 150",
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
            <div className='col-md-3 mb-3' key={post.id}>
              <div className='card fade-in one'>
                <div className='card-body'>
                  <div className='homeCImg'>
                    <Link to='/product'>
                      <img src={post.image} className='bookImg' alt='bookImg' />
                    </Link>
                  </div>

                  <div className='like-book'>
                    <p className='categoryName'>{post.title}</p>
                    <Like />
                  </div>

                  <div className='authorBlk'>
                    {/* <p className='category'>{post.name}</p> */}
                    <p className='authorName'>{post.author}</p>
                  </div>
                  <div className='priceBlk'>
                    <p className='pricesec1'>{post.price}</p>
                    <p className='priceSec2'>
                      <strike>{post.oldprice}</strike>
                    </p>
                    <img src={ratings} alt='ratings' className='ratings' />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Pagination
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          total={posts.length}
        />
      </div>
    </div>
  );
}

export default Books;
