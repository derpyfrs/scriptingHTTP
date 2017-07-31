var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};


function getAndPrintHTML (options) {

var string = '';

 https.get(options, function (response) {


  response.setEncoding('utf8');


  response.on('data', function (data) {
   string += data

  });



  response.on('end', function() {
    console.log(string, 'Response stream complete.');
  });

});
};

getAndPrintHTML(requestOptions);
