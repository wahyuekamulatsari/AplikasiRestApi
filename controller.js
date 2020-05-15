'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index= function(req, res) {
    response.ok("Aplikasi REST API ku berjalan!", res)
};


//MENAMPILKAN DATA T_SPAREPART
exports.tampilsemuasparepart = function (req, res) {
    connection.query('SELECT * FROM t_sparepart', function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

//MENAMPILKAN DATA T_MONTIR
exports.tampilsemuamontir = function (req, res) {
    connection.query('SELECT * FROM t_montir', function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};