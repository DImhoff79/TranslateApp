var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var jsonParser = bodyParser.json();
var unenParser = bodyParser.urlencoded();
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
    else     console.log(data);           // successful response
  });

// Instantiates a client
const translate = new Translate({
  projectId: projectId,
});

//calls the translate.translate function and returns the results array
translate
  .translate(text, target)
  .then(results => {
 const translation = results[0];
 
 //send the results of the translation along with the initial message back to the index page
 res.render('index', {result: results[0], keep:req.body.text});
 //console.log(translation);
  })
  .catch(err => {
    console.error('ERROR:', err);
  });

})

module.exports = router;
