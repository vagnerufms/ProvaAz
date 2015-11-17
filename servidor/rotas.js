/*
	###########################################################################################
	Autor: Vagner Silva
	Data: 13/11/2015
	Função: Gerenciar Rotas CRUD da Aplicação (serviços de RESTFULL)
	###########################################################################################
*/

/*
	========================================================== 
	Importação de Controladores e Módulos Adicionais
	============================================================
*/
var empresaController = require('../api/empresaController');					// Controlador de empresa
var leilaoController = require('../api/leilaoController');						// Controlador de leilao
var loteController = require('../api/loteController');							// Controlador de lote
var compradorController = require('../api/compradorController');				// Controlador de comprador
var unidadeController = require('../api/unidadeController');					// Controlador de unidade
var statuHTTP = require('../servidor/handlers/errors/errors-http/http-status');	// Códigos de Erros de HTTP em PT BR


module.exports = function(app) {
	/*
		================================================================
		Rota 'index'
		=================================================================
	*/
	app.get('/', function (req, res) {
	  res.send('Página Inicial!');
	});
	
	/*
		================================================================
		Rotas 'empresa'
		=================================================================
	*/
	// Recupera todos os registros da tabela 'empresa'	
	app.get('/empresa', empresaController.getEmpresas);
	// Recupera 1 registro da tabela 'empresa' com base no id passado na URL
	app.get('/empresa/:id', empresaController.getEmpresa);
	// Insere um novo registro na tabela 'empresa' com os dados enviados no body da mensagem
	app.post('/empresa', empresaController.postEmpresa);
	// Altera o registro que seja igual o :id informado e com os dados recebidos no body da mensagem
	app.put('/empresa/:id', empresaController.putEmpresa);
	// Remove da tabela 'empresa' o registro com o :id informado
	app.delete('/empresa/:id', empresaController.deleteEmpresa);
	
	/*
		================================================================
		Rotas 'leilao'
		=================================================================
	*/
	// Recupera todos os registros da tabela 'leilao'	
	app.get('/leilao', leilaoController.getLeiloes);
	// Recupera todos os registros da tabela 'leilao' cruando dados com outras tabelas	
	app.get('/leiloes', leilaoController.getLeiloesCompleto);
	// Recupera 1 registro da tabela 'leilao' com base no id passado na URL
	app.get('/leilao/:id', leilaoController.getLeilao);
	// Insere um novo registro na tabela 'leilao' com os dados enviados no body da mensagem
	app.post('/leilao', leilaoController.postLeilao);
	// Altera o registro que seja igual o :id informado e com os dados recebidos no body da mensagem
	app.put('/leilao/:id', leilaoController.putLeilao);
	// Remove da tabela 'leilao' o registro com o :id informado
	app.delete('/leilao/:id', leilaoController.deleteLeilao);
	
	/*
		================================================================
		Rotas 'lote'
		=================================================================
	*/
	// Recupera todos os registros da tabela 'lote'	
	app.get('/lote', loteController.getLotes);
	// Recupera 1 registro da tabela 'lote' com base no id passado na URL
	app.get('/lote/:id', loteController.getLote);
	// Insere um novo registro na tabela 'lote' com os dados enviados no body da mensagem
	app.post('/lote', loteController.postLote);
	// Altera o registro que seja igual o :id informado e com os dados recebidos no body da mensagem
	app.put('/lote/:id', loteController.putLote);
	// Remove da tabela 'lote' o registro com o :id informado
	app.delete('/lote/:id', loteController.deleteLote);
	
	/*
		================================================================
		Rotas 'comprador'
		=================================================================
	*/
	// Recupera todos os registros da tabela 'comprador'	
	app.get('/comprador', compradorController.getCompradores);
	// Recupera 1 registro da tabela 'comprador' com base no id passado na URL
	app.get('/comprador/:id1,:id2', compradorController.getComprador);
	// Insere um novo registro na tabela 'comprador' com os dados enviados no body da mensagem
	app.post('/comprador', compradorController.postComprador);
	// Altera o registro que seja igual o :id informado e com os dados recebidos no body da mensagem
	app.put('/comprador/:id1,:id2', compradorController.putComprador);
	// Remove da tabela 'comprador' o registro com o :id informado
	app.delete('/comprador/:id1,:id2', compradorController.deleteComprador);
	
	/*
		================================================================
		Rotas 'unidade'
		=================================================================
	*/
	// Recupera todos os registros da tabela 'unidade'	
	app.get('/unidade', unidadeController.getUnidades);
	// Recupera 1 registro da tabela 'unidade' com base no id passado na URL
	app.get('/unidade/:id', unidadeController.getUnidade);
	// Insere um novo registro na tabela 'unidade' com os dados enviados no body da mensagem
	app.post('/unidade', unidadeController.postUnidade);
	// Altera o registro que seja igual o :id informado e com os dados recebidos no body da mensagem
	app.put('/unidade/:id', unidadeController.putUnidade);
	// Remove da tabela 'unidade' o registro com o :id informado
	app.delete('/unidade/:id', unidadeController.deleteUnidade);
	
	/*
		================================================================
		Erros HTTP -> Tradução PT BR
		=================================================================
	*/
	// Erro 404 -> NOT FOUND
	app.use(function(req, res) {
		res.status(statuHTTP.NOT_FOUND).send({ error: statuHTTP[404] }); // enviar JSON com código de erro
	});
	// Erro 500 -> INTERNAL SERVER ERROR
	app.use(function(error, req, res, next) {
		res.status(statuHTTP.INTERNAL_SERVER_ERROR).send({ error: statuHTTP[500] }); // enviar JSON com código de erro
	});
};