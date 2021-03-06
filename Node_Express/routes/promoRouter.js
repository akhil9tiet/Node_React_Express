const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next) =>{
  res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next(); //continue to look on additional specifications
})
.get((req,res,next) =>{
  res.end('Will send all the promotions to you!');
})
.post((req,res,next) =>{
  res.end('Will add the promotion: ' + req.body.name + ' with details:' + req.body.description);
})
.put((req,res,next) =>{
  res.statusCode = 403;
  res.end('PUT operation not supported on promotions');
})
.delete((req,res,next) =>{
  res.end('Deleting all the promotions!');
});

promoRouter.route('/:promoId')
.all(function(req, res, next){
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  next();
})
.get(function(req, res, next){
  res.end('Will send the promotion ' + req.params.promoId + ' to you');
})
.post( (req,res,next) =>{
  res.statusCode = 403;
  res.end('POST operation not supported on promotions/'+req.params.promoId);
})
.put(function(req, res, next){
  res.end('Will update the details of the promotion ' + req.params.promoId + ' with '
  + req.body.description);
})
.delete(function(req, res, next){
        res.end('Deleting promotion: ' + req.params.promoId);
});

module.exports = promoRouter;
