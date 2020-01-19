// Require in the necessary dependencies
// =====================================
var path = require('path');

// Set up module.exports
// ====================================
module.exports = function (app) {
    // Send user to tables.html
    app.get('/tables', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/tables.html'));
    });
    // Send user to reserve.html
    app.get('/reserve', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/reserve.html'));
    });
    // Send user to home.html
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
};