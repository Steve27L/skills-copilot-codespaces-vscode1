// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');

// Get all comments
router.get('/', async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one comment
router.get('/:id', getComment, (req, res) => {
  res.json(res.comment);
});

// Create one comment
router.post('/', async (req, res) => {
  const comment = new Comment({
    comment: req.body.comment,



