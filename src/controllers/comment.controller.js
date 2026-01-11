const Comment = require('../models/Comment');

// Post  new comment
const addComment = async (req, res) => {
  try {
    const comment = new Comment(req.body);
    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get comment by id
const getCommentById = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    res.json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get comments by post id
const getCommentsByPostId = async (req, res) => {
  try {
    const {postId} = req.query;
    const comments = await Comment.find({ postId });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Put comment
const updateComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
   
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
   
    res.json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete comment
const deleteComment = async (req, res) => { 
    try {
        await Comment.findByIdAndDelete(req.params.id);
         
        res.json({ message: 'Comment deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
  addComment,
  getCommentById,
  getCommentsByPostId,
  updateComment,
  deleteComment
};