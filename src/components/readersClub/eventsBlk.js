/** @format */

import React, { useState } from "react";
import Pagination from "../category/pagination";
import fa2 from "../../assets/images/img/fa2.png";
import fa1 from "../../assets/images/img/fa1.png";
import fa3 from "../../assets/images/img/fa3.png";
import playBtn from "../../assets/images/Naren/playBtn.png";
import play from "../../assets/images/icons/play.svg";
import book1 from "../../assets/images/img/book-1.png";
import book2 from "../../assets/images/img/book-2.png";
import untohim from "../../assets/images/img/rel-book.png";
import Like from "../like/like";
import ratings from "../../assets/images/icons/ratings-grp.png";
import { Link } from "react-router-dom";

function EventsBlk() {
  const [posts, setPosts] = useState([
    {
      userId: 1,
      id: 1,
      image: fa2,
      title: "Lorem Ipsum event title",
      body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.",
      author: "by: Friedrich Wilhelm",
      date: "11 May, 2021",
      time: "4:00 PM - 5:00 PM IST",
      language: "English",
    },
    {
      userId: 1,
      id: 2,
      image: fa1,
      title: "Lorem Ipsum event title",
      body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.",
      author: "by: Friedrich Wilhelm",
      date: "11 May, 2021",
      time: "4:00 PM - 5:00 PM IST",
      language: "English",
    },
    {
      userId: 1,
      id: 3,
      image: fa3,
      title: "City Of Ashes",
      body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.",
      author: "by: Friedrich Wilhelm",
      date: "11 May, 2021",
      time: "4:00 PM - 5:00 PM IST",
      language: "English",
    },
    {
      userId: 1,
      id: 4,
      image: fa1,
      title: "City Of Ashes",
      body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.",
      author: "by: Friedrich Wilhelm",
      date: "11 May, 2021",
      time: "4:00 PM - 5:00 PM IST",
      language: "English",
    },
    {
      userId: 1,
      id: 5,
      image: fa2,
      title: "Lorem Ipsum event title",
      body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.",
      author: "by: Friedrich Wilhelm",
      date: "11 May, 2021",
      time: "4:00 PM - 5:00 PM IST",
      language: "English",
    },
    {
      userId: 1,
      id: 6,
      image: fa3,
      title: "Lorem Ipsum event title",
      body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.",
      author: "by: Friedrich Wilhelm",
      date: "11 May, 2021",
      time: "4:00 PM - 5:00 PM IST",
      language: "English",
    },
    {
      userId: 1,
      id: 7,
      image: fa1,
      title: "Lorem Ipsum event title",
      body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.",
      author: "by: Friedrich Wilhelm",
      date: "11 May, 2021",
      time: "4:00 PM - 5:00 PM IST",
      language: "English",
    },
    {
      userId: 1,
      id: 1,
      image: fa2,
      title: "Lorem Ipsum event title",
      body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.",
      author: "by: Friedrich Wilhelm",
      date: "11 May, 2021",
      time: "4:00 PM - 5:00 PM IST",
      language: "English",
    },
    {
      userId: 1,
      id: 2,
      image: fa1,
      title: "Lorem Ipsum event title",
      body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.",
      author: "by: Friedrich Wilhelm",
      date: "11 May, 2021",
      time: "4:00 PM - 5:00 PM IST",
      language: "English",
    },
    {
      userId: 1,
      id: 3,
      image: fa3,
      title: "City Of Ashes",
      body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.",
      author: "by: Friedrich Wilhelm",
      date: "11 May, 2021",
      time: "4:00 PM - 5:00 PM IST",
      language: "English",
    },
    {
      userId: 1,
      id: 4,
      image: fa1,
      title: "City Of Ashes",
      body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.",
      author: "by: Friedrich Wilhelm",
      date: "11 May, 2021",
      time: "4:00 PM - 5:00 PM IST",
      language: "English",
    },
    {
      userId: 1,
      id: 5,
      image: fa2,
      title: "Lorem Ipsum event title",
      body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.",
      author: "by: Friedrich Wilhelm",
      date: "11 May, 2021",
      time: "4:00 PM - 5:00 PM IST",
      language: "English",
    },
    {
      userId: 1,
      id: 6,
      image: fa3,
      title: "Lorem Ipsum event title",
      body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.",
      author: "by: Friedrich Wilhelm",
      date: "11 May, 2021",
      time: "4:00 PM - 5:00 PM IST",
      language: "English",
    },
    {
      userId: 1,
      id: 7,
      image: fa1,
      title: "Lorem Ipsum event title",
      body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.",
      author: "by: Friedrich Wilhelm",
      date: "11 May, 2021",
      time: "4:00 PM - 5:00 PM IST",
      language: "English",
    },
  ]);
  const [showPerPage, setShowPerPage] = useState(6);
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
              <div className='n-events-card fade-in one'>
                <div className='n-eventsCard-body'>
                  <div className='eventCImg'>
                    <Link to='/product'>
                      <img src={post.image} className='bookImg' alt='bookImg' />
                    </Link>
                    {/* <div className='eventBlkOverlay'></div> */}
                    <div class='playIconBlk'>
                      {/* <button href='#' class='play-icon' title='Video Play'>
                          <i class='fa fa-play'></i> */}
                      <img src={play} alt='play' className='play-icon' />
                      {/* </button> */}
                    </div>
                  </div>
                  <div className='eventCBody'>
                    <p className='title'>{post.title}</p>
                    <p className='body'>{post.body}</p>
                    <div className='time-details'>
                      <p className='date'>{post.date}</p> <span>|</span>
                      <p className='time'>{post.time}</p> <span>|</span>
                      <p className='language'>{post.language}</p>
                    </div>
                    <Link to='/registration-thankyou'>
                      <button className='addCart'>Register</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='categoryBlk n-eventBlkPagination'>
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

export default EventsBlk;
