/*
	###########################################################################################
	Autor: Vagner Silva
	Data: 13/11/2015
	Função: Gerenciar a Criação de Erros Customizados no Servidor Node.js
	###########################################################################################
*/

/*
	========================================================== 
	Importação de Módulos
	============================================================
*/
var statusHTTP = require('./handlers/errors/errors-http/http-status'); // Idioma Padrão: PT BR
var statusPostgreSQL = require('./handlers/errors/errors-postgresql/postgresql-status'); // Idioma Padrão: EN US

/*
	========================================================== 
	Códigos de Erros do PostgreSQL mais Comuns
	============================================================
*/
/*
	'23502' : 'Not Null Violation', -> Violação de Not Null (Não Concluido porque algum dado Não foi Informado)
	'23503' : 'Foreign Key Violation', -> Violação de Foreign Key (Não pode ser Excludo por haver Dependência)
	'23505' : 'Unique Violation', -> Violação de Foreign Key (Não Concluido porque há cadastro que contenha algum dos dados informados)
	'3D000' : 'Invalid Catalog Name', -> Nome de Catálogo Inválido (Banco Inexistente)
	'ECONNREFUSED': 'connect ECONNREFUSED', -> Erro de Conexão com o Servidor de Banco de Dados
	'28P01' : 'Invalid Password', -> Dados de Acesso de Usuário do Banco de Dados Inválido(s)
*/

//Representar apenas alguns dos erros na View (referentes a violação de Constraints) -> Informar o código Genérico de Erro Interno do Servidor

var errosPostgreSQL_pt_BR = {
	'23502': 'Erro: Não Concluído porque algum dado Obrigatório Não foi Informado',
	'23503': 'Erro: Não pode ser Excluído por haver Dependência',
	'23505': 'Erro: algum Dado informado já foi cadastrado e Não pode ser duplicado',
	'default': 'Erro no Banco de Dados', // Erro Geral caso estoure outra exception não listada nos códigos acima
};

//Mesclar a Tradução dos Erros do PostgreSQL
statusPostgreSQL = Object.assign(statusPostgreSQL, errosPostgreSQL_pt_BR);

// Criando Array com Associação dos Erros do PostgreSQL e códigos de Erros de HTTP (por padrão usar o código genérico 500 e mandar a mensagem do erro do PostgreSQL para a view)
var errosCustomizadosPostgreSQL = {
	'23502': {code: 500, error: statusPostgreSQL['23502']},
	'23503': {code: 500, error: statusPostgreSQL['23503']},
	'23505': {code: 500, error: statusPostgreSQL['23505']},
	'default': {code: 500, error: statusPostgreSQL['default']}, // Erro Geral caso estoure outra exception não listada nos códigos acima
};

// Criando Array com Associação dos Erros do PostgreSQL e códigos de Erros de HTTP (por padrão usar o código genérico 500 e mandar a mensagem do erro do PostgreSQL para a view)
var errosCustomizadosHTTP = {
	'default': {code: 500, error: statusHTTP[500]}, // Erro Geral caso estoure outra exception não listada nos códigos acima
};
 
 
/*
	========================================================== 
	Funções para Criar Mensagens de Erro
	============================================================
*/
module.exports = {
	// Função para Criar Mensagens de Erro do HTTP
	criarErroHTTP : function(errorCode, message){
		var erroCustomizado = new Error((message && message != '' ? message : errosCustomizadosHTTP['default'].error));
		erroCustomizado.error = (message && message != '' ? message : errosCustomizadosHTTP['default'].error);
		erroCustomizado.status = (message ? errorCode : errosCustomizadosHTTP['default'].code);
		return erroCustomizado;
	},
	// Função para Criar Mensagens de Erro do PostgreSQL
	criarErroPostgreSQL : function(objErrorPostgre, newMessage, newCodeErrorHTTP, newCodeErrPostgre){
		console.log('############################# LOG DO ERRO COMPLETO: ############################');
		console.log(objErrorPostgre);
		console.log('########################## FIM DO LOG DO ERRO COMPLETO #########################');
		var erroCustomizado = null;
		if(objErrorPostgre && errosCustomizadosPostgreSQL[objErrorPostgre.code]){ // Objeto de Erro do PostgreSQL
			erroCustomizado = new Error((newMessage ? newMessage : errosCustomizadosPostgreSQL[objErrorPostgre.code].error));
			erroCustomizado.error = (newMessage ? newMessage : errosCustomizadosPostgreSQL[objErrorPostgre.code].error);
			erroCustomizado.status = (newCodeErrorHTTP ? newCodeErrorHTTP : errosCustomizadosPostgreSQL[objErrorPostgre.code].code);
		}else{// Novo Erro Customizado direto dos controllers ou Erro Padrão
			erroCustomizado = new Error((newMessage ? newMessage : errosCustomizadosPostgreSQL['default'].error));
			erroCustomizado.error = (newMessage ? newMessage : errosCustomizadosPostgreSQL['default'].error);
			erroCustomizado.status = (newCodeErrorHTTP ? newCodeErrorHTTP : errosCustomizadosPostgreSQL['default'].code);
		}
		console.log(erroCustomizado);
		return erroCustomizado;
	},
	enviarErroJSONToView : function(erro, res){
		if (erro instanceof Error) {
			res.status(erro.status).send({ error: erro.error }); // enviar JSON com código de erro
		}
	},
}