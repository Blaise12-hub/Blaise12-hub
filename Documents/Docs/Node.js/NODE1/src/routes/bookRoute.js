const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController.js');

// router.get('/',bookController.getAllBooks,(req,res)=>{
//     console.log('Get request');
    
// } );

router.get('/',bookController.getAllBooks);

router.get('/:id', bookController.getBookById);

router.post('/', bookController.createBook);

router.put('/:id', bookController.updateBook);//upd

router.delete('/:id', bookController.deleteBook);

module.exports = router;