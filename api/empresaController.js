/*
	###########################################################################################
	Autor: Vagner Silva
	Data: 13/11/2015
	Função: Controlador de empresa
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
		HTTP GET - Recupera todos os registros da tabela 'empresa'
		============================================================================================================
	*/
	getEmpresas : function(req, res, next) {	
		resultados = [];
		// Conecta ao Banco de Dados PostgreSQL por meio do Pool de Conexão
		pg.connect(connectionString, function(erro, cliente, done) {
			if(!erro){
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
    },
	/*
		============================================================================================================
		HTTP GET - Recupera 1 registro da tabela 'empresa' com base no id passado na URL
		============================================================================================================
	*/
	getEmpresa : function(req, res) {
		resultados = [];
		var id = req.params.id;
		// Conecta ao Banco de Dados PostgreSQL por meio do Pool de Conexão
		pg.connect(connectionString, function(erro, cliente, done) {
			if(!erro){
				var query = cliente.query("SELECT * FROM empresa WHERE id = "+id+";", function(erro, resultado){
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
		HTTP POST - Insere um novo registro na tabela 'empresa' com os dados enviados no body da mensagem
		============================================================================================================
	*/
	postEmpresa : function(req, res) {
		resultados = [];
		var dados = {
			razaoSocial : req.body.razaoSocial,
			cnpj : req.body.cnpj,
			logradouro : req.body.logradouro,
			municipio : req.body.municipio,
			numero : req.body.numero,
			complemento : req.body.complemento,
			bairro : req.body.bairro,
			cep : req.body.cep,
			telefone : req.body.telefone,
			email : req.body.email,
			site : req.body.site,
			usuario : req.body.usuario,
			senha : req.body.senha
		};
		// Conecta ao Banco de Dados PostgreSQL por meio do Pool de Conexão
		pg.connect(connectionString, function(erro, cliente, done) {
			if(!erro){
				cliente.query(
					"INSERT INTO empresa (\"razaoSocial\", cnpj, logradouro, municipio, numero, complemento, bairro, cep, telefone, email, site, usuario, senha) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)", 
					[dados.razaoSocial, dados.cnpj, dados.logradouro, dados.municipio, dados.numero, dados.complemento, dados.bairro, dados.cep, dados.telefone,dados.email, dados.site, dados.usuario, dados.senha],
					function(erro, resultado){
						// Enviar Erro no formato JSON na View em caso de problemas
						if(erro) errorHandler.enviarErroJSONToView(errorHandler.criarErroPostgreSQL(erro), res);
					}
				);
				// Pegar o último dado inserido para retorná-lo
				var query = cliente.query("SELECT * FROM empresa ORDER BY id ASC", function(erro, resultado){
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
	putEmpresa : function(req, res) {
		resultados = [];
		var id = req.params.id;
		var dados = {
			razaoSocial : req.body.razaoSocial,
			cnpj : req.body.cnpj,
			logradouro : req.body.logradouro,
			municipio : req.body.municipio,
			numero : req.body.numero,
			complemento : req.body.complemento,
			bairro : req.body.bairro,
			cep : req.body.cep,
			telefone : req.body.telefone,
			email : req.body.email,
			site : req.body.site,
			usuario : req.body.usuario,
			senha : req.body.senha,
			updatedAt: 'now()'
		};
		// Conecta ao Banco de Dados PostgreSQL por meio do Pool de Conexão
		pg.connect(connectionString, function(erro, cliente, done) {
			if(!erro){
				cliente.query(
					"UPDATE empresa SET \"razaoSocial\"=($1), cnpj=($2), logradouro=($3), municipio=($4), numero=($5), complemento=($6), bairro=($7), cep=($8), telefone=($9), email=($10), site=($11), usuario=($12), senha=($13), \"updatedAt\"=($14) WHERE id=($15)",
					[dados.razaoSocial, dados.cnpj, dados.logradouro, dados.municipio, dados.numero, dados.complemento, dados.bairro, dados.cep, dados.telefone,dados.email, dados.site, dados.usuario, dados.senha, dados.updatedAt, id],
					function(erro, resultado){
						// Enviar Erro no formato JSON na View em caso de problemas
						if(erro) errorHandler.enviarErroJSONToView(errorHandler.criarErroPostgreSQL(erro), res);
						// O Update Não atualizou Nenhum dado no Banco de Dados -> ID não existe, porém não aciona erro.
						if(resultado && resultado.rowCount < 1)
							errorHandler.enviarErroJSONToView(errorHandler.criarErroPostgreSQL(resultado, 'Erro: Dados não foram Atualizados, Id informado não existe'), res);
					}
				);
				// Pegar o último dado inserido para retorná-lo
				var query = cliente.query("SELECT * FROM empresa ORDER BY id ASC", function(erro, resultado){
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
	deleteEmpresa : function(req, res) {
		resultados = [];
		var id = req.params.id;
		// Conecta ao Banco de Dados PostgreSQL por meio do Pool de Conexão
		pg.connect(connectionString, function(erro, cliente, done) {
			if(!erro){
				var query = cliente.query("DELETE FROM empresa WHERE id=($1)", [id], function(erro, resultado){
					// Enviar Erro no formato JSON na View em caso de problemas
					if(erro) errorHandler.enviarErroJSONToView(errorHandler.criarErroPostgreSQL(erro), res);
					// O Delete Não removeu Nenhum dado no Banco de Dados -> ID não existe, porém não aciona erro.
					if(resultado && resultado.rowCount < 1)
						errorHandler.enviarErroJSONToView(errorHandler.criarErroPostgreSQL(resultado, 'Erro: Dados não foram Excluídos, Id informado não existe'), res);
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