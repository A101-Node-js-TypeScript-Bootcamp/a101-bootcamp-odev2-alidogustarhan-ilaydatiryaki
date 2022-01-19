const express = require('express')
const router = express.Router()

const {login,dashboard, dashboard_marka} = require('../controllers/main')
const authMiddleware = require('../middleware/auth')
const brand = require('../trendyol/trendyol_GetAll')

router.route('/dashboard').get(authMiddleware, dashboard)
router.route('/login').post(login)
router.route('/dashboard/:id').get(authMiddleware,dashboard_marka)



module.exports = router