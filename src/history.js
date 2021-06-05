/** @format */

// import { createBrowserHistory } from "history";
// export let history = createBrowserHistory();
const createBrowserHistory = require("history").createBrowserHistory;
export const history = createBrowserHistory({
  basename: "/",
});
