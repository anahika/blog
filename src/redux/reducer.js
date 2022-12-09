import { combineReducers } from "redux";

function blogs(state = [], action) {
  switch (action.type) {
    case "ADD_BLOG":
      return [...state, action.blog];
    case "LOAD_BLOGS":
      return action.blogs;
    case "DELETE_BLOG":
      const index = state.findIndex((post) => post.id === action.id);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  blogs,
});

export default rootReducer;
