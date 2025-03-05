const express=require('express');
const app=express();
const route=require('../routes/bookRoute.js');

const router=express.Router();

router.use('/books',bookRoutes);

