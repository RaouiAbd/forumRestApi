let themeController = require('../controllers/themeController');

let express = require('express');

let router = express.Router();

router.post('/themes', themeController.addTheme);
router.get('/themes/:idForum', themeController.getThemesByForum);
router.put('/themes/:idTheme',themeController.modifyTheme)
router.delete('/themes/:idTheme',themeController.removeTheme)
module.exports = router;