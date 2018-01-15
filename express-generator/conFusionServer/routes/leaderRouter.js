const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next) =>{
  res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next(); //continue to look on additional specifications
})
.get((req,res,next) =>{
  res.end('Will make all the leaders available to you!');
})
.post((req,res,next) =>{
  res.end('Will add the leaders: ' + req.body.name + ' with details:' + req.body.description);
})
.put((req,res,next) =>{
  res.statusCode = 403;
  res.end('PUT operation not supported on leaders');
})
.delete((req,res,next) =>{
  res.end('Deleting all the leaders!');
});

leaderRouter.route('/:leaderId')
.all(function(req, res, next){
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  next();
})
.get(function(req, res, next){
  res.end('Will send the leader ' + req.params.leaderId + ' to you');
})
.post( (req,res,next) =>{
  res.statusCode = 403;
  res.end('POST operation not supported on leaders/'+req.params.leaderId);
})
.put(function(req, res, next){
  res.end('Will update the details of the leader ' + req.params.leaderId + ' with '
  + req.body.description);
})
.delete(function(req, res, next){
        res.end('Deleting leader: ' + req.params.leaderId);
});

module.exports = leaderRouter;
