const express = require('express')
const router = express.Router();
const controller = require('../Controller/controller')


router.get('/', controller.getController)

router.post('/', controller.postController)

router.get('/:id', controller.getSingleId)

router.put('/:id', controller.updateContact)

router.delete('/:id', controller.delateController)
module.exports = router;