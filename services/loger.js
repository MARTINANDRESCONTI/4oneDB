// const redirectLogin = (req, res, next) => {
//   if(!req.session.userId) {
//     res.redirect('/');
//   } else {
//     next();
//   }
// }

// const redirectHome = (req, res, next) => {
//   if(req.session.userId) {
//     res.redirect('/items');
//   } else {
//     next();
//   }
// }

// module.exports = {
//   redirectLogin,
//   redirectHome
// }