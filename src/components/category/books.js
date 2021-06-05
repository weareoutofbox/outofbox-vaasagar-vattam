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
      userId: 2,
      id: 16,
      title: "City Of Ashes",
      price: " ₹ 115",
      oldprice: " ₹ 150",
    },
    {
      userId: 2,
      id: 17,
      title: "City Of Ashes",
      price: " ₹ 115",
      oldprice: " ₹ 150",
    },
    {
      userId: 2,
      id: 18,
      title: "City Of Ashes",
      price: " ₹ 115",
      oldprice: " ₹ 150",
    },
    {
      userId: 2,
      id: 19,
      title: "adipisci placeat illum aut reiciendis qui",
      body: "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas",
    },
    {
      userId: 2,
      id: 20,
      title: "doloribus ad provident suscipit at",
      body: "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo",
    },
    {
      userId: 3,
      id: 21,
      title: "asperiores ea ipsam voluptatibus modi minima quia sint",
      body: "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt",
    },
    {
      userId: 3,
      id: 22,
      title: "dolor sint quo a velit explicabo quia nam",
      body: "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse",
    },
    {
      userId: 3,
      id: 23,
      title: "maxime id vitae nihil numquam",
      body: "veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis",
    },
    {
      userId: 3,
      id: 24,
      title: "autem hic labore sunt dolores incidunt",
      body: "enim et ex nulla\nomnis voluptas quia qui\nvoluptatem consequatur numquam aliquam sunt\ntotam recusandae id dignissimos aut sed asperiores deserunt",
    },
    {
      userId: 3,
      id: 25,
      title: "rem alias distinctio quo quis",
      body: "ullam consequatur ut\nomnis quis sit vel consequuntur\nipsa eligendi ipsum molestiae et omnis error nostrum\nmolestiae illo tempore quia et distinctio",
    },
    {
      userId: 3,
      id: 26,
      title: "est et quae odit qui non",
      body: "similique esse doloribus nihil accusamus\nomnis dolorem fuga consequuntur reprehenderit fugit recusandae temporibus\nperspiciatis cum ut laudantium\nomnis aut molestiae vel vero",
    },
    {
      userId: 3,
      id: 27,
      title: "quasi id et eos tenetur aut quo autem",
      body: "eum sed dolores ipsam sint possimus debitis occaecati\ndebitis qui qui et\nut placeat enim earum aut odit facilis\nconsequatur suscipit necessitatibus rerum sed inventore temporibus consequatur",
    },
    {
      userId: 3,
      id: 28,
      title: "delectus ullam et corporis nulla voluptas sequi",
      body: "non et quaerat ex quae ad maiores\nmaiores recusandae totam aut blanditiis mollitia quas illo\nut voluptatibus voluptatem\nsimilique nostrum eum",
    },
    {
      userId: 3,
      id: 29,
      title: "iusto eius quod necessitatibus culpa ea",
      body: "odit magnam ut saepe sed non qui\ntempora atque nihil\naccusamus illum doloribus illo dolor\neligendi repudiandae odit magni similique sed cum maiores",
    },
    {
      userId: 3,
      id: 30,
      title: "a quo magni similique perferendis",
      body: "alias dolor cumque\nimpedit blanditiis non eveniet odio maxime\nblanditiis amet eius quis tempora quia autem rem\na provident perspiciatis quia",
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
