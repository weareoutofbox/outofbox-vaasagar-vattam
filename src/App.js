/** @format */

import React from "react";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./views/loginScreen/login";
import Registration from "./views/registrationScreen.js/registration";
import HomePage from "./views/homePage";
import ProductPage from "./views/product/productPage";
import Category from "./views/category/category";
import PopularBookSets from "./views/popularBookSets/popularBookSets";
import FeaturedAuthor from "./views/featuredAuthor/featuredAuthor";
import ReadersClub from "./views/readersClub/readersClub";
import AuthorPage from "./views/authorPage/AuthorPage";
import Cart from "./views/CartSection/cart";
import PopularBook from "./views/popularBooks/popularBooks";
import ReadersThankyou from "./components/thankYou/readersThankyou";
import MyAccount from "./views/myAccount/myAccount";
import { withRouter } from "react-router-dom";
import scrollToTop from "./scrollToTop";
import ReviewBlkNav from "./components/readersClub/readersNav/reviewBlk";
import EventsBlkNav from "./components/readersClub/readersNav/eventBlkNav";
import OfferBlkNav from "./components/readersClub/readersNav/offersBlkNav";
import PointsBlkNav from "./components/readersClub/readersNav/pointsBlkNav";
import PollsNav from "./components/readersClub/readersNav/pollsNav";
import WishlistNav from "./components/myAccount/myAccountNav/wishlistNav";
import ReviewsNav from "./components/myAccount/myAccountNav/reviewsNav";
import EventsNav from "./components/myAccount/myAccountNav/eventsNav";
import PointsNav from "./components/myAccount/myAccountNav/pointsNav";
import OfferNav from "./components/myAccount/myAccountNav/offersNav";
const createBrowserHistory = require("history").createBrowserHistory;
export const history = createBrowserHistory({
  basename: "/review/vaasagar",
});

class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return (
      <div>
        <Router basename='/' onUpdate={() => window.scrollTo(0, 0)}>
          <scrollToTop />
          <Switch>
            <Route
              path={`${process.env.PUBLIC_URL}/`}
              component={HomePage}
              exact
            />

            <Route
              exact
              path={`${process.env.PUBLIC_URL}/login`}
              render={(props) => <Login {...props} />}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/registration`}
              component={Registration}
              exact
            />

            <Route
              path={`${process.env.PUBLIC_URL}/product`}
              component={ProductPage}
              exact
            />
            <Route
              path={`${process.env.PUBLIC_URL}/category`}
              component={Category}
              exact
            />
            <Route
              path={`${process.env.PUBLIC_URL}/popular-book-sets`}
              component={PopularBookSets}
              exact
            />
            <Route
              path={`${process.env.PUBLIC_URL}/popular-books`}
              component={PopularBook}
              exact
            />
            <Route
              path={`${process.env.PUBLIC_URL}/featured-author`}
              component={FeaturedAuthor}
              exact
            />
            <Route
              path={`${process.env.PUBLIC_URL}/readers-club/review`}
              component={ReviewBlkNav}
              exact
            />
            <Route
              path={`${process.env.PUBLIC_URL}/readers-club/event`}
              component={EventsBlkNav}
              exact
            />
            <Route
              path={`${process.env.PUBLIC_URL}/readers-club/offer`}
              component={OfferBlkNav}
              exact
            />
            <Route
              path={`${process.env.PUBLIC_URL}/readers-club/points`}
              component={PointsBlkNav}
              exact
            />
            <Route
              path={`${process.env.PUBLIC_URL}/readers-club/polls`}
              component={PollsNav}
              exact
            />

            {/* <Route
              path={`${process.env.PUBLIC_URL}/readers-club/`}
              component={ReadersClub}
              exact
            /> */}
            <Route
              path={`${process.env.PUBLIC_URL}/author-details`}
              component={AuthorPage}
              exact
            />
            <Route
              path={`${process.env.PUBLIC_URL}/cart`}
              component={Cart}
              exact
            />
            <Route
              path={`${process.env.PUBLIC_URL}/registration-thankyou`}
              component={ReadersThankyou}
              exact
            />
            <Route
              path={`${process.env.PUBLIC_URL}/my-account/wishlist`}
              component={WishlistNav}
              exact
            />
            <Route
              path={`${process.env.PUBLIC_URL}/my-account/reviews`}
              component={ReviewsNav}
              exact
            />
            <Route
              path={`${process.env.PUBLIC_URL}/my-account/events`}
              component={EventsNav}
              exact
            />
            <Route
              path={`${process.env.PUBLIC_URL}/my-account/points`}
              component={PointsNav}
              exact
            />
            <Route
              path={`${process.env.PUBLIC_URL}/my-account/polls`}
              component={PollsNav}
              exact
            />
            <Route
              path={`${process.env.PUBLIC_URL}/my-account/offers`}
              component={OfferNav}
              exact
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default withRouter(App);
