const { Router } = require('express');
const ProdutoController = require('../controllers/produtoController');
const roles = require('../middleware/roles')
const permissoes = require('../middleware/permissoes')
const permissoesRoles = require('../middleware/permissoesRoles')

const router = Router()

router
  .post('/produto', ProdutoController.cadastrarProduto)
  .get('/produto',permissoesRoles(['listar']), ProdutoController.buscarTodosProdutos)
  .get('/produto/id/:id',permissoes(['listar']), ProdutoController.buscarProdutoPorId)
  .delete('/produto/id/:id',roles(['Gerente']), ProdutoController.deletarProdutoPorId)
  .put('/produto/id/:id', ProdutoController.editarProduto)

module.exports = router