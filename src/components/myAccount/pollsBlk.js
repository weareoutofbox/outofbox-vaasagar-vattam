/** @format */

import React, { useState, useEffect } from "react";
import Pagination from "../category/pagination";
import styled from "styled-components";
import axios from "axios";
import fa2 from "../../assets/images/img/fa2.png";
import fa1 from "../../assets/images/img/fa1.png";
import fa3 from "../../assets/images/img/fa3.png";
import book1 from "../../assets/images/img/book-1.png";
import book2 from "../../assets/images/img/book-2.png";
import untohim from "../../assets/images/img/rel-book.png";
import Like from "../like/like";
import ratings from "../../assets/images/icons/ratings-grp.png";
import { Link } from "react-router-dom";

function PollsBlk() {
  const Options = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 2em auto;
    @media screen and (min-width: 1180px) {
      width: 50%;
    }
  `;

  const Option = styled.button`
    display: block;
    border: 1px solid #616a94;
    border-radius: 15px;
    padding: 15px 30px;
    text-decoration: none;
    color: #616a94;
    background-color: transparent;
    transition: 0.3s;
    font-size: 1em;
    outline: none;
    user-select: none;
    margin-top: 1em;
    cursor: pointer;

    @media screen and (min-width: 1180px) {
      &:hover {
        color: white;
        background-color: #616a94;
      }
    }
  `;

  const Question = styled.div`
    width: 70%;
    margin: 0 auto;
  `;

  const [posts, setPosts] = useState([
    {
      userId: 1,
      id: 8,
      question: "What is 8 x 1?",
      answers: ["1", "8", "16", "9"],
      correct: 1,
    },
    {
      userId: 1,
      id: 8,
      question: "Who is Steve Jobs?",
      answers: [
        "CEO of Microsoft",
        "Barber in NY",
        "Movie Star",
        "CEO of Apple",
      ],
      correct: 3,
    },
    {
      userId: 3,
      id: 6,
      title: "Pulli Aadu Pullukattu",
      author: "by: Friedrich Wilhelm",
    },
    {
      userId: 4,
      id: 5,
      title: "Lorem Ipsum event title",
      author: "by: Friedrich Wilhelm",
    },
    {
      userId: 5,
      id: 4,
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

  const [quiz, setQuiz] = useState([]);
  const [number, setNumber] = useState(0);
  const [pts, setPts] = useState(0);

  const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

  const pickAnswer = (e) => {
    let userAnswer = e.target.outerText;

    if (quiz[number].answer === userAnswer) setPts(pts + 1);
    setNumber(number + 1);
  };
  useEffect(() => {
    axios
      .get(
        "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple"
      )
      .then((res) => {
        setQuiz(
          res.data.results.map((item) => ({
            question: item.question,
            options: shuffle([...item.incorrect_answers, item.correct_answer]),
            answer: item.correct_answer,
          }))
        );
      })
      .catch((err) => console.error(err));
  }, []);
  const [showPerPage, setShowPerPage] = useState(1);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };
  return (
    <div className='n-pollsWrap'>
      <h1 className='heading'>Select best book of 2021</h1>
      <div className='n-pollsBlk App'>
        <div className=' py-4 n-pollsblkSec'>
          <div className='n-row-d-flex'>
            {posts.slice(pagination.start, pagination.end).map((post) => (
              <div className='n-polls-card fade-in one' key={post.id}>
                {quiz[number] && (
                  <>
                    <Question
                      dangerouslySetInnerHTML={{
                        __html: quiz[number].question,
                      }}></Question>

                    <Options>
                      {quiz[number].options.map((item, index) => (
                        <div>
                          <li className='book-filterList'>
                            <label>
                              <input
                                type='radio'
                                id='c1'
                                name='cc'
                                class='mycheckbox'
                                onClick={pickAnswer}
                              />
                              <span onClick={pickAnswer}></span>
                            </label>
                          </li>
                          <Option
                            key={index}
                            dangerouslySetInnerHTML={{ __html: item }}></Option>
                        </div>
                      ))}
                    </Options>
                  </>
                )}
                {/* {number === 5 && <GameOver pts={pts} />} */}

                <div className='n-pollsBody filterWrap'>
                  <li className='book-filterList'>
                    <label>
                      <input
                        type='radio'
                        id='c1'
                        name='cc'
                        class='mycheckbox'
                      />
                      <span></span>
                    </label>
                  </li>
                  <div className='n-pollsDetailsWrap'>
                    <p className='title'>{post.title}</p>
                    <p className='body'>{post.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=''>
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

export default PollsBlk;
