const express = require('express')
const playersController = require('../controllers/players')
const { authenticate } = require('../middleware')
const router = express.Router()

router.get('/', playersController.getAllPlayers)

router.get('/:id', authenticate, playersController.getPlayerById)

router.post('/', authenticate, playersController.createPlayer)

router.put('/:id', authenticate, playersController.updatePlayerById)

router.delete('/:first_name', authenticate, playersController.deletePlayerByFirstName)

module.exports = router