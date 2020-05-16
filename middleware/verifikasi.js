const jwt = require('jsonwebtoken');
const config = require('../config/secret');
function verifikasi() {
    return function (req, rest, next) {
        var roles = req.body.roles;
        //cek authorizzation header
        var tokenWithBearer = req.headers.authorization;
        if (tokenWithBearer) {
            var token = tokenWithBearer.split(' ')[1];
            //verifikasi
            jwt.verify(token, config.secret, function (err, decoded) {
                if (err) {
                    return rest.status(401).send({ auth: false, message: 'TOKEN TIDAK TERDAFTAR!' });
                } else {
                    if (roles == 2) {
                        req.auth = decoded;
                        next();
                    }
                    else if (roles == 1) {
                        req.auth = decoded;
                        next();
                    } else {
                        return rest.status(401).send({ auth: false, message: 'Gagal mengotorisasi level anda!' });
                    }
                }
            });
        } else {
            return rest.status(401).send({ auth: false, message: 'TOKEN TIDAK TERSEDIA!' });
        }
    }
}
module.exports = verifikasi;