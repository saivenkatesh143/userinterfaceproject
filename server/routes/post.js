const express = require('express');
const post = require('../models/post');
const router = express.Router();

router





.post('/getpost', async (req, res) => {
    try {
      let noteget = await post.getnote(req.body);
      res.send(noteget)
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })






  

  .post('/createpost', async (req, res) => {
    try {
      let notecreates = await post.createpost(req.body);
      res.send(notecreates)
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })
  


  .post('/deletepost', async (req, res) => {
    try {
      let noteupdates = await post.deletepost(req.body);
      res.send(noteupdates)
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })
  .post('/updatepost', async (req, res) => {
    try {
      let noteedit= await post.updatepost(req.body);
      res.send(noteedit)
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  
module.exports=router;
