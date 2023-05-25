const bodyParser = require('body-parser');
const role = require('./roleRoute');
const produto = require('./produtoRoute');
const usuarios = require('./usuariosRoute');
const permissao = require('./permissaoRoute')
const auth = require('./authRoute');

module.exports = app => {
  app.use(
    bodyParser.json(),
    auth,
    usuarios,
    produto,
    role,
    permissao
  )
}
