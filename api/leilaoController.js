/*
	###########################################################################################
	Autor: Vagner Silva
	Data: 13/11/2015
	Função: Controlador de leilao
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
		HTTP GET - Recupera todos os registros da tabela 'leilao'
		============================================================================================================
	*/
	getLeiloes : function(req, res, next) {	
		resultados = [];
		// Conecta ao Banco de Dados PostgreSQL por meio do Pool de Conexão
		pg.connect(connectionString, function(erro, cliente, done) {
			if(!erro){
				var query = cliente.query("SELECT * FROM leilao;", function(erro, resultado){
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
		HTTP GET - Recupera todos os registros da tabela 'leilao' cruando dados com outras tabelas
		============================================================================================================
	*/
	getLeiloesCompleto : function(req, res, next) {	
		resultados = [];
		// Conecta ao Banco de Dados PostgreSQL por meio do Pool de Conexão
		pg.connect(connectionString, function(erro, cliente, done) {
			if(!erro){
				var query = cliente.query('SELECT l.id, l.\"inicioPrevisto\", l.\"razaoSocial\", t.total from( SELECT leilao.id, leilao.\"inicioPrevisto\",empresa.\"razaoSocial\" FROM leilao, empresa WHERE leilao.vendedor = empresa.id) l inner join( select leilao.id, SUM(lote.quantidade * lote.\"valorInicial\") as total From leilao , lote where leilao.id = lote.leilao group by leilao.id) t on t.id = l.id;', function(erro, resultado){
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
		HTTP GET - Recupera 1 registro da tabela 'leilao' com base no id passado na URL
		============================================================================================================
	*/
	getLeilao : function(req, res) {
		resultados = [];
		var id = req.params.id;
		// Conecta ao Banco de Dados PostgreSQL por meio do Pool de Conexão
		pg.connect(connectionString, function(erro, cliente, done) {
			if(!erro){
				var query = cliente.query("SELECT * FROM leilao WHERE id = "+id+";", function(erro, resultado){
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
		HTTP POST - Insere um novo registro na tabela 'leilao' com os dados enviados no body da mensagem
		============================================================================================================
	*/
	postLeilao : function(req, res) {
		resultados = [];
		var dados = {
			codigo : req.body.codigo,
			descricao : req.body.descricao,
			vendedor : req.body.vendedor,
			inicioPrevisto : 'now()' // Alterar Depois e pegar a data e hora do body
		};
		// Conecta ao Banco de Dados PostgreSQL por meio do Pool de Conexão
		pg.connect(connectionString, function(erro, cliente, done) {
			if(!erro){
				cliente.query(
					"INSERT INTO leilao (codigo, descricao, vendedor, \"inicioPrevisto\") VALUES ($1, $2, $3, $4)", 
					[dados.codigo, dados.descricao, dados.vendedor, dados.inicioPrevisto],
					function(erro, resultado){
						// Enviar Erro no formato JSON na View em caso de problemas
						if(erro) errorHandler.enviarErroJSONToView(errorHandler.criarErroPostgreSQL(erro), res);
					}
				);
				// Pegar o último dado inserido para retorná-lo
				var query = cliente.query("SELECT * FROM leilao ORDER BY id ASC", function(erro, resultado){
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
	putLeilao : function(req, res) {
		resultados = [];
		var id = req.params.id;
		var dados = {
			codigo : req.body.codigo,
			descricao : req.body.descricao,
			vendedor : req.body.vendedor,
			inicioPrevisto : 'now()', // Alterar Depois e pegar a data e hora do body
			updatedAt: 'now()'
		};
		// Conecta ao Banco de Dados PostgreSQL por meio do Pool de Conexão
		pg.connect(connectionString, function(erro, cliente, done) {
			if(!erro){
				cliente.query(
					"UPDATE leilao SET codigo=($1), descricao=($2), vendedor=($3), \"inicioPrevisto\"=($4), \"updatedAt\"=($5) WHERE id=($6)",
					[dados.codigo, dados.descricao, dados.vendedor, dados.inicioPrevisto, dados.updatedAt, id],
					function(erro, resultado){
						// Enviar Erro no formato JSON na View em caso de problemas
						if(erro) errorHandler.enviarErroJSONToView(errorHandler.criarErroPostgreSQL(erro), res);
						// O Update Não atualizou Nenhum dado no Banco de Dados -> ID não existe, porém não aciona erro.
						if(resultado && resultado.rowCount < 1)
							errorHandler.enviarErroJSONToView(errorHandler.criarErroPostgreSQL(resultado, 'Erro: Os Dados não foram Atualizados, Id informado não existe'), res);
					}
				);
				// Pegar o último dado inserido para retorná-lo
				var query = cliente.query("SELECT * FROM leilao ORDER BY id ASC", function(erro, resultado){
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
		HTTP DELETE - Remove da tabela 'empresa' o registro com o :id informado
		============================================================================================================
	*/
	deleteLeilao : function(req, res) {
		resultados = [];
		var id = req.params.id;
		// Conecta ao Banco de Dados PostgreSQL por meio do Pool de Conexão
		pg.connect(connectionString, function(erro, cliente, done) {
			if(!erro){
				var query = cliente.query("DELETE FROM leilao WHERE id=($1)", [id], function(erro, resultado){
					// Enviar Erro no formato JSON na View em caso de problemas
					if(erro) errorHandler.enviarErroJSONToView(errorHandler.criarErroPostgreSQL(erro), res);
					// O Delete Não removeu Nenhum dado no Banco de Dados -> ID não existe, porém não aciona erro.
					if(resultado && resultado.rowCount < 1)
						errorHandler.enviarErroJSONToView(errorHandler.criarErroPostgreSQL(resultado, 'Erro: Os Dados não foram Excluídos, Id informado não existe'), res);
				});
				var query = cliente.query("SELECT * FROM empresa;", function(erro, resultado){
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