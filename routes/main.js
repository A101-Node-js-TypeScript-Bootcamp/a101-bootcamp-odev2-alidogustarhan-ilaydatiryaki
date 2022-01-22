const express = require('express')
const router = express.Router()

const {login,dashboard, dashboard_marka,dashboard_category,dashboard_categoryOne} = require('../controllers/main')
const authMiddleware = require('../middleware/auth')
const brand = require('../trendyol/trendyol_GetAll')


router.route('/dashboard').get(authMiddleware, dashboard)
router.route('/login').post(login)
router.route('/dashboard/:id').get(authMiddleware,dashboard_marka)
router.route('/category').get(authMiddleware,dashboard_category)
router.route('/singlecategory/:id').get(authMiddleware,dashboard_categoryOne)


module.exports = router