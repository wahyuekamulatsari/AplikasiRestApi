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

//MENAMPILKAN DATA T_service
exports.tampilsemuaservice = function (req, res) {
    connection.query('SELECT * FROM t_service', function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

//MENGETAHUI TOTAL SERVIS OLEH PELANGGAN
exports.hitungtotal = function (req, res) {
  
    connection.query('SELECT t_user.nama_user, t_service.tgl_service t_montir.nama_montir, t_sparepart.nama_sparepart, t_sparepart.harga_sparepart, t_servis.jumlah_sparepart, (t_montir.harga_perjam + t_service.jumlah_sparepart * t_sparepart.harga_sparepart) AS total_harga_sparepart FROM t_service INNER JOIN t_sparepart INNER JOIN t_user WHERE t_sparepart.id_sparepart = t_service.id_sparepat AND t_service.id_montir = t_montir.id_montir AND t_service.id_user = t_user.id_user ORDER BY t_user.id_user',
        function (error, rows, fields) {

            if (error) {

                connection.log(error);

            } else

                response.ok("BERHASIL MENAMPILKAN TOTAL SERVICE", rows, res)

        });
};

//MENAMBAHKAN DATA UNTUK TABEL MONTIR
exports.tambahmontir = function (req, res) {
    var nama_montir = req.body.nama_montir;
    var harga_perjam = req.body.harga_perjam;

    connection.query('INSERT INTO t_montir (nama_montir,harga_perjam) VALUES(?,?)',
        [nama_montir, harga_perjam], function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("BERHASIL MENAMBAHKAN DATA MONTIR", res)
            }
        });
};

//MENAMBAHKAN DATA PADA TABEL SPAREPART
exports.tambahsparepart = function(req , res){
    var nama_sparepart = req.body.nama_sparepart;
    var harga_sparepart = req.body.harga_sparepart;
    var satuan = req.body.satuan;

    connection.query('INSERT INTO t_sparepart (nama_sparepart,harga_sparepart,satuan) VALUES(?,?,?)',
    [nama_sparepart,harga_sparepart,satuan],
    function (error, rows, fields)
    {
        if(error){
            console.log(error);
        }else{
            response.ok("BERHASIL MENAMBAHKAN DATA SPAREPART",res)
        }
    });
};

//MENAMBAHKAN DATA USER
exports.tambahuser = function (req, res) {
    var nama_user = req.body.nama_user;
    var email = req.body.email;
    var password = req.body.password;
    var role = req.body.role;
    

    connection.query('INSERT INTO t_user (nama_user, email, password, role) VALUES(?,?,?,?)',
        [nama_user, email, password, role], 
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data  User", res)
            }
        });
};

//menambahkan data untuk tabel level
exports.tambahlevel = function (req, res) {
    var nama_level = req.body.nama_level;
    
    connection.query('INSERT INTO t_level (nama_level) VALUES(?)',
        [nama_level], 
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data Level", res)
            }
        });
};

//MENAMBAHKAN DATA PADA TABEL SERVICE
exports.tambahservis = function (req, res) {
    var tgl_service = req.body.tgl_service;
    var id_user = req.body.id_user;
    var id_montir = req.body.id_montir;
    var jumlah_sparepart = req.body.jumlah_sparepart;
    var id_sparepart = req.body.id_sparepart;
    
    connection.query('INSERT INTO t_service (tgl_service, id_user, id_montir, jumlah_sparepart, id_sparepart) VALUES(?,?,?,?,?)',
    [ tgl_service, id_user, id_montir, jumlah_sparepart, id_sparepart], 
    function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("BERHASIL MENAMBAHKAN DATA SERVIS", res)
        }
        });
};

//MENGUBAH DATA PADA TABEL MONTIR
exports.ubahmontir = function (req, res) {
    var id_montir = req.body.id_montir;
    var nama_montir = req.body.nama_montir;
    var harga_perjam = req.body.harga_perjam;

    connection.query('UPDATE t_montir SET nama_montir=?, harga_perjam=? WHERE id_montir=?', 
    [id_montir, nama_montir, harga_perjam,],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Ubah Data !", res)
            }
        });
};

//MENGUBAH DATA PADA TABEL SPAREPART
exports.ubahsparepart = function (req, res) {
    var id_sparepart = req.body.id_sparepart;
    var nama_sparepart = req.body.nama_sparepart;
    var harga_sparepart = req.body.harga_sparepart;
    var satuan = req.body.satuan;
    
    connection.query('UPDATE t_sparepart SET nama_sparepart=?, harga_sparepart=?, satuan=? WHERE id_sparepart=?',
     [nama_sparepart, harga_sparepart, satuan, id_sparepart],
    function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Mengubah Data !", res)
            }
        });
};


