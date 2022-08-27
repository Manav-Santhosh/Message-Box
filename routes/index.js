var express = require('express');
var router = express.Router();
var path = require('path')
var fs= require('fs')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/send', function(req, res, next) {
  var reciever=req.body.senderName
  var message=req.body.senderMessage
  var data=`Reciever Name:${reciever}
  message:${message}`
  fs.writeFile(path.join(__dirname,'../Message_2_0.txt'),data,function(err){
    if (err){
      console.log(err)
      return
    }
    res.send("We recieved your message, We will reach to you shortly")
  })
})

module.exports = router;
