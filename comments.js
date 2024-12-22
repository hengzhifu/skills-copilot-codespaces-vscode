// Create web server
var express = require('express');
var app = express();
app.use(express.static('public'));
// Create a comments array
var comments = [
  'This is my first comment!',
  'This is my second comment!',
  'This is my third comment!'
];
// Create a route for comments
app.get('/comments', function(req, res) {
  res.json(comments);
});
// Start server
var server = app.listen(3000, function() {
  console.log('Server listening on port 3000');
});