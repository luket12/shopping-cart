var passport = require('passport');

// import user MongoDB Schema
var User = require('../models/user');
var LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

passport.use('local.signup', new LocalStrategy({
    _usernameField: 'email',
    _passwordField: 'password'
}), function(req, res, email, password, done) {
    User.findOne({email: email}, function(err, user) {
        if (err) {
            return done(err)
        }
        if (user) {
            return done(null, false, {message: "Email In Use"})
        }
        var newUser = new User();
        newUser.email = email;
        newUser.password = password;
    });
});