var https = require('https');
var data = '';

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


function getAndPrintHTMLChunks (options) {


 https.get(requestOptions, function (response) {


  response.setEncoding('utf8');


  response.on('data', function (data) {

    console.log('Chunk Received', data);
  });



  response.on('end', function() {
    console.log('Response stream complete.');
  });

});
};

getAndPrintHTMLChunks(requestOptions);