var tableData = require('../data/table-data.js');
var waitListData = require('../data/waitlist-data.js');

module.exports = function (app) {
    // Tables API
    app.get('/api/tables', function (req, res) {
        res.json(tableData);
    });
    // Waiting List API
    app.get('/api/waitlist', function (req, res) {
        res.json(waitListData);
    });
}