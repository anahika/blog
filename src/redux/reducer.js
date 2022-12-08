import { combineReducers } from "redux";

function blogs(state = [], action) {
  switch (action.type) {
    case "ADD_BLOG":
      return [...state, action.blog];
    case "LOAD_BLOGS":
      return action.blogs;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  blogs,
});

export default rootReducer;
