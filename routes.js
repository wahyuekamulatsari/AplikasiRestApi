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
        
    app.route('/tambahsparepart')
        .post(jsonku.tambahsparepart);

    app.route('/tambahuser')
        .post(jsonku.tambahuser);  
        
    app.route('/tambahlevel')
        .post(jsonku.tambahlevel);

    app.route('/tambahservis')
        .post(jsonku.tambahservis); 

    app.route('/ubahmontir')
        .put(jsonku.ubahmontir);

    app.route('/ubahsparepart')
        .put(jsonku.ubahsparepart);    

    app.route('/ubahuser')
        .put(jsonku.ubahuser);

    app.route('/ubahlevel')
        .put(jsonku.ubahlevel);

    app.route('/ubahservice')
        .put(jsonku.ubahservice);    

    app.route('/hapusmontir')
        .delete(jsonku.hapusmontir);  
        
    app.route('/hapussparepart')
        .delete(jsonku.hapusSparepart);

   app.route('/hapususer')
        .delete(jsonku.hapususer);  
        
    app.route('/hapuslevel')
        .delete(jsonku.hapusLevel);

    app.route('/hapusservice')
        .delete(jsonku.hapusservice);    
    
}