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

            var savedID;
            product.save(function(err, res, done) {
                // Confirm No error
                should.not.exist(err);

                // Store ID reference to test
                savedID = res.id;
                done();
            });

            // Verify User information is legitimate
            var saved = prod.findById(savedID, function(err, done) {
                if (err)
                    return err;
                console.log(saved);
            });
            done();
        });
    });
});

