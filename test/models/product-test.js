// import Configs and Product Mongoose model
var db = require('../utils');
var prod = require('../../models/product');

// import Testing libraries
var should = require('should');

describe('Mongoose: Products Model', function() {
    describe('#Create', function() {
        it('Should Create a Product Model', function(done) {
            var product = new prod({
                imagePath: 'http://google.com/bullshit-absolute-bollucks.jpeg',
                title: 'World of Warcraft',
                description: 'What a load of shit',
                price: 55
            });
            product.save(function(err) {
                // Confirm No error
                should.not.exist(err);
                // Verify User information is legitimate
                // Should Testing Here
            });
            done();
        });
    });
});

