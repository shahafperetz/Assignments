const express = require('express');
const router = express.Router();

const {
    addComment,
    getCommentById,
    getCommentsByPostId,
    updateComment,
    deleteComment
} = require('../controllers/comment.controller');

router.post('/', addComment);
router.get('/', getCommentsByPostId);
router.get('/:id', getCommentById);
router.put('/:id', updateComment);
router.delete('/:id', deleteComment);

module.exports = router;