const express = require('express');
const router = express.Router();

const {
    addPost,
  getAllPosts,
  getPostById,
  updatePost
} = require('../controllers/post.controller');

router.post('/', addPost);
router.get('/', getAllPosts);
router.get('/:id', getPostById);
router.put('/:id', updatePost);

module.exports = router;