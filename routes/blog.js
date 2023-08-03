const express = require("express");
const router = express.Router();

//import the controllers
const { createComment } = require("../controller/commentController");
const { createPost, getAllPost } = require("../controller/postController");
const { likePost, unlikePost } = require("../controller/likeController");

//Mapping with controller
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPost);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);

//Exports
module.exports = router;