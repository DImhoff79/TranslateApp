var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var jsonParser = bodyParser.json();




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


////send form to be parsed
router.post('/sendit',jsonParser,function(req,res){
  var target = req.body.target;
  var text = req.body.text;
  

//calls the translate.translate function and returns the results array

 //send the results of the translation along with the initial message back to the index page
 res.render('index', {result: "results here", keep:"original text"});
 //console.log(translation);
  })
  .catch(err => {
    console.error('ERROR:', err);
  

});

module.exports = router;
