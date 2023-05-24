const { verify, decode } = require('jsonwebtoken');
const jsonSecret = require('../config/jsonSecret');

module.exports = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        res.status(401).send('Acess token não informado!');
    }

    const [, acessToken] = token.split(' ');

    try {
        verify(token, jsonSecret.secret);
        const { id, email } = await decode(acessToken);

        req.usuarioId = id;
        req.usuarioEmail = email;

        return next()

    } catch (error) {
        return res.status(401).send('Usuário não autorizado')
    }

}