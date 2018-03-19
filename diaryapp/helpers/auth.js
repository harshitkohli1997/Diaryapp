module.exports = {
  ensureAuthenticated: function(req, res, next){
    if(req.isAuthenticated()){ // isAuterhrticated is inbuilt function
      return next();
    }
    req.flash('error_msg', 'Not Authorized');
    res.redirect('/users/login');
  }
}