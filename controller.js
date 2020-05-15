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

//MENAMPILKAN SEMUA DATA SPAREPART BERDASARKAN ID
exports.tampilberdasarkanidsparepart = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM t_sparepart WHERE id_sparepart = ?', (id),
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

//MENAMPILKAN SEMUA DATA MONTIR BERDASARKAN ID
exports.tampilberdasarkanidmontir = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM t_montir WHERE id_montir = ?', (id),
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

//MENAMBAHKAN DATA PADA TABEL SERVIS
exports.tambahservice = function (req, res) {
    var tgl_service = req.body.tgl_service;
    var id_user = req.body.id_user;
    var id_montir = req.body.id_montir;
    var jumlah_sparepart = req.body.jumlah_sparepart;
    var id_sparepart = req.body.id_sparepart;

    connection.query('INSERT INTO t_service (tgl_service,id_user,id_montir,jumlah_sparepart,id_sparepart) VALUES(?,?,?)',
        [tgl_service,id_user,id_montir,jumlah_sparepart,id_sparepart],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data Service!", res)
            }
        });
};


