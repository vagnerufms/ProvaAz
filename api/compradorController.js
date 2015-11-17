/*
	###########################################################################################
	Autor: Vagner Silva
	Data: 13/11/2015
	Função: Controlador de comprador
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
		HTTP GET - Recupera todos os registros da tabela 'comprador'
		============================================================================================================
	*/
	getCompradores : function(req, res, next) {	
		resultados = [];
		// Conecta ao Banco de Dados PostgreSQL por meio do Pool de Conexão
		pg.connect(connectionString, function(erro, cliente, done) {
			if(!erro){
				var query = cliente.query("SELECT * FROM comprador;", function(erro, resultado){
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
		HTTP GET - Recupera 1 registro da tabela 'comprador' com base no id passado na URL
		============================================================================================================
	*/
	getComprador : function(req, res) {
		resultados = [];
		var id1 = req.params.id1;
		var id2 = req.params.id2;
		// Conecta ao Banco de Dados PostgreSQL por meio do Pool de Conexão
		pg.connect(connectionString, function(erro, cliente, done) {
			if(!erro){
				var query = cliente.query("SELECT * FROM comprador WHERE pfk_empresa = "+id1+" AND pfk_leilao = "+id2+";", function(erro, resultado){
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
		HTTP POST - Insere um novo registro na tabela 'comprador' com os dados enviados no body da mensagem
		============================================================================================================
	*/
	postComprador : function(req, res) {
		resultados = [];
		var dados = {
			pfk_empresa : req.body.id_empresa,
			pfk_leilao : req.body.id_leilao
		};
		// Conecta ao Banco de Dados PostgreSQL por meio do Pool de Conexão
		pg.connect(connectionString, function(erro, cliente, done) {
			if(!erro){
				cliente.query(
					"INSERT INTO comprador (pfk_empresa, pfk_leilao) VALUES ($1, $2)", 
					[dados.pfk_empresa, dados.pfk_leilao],
					function(erro, resultado){
						// Enviar Erro no formato JSON na View em caso de problemas
						if(erro) errorHandler.enviarErroJSONToView(errorHandler.criarErroPostgreSQL(erro), res);
					}
				);
				// Pegar o último dado inserido para retorná-lo
				var query = cliente.query("SELECT * FROM comprador ORDER BY (pfk_empresa, pfk_leilao) ASC", function(erro, resultado){
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
	putComprador : function(req, res) {
		resultados = [];
		var id1 = req.params.id1;
		var id2 = req.params.id2;
		var dados = {
			pfk_empresa : req.body.id_empresa,
			pfk_leilao : req.body.id_leilao
		};
		// Conecta ao Banco de Dados PostgreSQL por meio do Pool de Conexão
		pg.connect(connectionString, function(erro, cliente, done) {
			if(!erro){
				cliente.query(
					"UPDATE comprador SET pfk_empresa=($1), pfk_leilao=($2) WHERE pfk_empresa = "+id1+" AND pfk_leilao = "+id2+";",
					[dados.pfk_empresa, dados.pfk_leilao],
					function(erro, resultado){
						// Enviar Erro no formato JSON na View em caso de problemas
						if(erro) errorHandler.enviarErroJSONToView(errorHandler.criarErroPostgreSQL(erro), res);
						// O Update Não atualizou Nenhum dado no Banco de Dados -> ID não existe, porém não aciona erro.
						if(resultado && resultado.rowCount < 1)
							errorHandler.enviarErroJSONToView(errorHandler.criarErroPostgreSQL(resultado, 'Erro: Dados não foram Atualizados, Id(s) informado(s) não existe(m)'), res);
					}
				);
				// Pegar o último dado inserido para retorná-lo
				var query = cliente.query("SELECT * FROM comprador ORDER BY (pfk_empresa, pfk_leilao) ASC", function(erro, resultado){
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
		HTTP DELETE - Remove da tabela 'comprador' o registro com o :id informado
		============================================================================================================
	*/
	deleteComprador : function(req, res) {
		resultados = [];
		var id1 = req.params.id1;
		var id2 = req.params.id2;
		// Conecta ao Banco de Dados PostgreSQL por meio do Pool de Conexão
		pg.connect(connectionString, function(erro, cliente, done) {
			if(!erro){
				var query = cliente.query("DELETE FROM comprador WHERE pfk_empresa=($1) AND pfk_leilao=($2)", [id1, id2], function(erro, resultado){
					// Enviar Erro no formato JSON na View em caso de problemas
					if(erro) errorHandler.enviarErroJSONToView(errorHandler.criarErroPostgreSQL(erro), res);
					// O Delete Não removeu Nenhum dado no Banco de Dados -> ID não existe, porém não aciona erro.
					if(resultado && resultado.rowCount < 1)
						errorHandler.enviarErroJSONToView(errorHandler.criarErroPostgreSQL(resultado, 'Erro: Dados não foram Excluídos, Id(s) informados não existe(m)'), res);
				});
				var query = cliente.query("SELECT * FROM comprador ORDER BY (pfk_empresa, pfk_leilao) ASC;", function(erro, resultado){
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