'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
    .get(jsonku.index);
    app.route('/tampils')
        .get(jsonku.tampilsemuasparepart);

    app.route('/tampilm')
        .get(jsonku.tampilsemuamontir);

    app.route('/tampil/:id')
        .get(jsonku.tampilberdasarkanidsparepart);

    app.route('/tampil/:id')
        .get(jsonku.tampilberdasarkanidmontir);
}