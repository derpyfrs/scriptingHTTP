chunk3.js
var https = require('https');
var data = '';
var emptyString = '';

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};


function getAndPrintHTMLChunks (options) {


 https.get(options, function (response) {


  response.setEncoding('utf8');


  response.on('data', function (data) {
   emptyString += emptyString + data
    console.log('Chunk Received', emptyString);
  });



  response.on('end', function() {
    console.log('Response stream complete.');
  });

});
};

getAndPrintHTMLChunks(requestOptions);
