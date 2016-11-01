var model = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
        imagePath:  'http://www.irrlicht3d.org/images/gothic3_nik1.jpg',
        title: 'Gothic',
        description: 'Excellent Game!',
        price: 15      
    }),
    new Product({
        imagePath:  'http://media02.hongkiat.com/ps3-game-covers/Assassins-Creed-II.jpg',
        title: 'Amazonian Tribes 9',
        description: 'Wow, what a joke',
        price: 14      
    }),
    new Product({
        imagePath:  'https://s-media-cache-ak0.pinimg.com/originals/ae/73/f2/ae73f2181336815d83feeacd30588f4e.jpg',
        title: 'World of warcraft',
        description: 'Yea pretty decent overall',
        price: 22      
    }),
    new Product({
        imagePath:  'https://upload.wikimedia.org/wikipedia/en/8/8c/JLH_game_covers.jpg',
        title: 'Penuss finders',
        description: 'Was okay!?',
        price: 50      
    }),
    new Product({
        imagePath:  'http://orig08.deviantart.net/3ad7/f/2010/172/f/c/ps3_game_cover___fallout_3_by_o0theforgotten0o.jpg',
        title: 'Penuss finders',
        description: 'meh, not bad',
        price: 55     
    }),
    new Product({
        imagePath:  'https://i.kinja-img.com/gawker-media/image/upload/s--xVxWhhGD--/c_fit,fl_progressive,q_80,w_636/19alnfjort4gnjpg.jpg',
        title: 'Penuss finders',
        description: 'Really Really goood',
        price: 14      
    }),
];

var done = 0;

for (var i=0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
