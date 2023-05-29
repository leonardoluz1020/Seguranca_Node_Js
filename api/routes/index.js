const bodyParser = require('body-parser');
const role = require('./roleRoute');
const produto = require('./produtoRoute');
const usuarios = require('./usuariosRoute');
const permissao = require('./permissaoRoute')
const auth = require('./authRoute');
const seguranca = require('./segurancaoRoute')

module.exports = app => {
  app.use(
    bodyParser.json(),
    auth,
    usuarios,
    produto,
    role,
    permissao,
    seguranca
  )
}
