const bcrypt = require('bcrypt');
const User = require('../models//User');
const createToken = require('../utils/createToken');

const authenticated = (args) => {
    return new Promise((resolve, reject) => {
        let { email, password } = args.data;
        User.findOne({ email })
            .then((user) => {
                if (!user) {
                    reject(new Error(JSON.stringify({
                        code: 2,
                        message: 'El usuario no existe'
                    })));
                }
                bcrypt.compare(password, user.password, (err, isValid) => {
                    if (err) {
                        reject(new Error(JSON.stringify({
                            code: 5,
                            message: 'Ocurrio un error inesperado'
                        })));
                    }
                    if (isValid) {
                        resolve({
                            code: 1,
                            token: createToken(user)
                        })
                    } else {
                        reject(new Error(JSON.stringify({
                            code: 5,
                            message: 'Credenciales invalidas'
                        })))
                    }
                })
            })
            .catch((err) => reject(err))
    })
}

module.exports = authenticated;