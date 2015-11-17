/*
	###########################################################################################
	Autor: Vagner Silva
	Data: 13/11/2015
	Função: Controlador de unidade
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
		HTTP GET - Recupera todos os registros da tabela 'unidade'
		============================================================================================================
	*/
	getUnidades : function(req, res, next) {	
		resultados = [];
		// Conecta ao Banco de Dados PostgreSQL por meio do Pool de Conexão
		pg.connect(connectionString, function(erro, cliente, done) {
			if(!erro){
				var query = cliente.query("SELECT * FROM unidade;", function(erro, resultado){
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
		HTTP GET - Recupera 1 registro da tabela 'unidade' com base no id passado na URL
		============================================================================================================
	*/
	getUnidade : function(req, res) {
		resultados = [];
		var id = req.params.id;
		// Conecta ao Banco de Dados PostgreSQL por meio do Pool de Conexão
		pg.connect(connectionString, function(erro, cliente, done) {
			if(!erro){
				var query = cliente.query("SELECT * FROM unidade WHERE id = "+id+";", function(erro, resultado){
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
		HTTP POST - Insere um novo registro na tabela 'unidade' com os dados enviados no body da mensagem
		============================================================================================================
	*/
	postUnidade : function(req, res) {
		resultados = [];
		var dados = {
			nome : req.body.nome
		};
		// Conecta ao Banco de Dados PostgreSQL por meio do Pool de Conexão
		pg.connect(connectionString, function(erro, cliente, done) {
			if(!erro){
				cliente.query(
					"INSERT INTO unidade (nome) VALUES ($1)", 
					[dados.nome],
					function(erro, resultado){
						// Enviar Erro no formato JSON na View em caso de problemas
						if(erro) errorHandler.enviarErroJSONToView(errorHandler.criarErroPostgreSQL(erro), res);
					}
				);
				// Pegar o último dado inserido para retorná-lo
				var query = cliente.query("SELECT * FROM unidade ORDER BY id ASC", function(erro, resultado){
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
	putUnidade : function(req, res) {
		resultados = [];
		var id = req.params.id;
		var dados = {
			nome : req.body.nome,
			updatedAt: 'now()'
		};
		
		// Conecta ao Banco de Dados PostgreSQL por meio do Pool de Conexão
		pg.connect(connectionString, function(erro, cliente, done) {
			if(!erro){
				cliente.query(
					"UPDATE unidade SET nome=($1), \"updatedAt\"=($2) WHERE id=($3);",
					[dados.nome, dados.updatedAt, id],
					function(erro, resultado){
						// Enviar Erro no formato JSON na View em caso de problemas
						if(erro) errorHandler.enviarErroJSONToView(errorHandler.criarErroPostgreSQL(erro), res);
						// O Update Não atualizou Nenhum dado no Banco de Dados -> ID não existe, porém não aciona erro.
						if(resultado && resultado.rowCount < 1)
							errorHandler.enviarErroJSONToView(errorHandler.criarErroPostgreSQL(resultado, 'Erro: Dados não foram Atualizados, Id informado não existe'), res);
					}
				);
				// Pegar o último dado inserido para retorná-lo
				var query = cliente.query("SELECT * FROM unidade ORDER BY id ASC", function(erro, resultado){
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
		HTTP DELETE - Remove da tabela 'unidade' o registro com o :id informado
		============================================================================================================
	*/
	deleteUnidade : function(req, res) {
		resultados = [];
		var id = req.params.id;
		// Conecta ao Banco de Dados PostgreSQL por meio do Pool de Conexão
		pg.connect(connectionString, function(erro, cliente, done) {
			if(!erro){
				var query = cliente.query("DELETE FROM unidade WHERE id=($1)", [id], function(erro, resultado){
					// Enviar Erro no formato JSON na View em caso de problemas
					if(erro) errorHandler.enviarErroJSONToView(errorHandler.criarErroPostgreSQL(erro), res);
					// O Delete Não removeu Nenhum dado no Banco de Dados -> ID não existe, porém não aciona erro.
					if(resultado && resultado.rowCount < 1)
						errorHandler.enviarErroJSONToView(errorHandler.criarErroPostgreSQL(resultado, 'Erro: Dados não foram Excluídos, Id informado não existe'), res);
				});
				var query = cliente.query("SELECT * FROM unidade;", function(erro, resultado){
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