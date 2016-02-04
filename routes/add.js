var data = require("../data.json");

exports.addFriend = function (req, res) {
    var newName = req.query.name;
    var newDesc = req.query.description;
    var fakeData = {
        'name': newName,
        'description': newDesc,
        'imageURL': 'http://lorempixel.com/400/400/people'
    };
    data['friends'].push(fakeData);
    console.log(data);
    res.render('add');
}