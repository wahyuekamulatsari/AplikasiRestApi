'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
    .get(jsonku.index);
    app.route('/tampilsparepart')
        .get(jsonku.tampilsemuasparepart);

    app.route('/tampilmontir')
        .get(jsonku.tampilsemuamontir);

    app.route('/tampilsparepart/:id')
        .get(jsonku.tampilberdasarkanidsparepart);

    app.route('/tampilmontir/:id')
        .get(jsonku.tampilberdasarkanidmontir);

    app.route('/tambah')
        .post(jsonku.tambahservice);

    app.route('/tampilservice')
        .get(jsonku.tampilsemuaservice);

    app.route('/hitungtotal')
        .get(jsonku.hitungtotal);

    app.route('/tambahmontir')
        .post(jsonku.tambahmontir);    
}