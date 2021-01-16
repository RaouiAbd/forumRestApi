const express = require('express');
const router = express.Router();

let  postController = require('../controllers/postController');

router.get('/posts', postController.getPosts);
router.get('/posts/:postId', postController.getPostById);
router.post('/posts', postController.addPost);
router.put('/posts/:postId', postController.modifyPost);
router.delete('/posts/:postId', postController.removePost);

module.exports = router;