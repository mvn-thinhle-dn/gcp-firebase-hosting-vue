// import * as functions from 'firebase-functions';
// import * as express from 'express';
// import * as basicAuth from 'basic-auth';
 
// // Đặt tên cho function và thiết lập cho HTTPS
// export const myFunction = functions.https.onRequest((req, res) => {
 
//   // Tạo một Express app
//   const app = express();
 
//   // Thiết lập Basic Auth
//   app.use((req, res, next) => {
//     const user = basicAuth(req);
//     if (!user || user.name !== 'myusername' || user.pass !== 'mypassword') {
//       res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
//       res.sendStatus(401);
//       return;
//     }
//     // Chuyển hướng đến trang /dashboard
//     res.redirect('/index.html');
//   });
//   // Thiết lập function để sử dụng Express app
//   return app(req, res);
// });

import * as functions from 'firebase-functions'
import * as express from 'express'
import * as basicAuth from 'basic-auth-connect'

const app = express()

// Basic Authfication
app.use(basicAuth('hoge', 'fuga'))

// Redirect root
app.get('/index.html', (req, res) => {
  res.redirect('/')
})

exports.app = functions.https.onRequest(app);
