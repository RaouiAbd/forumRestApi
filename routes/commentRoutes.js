
let commentController = require('../controllers/commentsController');

let express = require('express');

let router = express.Router();


router.get('/comments/posts/:postId', commentController.getCommentsByPost);
router.post('/comments',commentController.addComment);
router.put('/comments/:commentId',commentController.modifyComment);
router.delete('/comments/:commentId',commentController.removeComment);

module.exports = router;
