// import express
const {Router} = require('express')
const router = Router()

//import controllers
const companyCtrl = require('../controllers/company.controller')


// define the different routes

router.get('/companies', companyCtrl.getCompanies);
router.post('/company', companyCtrl.createCompany);
router.get('/company/:id', companyCtrl.getCompany);
router.put('/company/:id', companyCtrl.editCompany);
router.delete('/company/:id', companyCtrl.deleteCompany);

//export the module
module.exports = router