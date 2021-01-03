const express = require('express');
const app = express();
const port = 3000;

app.enable('trust proxy'); // Use this line if behide a proxy like Heroku or Nginx

/*** 
Try changing protocol to http://. It should redirect http to https.
***/

// ATTENTION: If you wish to test this code by listening at localhost.  Change port to 443 (HTTPS port) or You must get a SSL certification for localhost or changing to https won't even direct to http.


/* Starting here: This is the code you need. Make sure to read the documentation and read Stackoverflow questions */
app.get('*', (req, res) => {
    if (!req.secure) { // not https
        res.redirect(301, 'https://' + req.hostname + req.originalUrl);
        //console.log('Redirected https to http!'); 
    } else {
        console.log('Already https://');
    }
});
/* End of the line. */

app.listen(port, () => {
    console.log(`Listening at localhost:${port}`)
});

// Documentation: http://expressjs.com/en/5x/api.html#req.originalUrl