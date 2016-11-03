var passport = require('passport');

// import user MongoDB Schema
var User = require('./models/user');
var localStrategy = require('passport-local');

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});
