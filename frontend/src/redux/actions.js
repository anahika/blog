import { database } from "../database/config";
import { ref, set, get, child, getDatabase, remove } from "firebase/database";

export function startAddingBlog(blog) {
  return (dispatch) => {
    return set(ref(database, "blogs/" + blog.id), blog).then(() => {
      dispatch(addBlog(blog));
    });
  };
}

export function startLoadingBlogs() {
  return (dispatch) => {
    const dbRef = ref(getDatabase());
    let blogs = [];

    return get(child(dbRef, "blogs"))
      .then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          blogs.push(childSnapshot.val());
        });
        dispatch(loadBlogs(blogs));
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export function startDeletingBlog(id) {
  return (dispatch) => {
    return remove(ref(database, "blogs/" + id))
      .then(() => {
        dispatch(deleteBlog(id));
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export function addBlog(blog) {
  return {
    type: "ADD_BLOG",
    blog,
  };
}

export function loadBlogs(blogs) {
  return {
    type: "LOAD_BLOGS",
    blogs,
  };
}

export function deleteBlog(id) {
  return {
    type: "DELETE_BLOG",
    id,
  };
}
