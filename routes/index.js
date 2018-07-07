var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var jsonParser = bodyParser.json();
var AWS = require('aws-sdk');
AWS.config.update({region:'us-east-1'});
var translate = new AWS.Translate();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


////send form to be parsed
router.post('/sendit',jsonParser,function(req,res){
  var target = req.body.target;
  var text = req.body.text;
  
  var params = {
    SourceLanguageCode: 'auto', /* required */
    TargetLanguageCode: req.body.target, /* required */
    Text: req.body.text /* required */
  };

  translate.translateText(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else  console.log(data);
    res.render('index',{result: data.TranslatedText, keep: req.body.text})           // successful response




  });


});

module.exports = router;
