/*
	###########################################################################################
	Autor: Vagner Silva
	Data: 13/11/2015
	Versão: 1.0.0
	Função: Tradução de Mensagens de Erros do Protocolo HTTP - PT BR
	###########################################################################################
*/
var languageHTTPStatus = {
	// 1xx (códigos iniciados em "1") - Resultados Informativos
	100: 'Continuar',
	101: 'Mudando Protocolos',
	// 2xx (códigos iniciados em "2") - Resultados de Sucesso
	200: 'OK',
	201: 'Criado',
	202: 'Aceito',
	203: 'Não-Autorizado',
	204: 'Nenhum Conteúdo',
	205: 'Reset',
	206: 'Conteúdo parcial',
	// 3xx (códigos iniciados em "3") - Instruções de Redirecionamento
	300: 'Múltipla Escolha',
	301: 'Movido',
	302: 'Encontrado',
	303: 'Veja Outros',
	304: 'Não Modificado',
	305: 'Use Proxy',
	307: 'Redirecionamento Temporário',
	// 4xx (códigos iniciados em "4") - Resultados de Erro do Cliente
	400: 'Requisição Inválida',
	401: 'Não Autorizado',
	402: 'Pagamento Necessário',
	403: 'Proibido',
	404: 'Não Encontrado',
	405: 'Método Não Permitido',
	406: 'Não Aceitável',
	407: 'Autenticação de Proxy Necessária',
	408: 'Tempo de Requisição Esgotou',
	409: 'Conflito',
	410: 'Não Disponível no Momento',
	411: 'Comprimento Necessário',
	412: 'Pré-condição Falhou',
	413: 'Entidade de Solicitação Muito Grande',
	414: 'URI Muito Longo',
	415: 'Tipo de Mídia Não Suportado',
	416: 'Parte Solicitada não Satisfatória',
	417: 'Expectativa Falhada',
	422: 'Entidade Improcessável',
	429: 'Muitas Solicitações',
	// 5xx (códigos iniciados em "5") - Resultados de Erro do Servidor
	500: 'Erro Interno do Servidor',
	501: 'Não Implementado',
	502: 'Bad Gateway',
	503: 'Serviço Indisponível',
	504: 'Tempo Esgotado no Gateway',
	505: 'Versão de HTTP Não Suportada'
};

exports.languageHTTPStatus = languageHTTPStatus;