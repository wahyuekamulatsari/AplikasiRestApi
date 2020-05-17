var connection = require("../koneksi");
var mysql = require("mysql");
var md5 = require("MD5");
var mysql = require('mysql');
var response = require('../res');
var jwt = require('jsonwebtoken'); 
var config = require('../config/secret');
var ip = require("ip");

//controller untuk register
exports.registrasi = function (req, res) {
    var post = {
        nama_user: req.body.nama_user,
        email: req.body.email,
        password: md5(req.body.password),
        level: req.body.level
    }

    var query = "SELECT email FROM ?? WHERE ??=?";
    var table = ["t_user", "email", post.email];

    query = mysql.format(query, table);

    connection.query(query, function (error, rows) {
        if (error) {
            console.log(error);
        } else {
            if (rows.length == 0) {
                var query = "INSERT INTO ?? SET ?";
                var table = ["t_user"];
                query = mysql.format(query, table);
                connection.query(query, post, function (error, rows) {
                    if (error) {
                        console.log(error);
                    } else {
                        response.ok("Berhasil menambahkan data user baru", res);
                    }
                });
            } else {
                response.ok("Email sudah terdaftar!", res);
            }
        }
    })
}

// controller untuk login
exports.login = function (req, res) {

    //var em = req.body.email || req.query.email;
    var post = {
        password: req.body.password,
        email: req.body.email
    }

    var query = "SELECT * FROM ?? WHERE ??=? AND ??=?";

    var table = ["t_user", "password", md5(post.password), "email", post.email];

    query = mysql.format(query, table);

    connection.query(query, function (error, rows) {
        if (error) {
            console.log(error)
        }
        else {
            if (rows.length == 1) {
                var token = jwt.sign({ rows }, config.secret, {
                    expiresIn: 1440
                });
                id_user = rows[0].id_user;

                var data = {
                    id_user: id_user,
                    access_token: token,
                    ip_address: ip.address()
                }

                var query = "INSERT INTO  ?? SET ?";
                var table = ["akses_token"];

                query = mysql.format(query, table);
                connection.query(query, data, function (error, rows) {
                    if (error) {
                        console.log(error);
                    } else {
                        res.json({
                            success: true,
                            message: 'Token JWT generated',
                            token: token,
                            currUser: data.id_user
                        });
                    }
                });
            }
            else {
                res.json({ "Error": true, "Message": "wrong email/password combination" });
            }

        }
    });
}

//Menambah data montir
exports.tambahmontir = function (req, res) {
    var post = {
        nama_montir: req.body.nama_montir,
        harga_perjam: req.body.harga_perjam
    }

    var query = "SELECT nama_montir FROM ?? WHERE ??=?";
    var table = ["t_montir", "nama_montir", post.nama_montir];

    query = mysql.format(query, table);

    connection.query(query, function (error, rows) {
        if (error) {
            console.log(error);
        } else {
            if (rows.length == 0) {
                var query = "INSERT INTO ?? SET ?";
                var table = ["t_montir"];
                query = mysql.format(query, table);
                connection.query(query, post, function (error, rows) {
                    if (error) {
                        console.log(error);
                    } else {
                        response.ok("Berhasil menambahkan data Montir baru", res);
                    }
                });
            } else {
                response.ok("Montir sudah terdaftar!", res);
            }
        }
    });
};

//Menambah data sparepart
exports.tambahsparepart = function (req, res) {
    var post = {
        nama_sparepart: req.body.nama_sparepart,
        harga_sparepart: req.body.harga_sparepart,
        satuan: req.body.satuan
    }
    var query = "SELECT nama_sparepart FROM ?? WHERE ??=?";
    var table = ["t_sparepart", "nama_sparepart", post.nama_sparepart];
    query = mysql.format(query, table);

    connection.query(query, function (error, rows) {
        if (error) {
            console.log(error);
        } else {
            if (rows.length == 0) {
                var query = "INSERT INTO ?? SET ?";
                var table = ["t_sparepart"];
                query = mysql.format(query, table);
                connection.query(query, post, function (error, rows) {
                    if (error) {
                        console.log(error);
                    } else {
                        response.ok("Berhasil menambahkan data Sparepart baru", res);
                    }
                });
            } else {
                response.ok("Sparepart sudah terdaftar!", res);
            }
        }
    });
};

//Menambahkan data user
exports.tambahuser = function (req, res) {
    var post = {
        nama_user: req.body.nama_user,
        email: req.body.email,
        password: md5(req.body.password),
        role: req.body.role,

    }
    var query = "SELECT nama_user FROM ?? WHERE ??=?";
    var table = ["t_user", "nama_user", post.nama_user];
    query = mysql.format(query, table);
    connection.query(query, function (error, rows) {
        if (error) {
            console.log(error);
        } else {
            if (rows.length == 0) {
                var query = "INSERT INTO ?? SET ?";
                var table = ["t_user"];
                query = mysql.format(query, table);
                connection.query(query, post, function (error, rows) {
                    if (error) {
                        console.log(error);
                    } else {
                        response.ok("Berhasil menambahkan data user baru", res);
                    }
                });
            } else {
                response.ok("user sudah terdaftar!", res);
            }
        }
    });
};

