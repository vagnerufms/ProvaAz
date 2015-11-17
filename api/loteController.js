/*
	###########################################################################################
	Autor: Vagner Silva
	Data: 13/11/2015
	Função: Rotas de lote
	###########################################################################################
*/

var pg = require('pg');
var database = require('../servidor/database');
var errorHandler = require('../servidor/errorHandler');
var connectionString = database.connectionString;
var resultados = [];

module.exports = {
	/*
		============================================================================================================
		HTTP GET - Recupera todos os registros da tabela 'lote'
		============================================================================================================
	*/
	getLotes : function(req, res, next) {	
		resultados = [];
		// Conecta ao Banco de Dados PostgreSQL por meio do Pool de Conexão
		pg.connect(connectionString, function(erro, cliente, done) {
			if(!erro){
				var query = cliente.query("SELECT * FROM lote;", function(erro, resultado){
					// Enviar Erro no formato JSON na View em caso de problemas
					if(erro) errorHandler.enviarErroJSONToView(errorHandler.criarErroPostgreSQL(erro), res);
				});
				// Adicionar Resultados no vetor de Resultado
				query.on('row', function(row) {
					resultados.push(row);
				});
				// Finalizar Conexão e Retornar os resultados
				query.on('end', function() { 
					cliente.end(); //Finaliza a conexão do Banco de Dados
					return res.json(resultados); // Retorna todos os resultados no formato JSON
				});			
			}else{
				// Enviar Erro no formato JSON na View em caso de problemas
				errorHandler.enviarErroJSONToView(errorHandler.criarErroPostgreSQL(erro), res);
			}
		});
    },
	/*
		============================================================================================================
		HTTP GET - Recupera 1 registro da tabela 'lote' com base no id passado na URL
		============================================================================================================
	*/
	getLote : function(req, res) {
		resultados = [];
		var id = req.params.id;
		// Conecta ao Banco de Dados PostgreSQL por meio do Pool de Conexão
		pg.connect(connectionString, function(erro, cliente, done) {
			if(!erro){
				var query = cliente.query("SELECT * FROM lote WHERE id = "+id+";", function(erro, resultado){
					// Enviar Erro no formato JSON na View em caso de problemas
					if(erro) errorHandler.enviarErroJSONToView(errorHandler.criarErroPostgreSQL(erro), res);
				});
				// Adicionar Resultados no vetor de Resultado
				query.on('row', function(row) {
					resultados.push(row);
				});
				// Finalizar Conexão e Retornar os resultados
				query.on('end', function() { 
					cliente.end(); //Finaliza a conexão do Banco de Dados
					return res.json(resultados); // Retorna todos os resultados no formato JSON
				});			
			}else{
				// Enviar Erro no formato JSON na View em caso de problemas
				errorHandler.enviarErroJSONToView(errorHandler.criarErroPostgreSQL(erro), res);
			}
		});
    },
	/*
		============================================================================================================
		HTTP POST - Insere um novo registro na tabela 'lote' com os dados enviados no body da mensagem
		============================================================================================================
	*/
	postLote : function(req, res) {
		resultados = [];
		var dados = {
			numeroLote : req.body.numeroLote,
			descricao : req.body.descricao,
			quantidade : req.body.quantidade,
			valorInicial : req.body.valorInicial,
			unidade : req.body.unidade,
			leilao : req.body.leilao
		};
		// Conecta ao Banco de Dados PostgreSQL por meio do Pool de Conexão
		pg.connect(connectionString, function(erro, cliente, done) {
			if(!erro){
				cliente.query(
					"INSERT INTO lote (\"numeroLote\", descricao, quantidade, \"valorInicial\", unidade, leilao) VALUES ($1, $2, $3, $4, $5, $6)", 
					[dados.numeroLote, dados.descricao, dados.quantidade, dados.valorInicial, dados.unidade, dados.leilao],
					function(erro, resultado){
						// Enviar Erro no formato JSON na View em caso de problemas
						if(erro) errorHandler.enviarErroJSONToView(errorHandler.criarErroPostgreSQL(erro), res);
					}
				);
				// Pegar o último dado inserido para retorná-lo
				var query = cliente.query("SELECT * FROM lote ORDER BY id ASC", function(erro, resultado){
					// Enviar Erro no formato JSON na View em caso de problemas
					if(erro) errorHandler.enviarErroJSONToView(errorHandler.criarErroPostgreSQL(erro), res);
				});
				// Adicionar Resultados no vetor de Resultado
				query.on('row', function(row) {
					resultados.push(row);
				});
				// Finalizar Conexão e Retornar os resultados
				query.on('end', function() { 
					cliente.end(); //Finaliza a conexão do Banco de Dados
					return res.json(resultados); // Retorna todos os resultados no formato JSON
				});			
			}else{
				// Enviar Erro no formato JSON na View em caso de problemas
				errorHandler.enviarErroJSONToView(errorHandler.criarErroPostgreSQL(erro), res);
			}
		});
    },
	/*
		============================================================================================================
		HTTP PUT - Altera o registro que seja igual o :id informado e com os dados recebidos no body da mensagem
		============================================================================================================
	*/
	putLote : function(req, res) {
		resultados = [];
		var id = req.params.id;
		var dados = {
			numeroLote : req.body.numeroLote,
			descricao : req.body.descricao,
			quantidade : req.body.quantidade,
			valorInicial : req.body.valorInicial,
			unidade : req.body.unidade,
			leilao : req.body.leilao,
			updatedAt: 'now()'
		};
		// Conecta ao Banco de Dados PostgreSQL por meio do Pool de Conexão
		pg.connect(connectionString, function(erro, cliente, done) {
			if(!erro){
				cliente.query(
					"UPDATE lote SET \"numeroLote\"=($1), descricao=($2), quantidade=($3), \"valorInicial\"=($4), unidade=($5), leilao=($6), \"updatedAt\"=($7) WHERE id=($8)",
					[dados.numeroLote, dados.descricao, dados.quantidade, dados.valorInicial, dados.unidade, dados.leilao, dados.updatedAt, id],
					function(erro, resultado){
						// Enviar Erro no formato JSON na View em caso de problemas
						if(erro) errorHandler.enviarErroJSONToView(errorHandler.criarErroPostgreSQL(erro), res);
						// O Update Não atualizou Nenhum dado no Banco de Dados -> ID não existe, porém não aciona erro.
						if(resultado && resultado.rowCount < 1)
							errorHandler.enviarErroJSONToView(errorHandler.criarErroPostgreSQL(resultado, 'Erro: Os Dados não foram Atualizados, Id informado não existe'), res);
					}
				);
				// Pegar o último dado inserido para retorná-lo
				var query = cliente.query("SELECT * FROM lote ORDER BY id ASC", function(erro, resultado){
					// Enviar Erro no formato JSON na View em caso de problemas
					if(erro) errorHandler.enviarErroJSONToView(errorHandler.criarErroPostgreSQL(erro), res);
				});
				// Adicionar Resultados no vetor de Resultado
				query.on('row', function(row) {
					resultados.push(row);
				});
				// Finalizar Conexão e Retornar os resultados
				query.on('end', function() { 
					cliente.end(); //Finaliza a conexão do Banco de Dados
					return res.json(resultados); // Retorna todos os resultados no formato JSON
				});			
			}else{
				// Enviar Erro no formato JSON na View em caso de problemas
				errorHandler.enviarErroJSONToView(errorHandler.criarErroPostgreSQL(erro), res);
			}
		});
    },
	/*
		============================================================================================================
		HTTP DELETE - Remove da tabela 'lote' o registro com o :id informado
		============================================================================================================
	*/
	deleteLote : function(req, res) {
		resultados = [];
		var id = req.params.id;
		// Conecta ao Banco de Dados PostgreSQL por meio do Pool de Conexão
		pg.connect(connectionString, function(erro, cliente, done) {
			if(!erro){
				var query = cliente.query("DELETE FROM lote WHERE id=($1)", [id], function(erro, resultado){
					// Enviar Erro no formato JSON na View em caso de problemas
					if(erro) errorHandler.enviarErroJSONToView(errorHandler.criarErroPostgreSQL(erro), res);
					// O Delete Não removeu Nenhum dado no Banco de Dados -> ID não existe, porém não aciona erro.
					if(resultado && resultado.rowCount < 1)
						errorHandler.enviarErroJSONToView(errorHandler.criarErroPostgreSQL(resultado, 'Erro: Os Dados não foram Excluídos, Id informado não existe'), res);
				});
				var query = cliente.query("SELECT * FROM lote;", function(erro, resultado){
					// Enviar Erro no formato JSON na View em caso de problemas
					if(erro) errorHandler.enviarErroJSONToView(errorHandler.criarErroPostgreSQL(erro), res);
				});
				// Adicionar Resultados no vetor de Resultado
				query.on('row', function(row) {
					resultados.push(row);
				});
				// Finalizar Conexão e Retornar os resultados
				query.on('end', function() { 
					cliente.end(); //Finaliza a conexão do Banco de Dados
					return res.json(resultados); // Retorna todos os resultados no formato JSON
				});			
			}else{
				// Enviar Erro no formato JSON na View em caso de problemas
				errorHandler.enviarErroJSONToView(errorHandler.criarErroPostgreSQL(erro), res);
			}
		});
    }
};