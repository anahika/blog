const express = require("express");
const { createPost, deletePost, updatePost, getSinglePost, getFeaturedPost, getPosts, searchPost, getPostBySlug, relatedPosts, uploadImage } = require("../controllers/post");
const multer = require("../middlewares/multer");
const { postValidator, validate } = require("../middlewares/postValidator");
const { parseData } = require("../middlewares/parseData");
const router = express.Router();

router.post("/create", multer.single('thumbnail'), parseData, postValidator, validate, createPost);
router.post("/upload-image", multer.single('image'), uploadImage);
router.put("/:postId", multer.single('thumbnail'), parseData, postValidator, validate, updatePost);
router.delete("/:postId", deletePost);
router.get("/single/:postId", getSinglePost);
router.get("/post/:slug", getPostBySlug);
router.get("/featured-posts", getFeaturedPost);
router.get("/posts", getPosts);
router.get("/search", searchPost);
router.get("/related-posts/:slug", relatedPosts);


module.exports = router;