//Menambahkan data level
exports.tambahlevel = function (req, res) {
    var post = {
        nama_level: req.body.nama_level
    }

    var query = "SELECT nama_level FROM ?? WHERE ??=?";
    var table = ["t_level", "nama_level", post.nama_level];

    query = mysql.format(query, table);

    connection.query(query, function (error, rows) {
        if (error) {
            console.log(error);
        } else {
            if (rows.length == 0) {
                var query = "INSERT INTO ?? SET ?";
                var table = ["t_level"];
                query = mysql.format(query, table);
                connection.query(query, post, function (error, rows) {
                    if (error) {
                        console.log(error);
                    } else {
                        response.ok("Berhasil menambahkan data level baru", res);
                    }
                });
            } else {
                response.ok("Level sudah terdaftar!", res);
            }
        }
    });
};

//menambahkan data service
exports.tambahservis = function (req, res) {
    var post = {
        tgl_service: new Date(),
        id_user: req.body.id_user,
        id_montir: req.body.id_montir,
        jumlah_sparepart: req.body.jumlah_sparepart,
        id_sparepart: req.body.id_sparepart
    }
    var query = "SELECT tgl_service FROM ?? WHERE ??=?";
    var table = ["t_service", "tgl_service", post.tgl_service];
    query = mysql.format(query, table);
    connection.query(query, function (error, rows) {
        if (error) {
            console.log(error);
        } else {
            if (rows.length == 0) {
                var query = "INSERT INTO ?? SET ?";
                var table = ["t_service"];
                query = mysql.format(query, table);
                connection.query(query, post, function (error, rows) {
                    if (error) {
                        console.log(error);
                    } else {
                        response.ok("Berhasil menambahkan data Servis baru", res);
                    }
                });
            } else {
                response.ok("Servis sudah terdaftar!", res);
            }
        }
    });
};

//MENGUBAH DATA DI TABEL MONTIR
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
                response.ok("Berhasil Ubah Data Montir", res)
            }
        });
};

//mengubah data di tabel Sparepart
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
                response.ok("Berhasil Mengubah Data Sparepart", res)
            }
        });
};

//MENGUBAH DATA DI TABEL USER
exports.ubahuser = function (req, res) {
    var id_user = req.body.id_user;
    var nama_user = req.body.nama_user;
    var email = req.body.email;
    var password = req.body.password;
    var role = req.body.role;

    connection.query('UPDATE t_user SET nama_user=?,email=?,password=?,role=? WHERE id_user=?',
        [nama_user, email, password, role, id_user],

        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Ubah Data User", res);
            }
        });
};
//mengubah data di tabel level
exports.ubahlevel = function (req, res) {
    var id_level = req.body.id_level;
    var nama_level = req.body.nama_level;

    connection.query('UPDATE t_level SET nama_level=? WHERE id_level=?',
        [id_level, nama_level],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Mengubah Data Level", res)
            }
        });
};

//mengubah data di tabel service
exports.ubahservice = function (req, res) {
    var tgl_service = new Date();
    var id_user = req.body.id_user;
    var id_montir = req.body.id_montir;
    var jumlah_sparepart = req.body.jumlah_sparepart;
    var id_sparepart = req.body.id_sparepart;
    var id_service = req.body.id_service;

    connection.query('UPDATE t_servis SET tgl_service=?, id_user=?, id_montir=?, jumlah_sparepart=?, id_sparepart=? WHERE id_service=?',
        [tgl_service, id_user, id_montir, jumlah_sparepart, id_sparepart, id_service],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Mengubah Data servis", res)
            }
        });
};

//menghapus data di tabel montir
exports.hapusmontir = function (req, res) {
    var id_montir = req.body.id_montir;    

    connection.query('DELETE FROM t_montir WHERE id_montir=?',
    [id_montir],

        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Data Montir Berhasil Dihapus", res);
            }
        });
};

//menghapus data di tabel sparepart
exports.hapussparepart = function (req, res) {
    var id_sparepart = req.body.id_sparepart;    

    connection.query('DELETE FROM t_sparepart WHERE id_sparepart=?',
    [id_sparepart],

        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Data Sparepart Berhasil Dihapus", res);
            }
        });
};

//menghapus data di tabel user
exports.hapususer = function (req, res) {
    var id_user = req.body.id_user;    

    connection.query('DELETE FROM t_user WHERE id_user=?',
    [id_user],

        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Data User Berhasil Dihapus", res);
            }
        });
};

//menghapus data di tabel level
exports.hapuslevel = function (req, res) {
    var id_level = req.body.id_level;    

    connection.query('DELETE FROM t_level WHERE id_level=?',
    [id_level],

        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Data Level Berhasil Dihapus", res);
            }
        });
};

//menghapus data di tabel servis
exports.hapusservice = function (req, res) {
    var id_service = req.body.id_servis;    

    connection.query('DELETE FROM t_servis WHERE id_service=?',
    [id_service],

        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Data Servis Berhasil Dihapus", res);
            }
        });
};

exports.totalharga = function (req, res) {
    connection.query('SELECT t_user.nama_user, t_service.tgl_service, t_montir.nama_montir, t_sparepart.nama_sparepart, t_sparepart.harga_sparepart, t_service.jumlah_sparepart, (harga_perjam + jumlah_sparepart * harga_sparepart) AS total_harga FROM t_service JOIN t_user JOIN t_montir JOIN t_sparepart WHERE t_service.id_user = t_user.id_user AND t_service.id_montir = t_montir.id_montir AND t_service.id_sparepart = t_sparepart.id_sparepart ORDER BY t_user.id_user ',
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.oknested(rows, res);
            }
        }
    )

}

exports.halamanpelanggan = function (req, res) {
    response.ok("Halaman ini hanya untuk admin dengan level = 2!", res);
}
exports.halamanadmin = function (req, res) {
    response.ok("Halaman ini hanya untuk pelanggan dengan level = 1!", res);
}