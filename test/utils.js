'use strict';

// purpose of this script is to Clear the database before each test and restore the state of DB for consistent tests

var mongoose = require('mongoose');
var config = require('../config/db');

// Set the script to test mode
process.env.NODE_ENV = 'test';

beforeEach(function(done) {
    function clearDB() {
        for (var i in mongoose.connection.collections) {
            mongoose.connection.collections[i].remove(function() {});
        }
        return done();
    }
    if (mongoose.connection.readyState === 0) {
        mongoose.connect(config.db.test, function(err) {
            if (err) {
                throw err;
            }
            return clearDB();
        });
    } else {
        return clearDB();
    }
});

afterEach(function(done) {
    mongoose.disconnect();
    return done();
});