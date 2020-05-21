const path = require('path');

exports.handler = (event, context, callback) => {
  const { request } = event.Records[0].cf;
  
  console.log('Request URI: ', request.uri);

  const parsedPath = path.parse(request.uri);
  let newUri;

  console.log('Parsed Path: ', parsedPath);
  
  if (parsedPath.ext == '') {
    if(parsedPath.base != '') {
      parsedPath.base = ''
      console.log("Updated base: ", parsedPath.base)
    }
    
    if(parsedPath.dir != '/pmo') {
      parsedPath.dir = '/pmo'
      console.log("Updated dir: ", parsedPath.dir)
    }
    
    newUri = path.join(parsedPath.dir, parsedPath.base, 'index.html');
  } else {
    newUri = request.uri;
  }

  console.log('New URI: ', newUri);

  // Replace the received URI with the URI that includes the index page
  request.uri = newUri;
  
  // Return to CloudFront
  return callback(null, request);
};