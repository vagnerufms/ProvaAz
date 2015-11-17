/*
	###########################################################################################
	Autor: Vagner Silva
	Data: 13/11/2015
	Versão: 1.0.0
	Função: Tradução de Mensagens de Erros do Protocolo HTTP - EN US
	###########################################################################################
*/
var languageHTTPStatus = {
	// 1xx (códigos iniciados em "1") - Resultados Informativos
	100: 'Continue',
	101: 'Switching Protocols',
	// 2xx (códigos iniciados em "2") - Resultados de Sucesso
	200: 'OK',
	201: 'Created',
	202: 'Accepted',
	203: 'Non-Authoritative Information',
	204: 'No Content',
	205: 'Reset Content',
	206: 'Partial Content',
	// 3xx (códigos iniciados em "3") - Instruções de Redirecionamento
	300: 'Multiple Choices',
	301: 'Moved Permanently',
	302: 'Found',
	303: 'See Other',
	304: 'Not Modified',
	305: 'Use Proxy',
	307: 'Temporary Redirect',
	// 4xx (códigos iniciados em "4") - Resultados de Erro do Cliente
	400: 'Bad Request',
	401: 'Unauthorized',
	402: 'Payment Required',
	403: 'Forbidden',
	404: 'Not Found',
	405: 'Method Not Allowed',
	406: 'Not Acceptable',
	407: 'Proxy Authentication Required',
	408: 'Request Time-out',
	409: 'Conflict',
	410: 'Gone',
	411: 'Length Required',
	412: 'Precondition Failed',
	413: 'Request Entity Too Large',
	414: 'Request-URI Too Large',
	415: 'Unsupported Media Type',
	416: 'Requested Range not Satisfiable',
	417: 'Expectation Failed',
	422: 'Unprocessable Entity',
	429: 'Too Many Requests',
	// 5xx (códigos iniciados em "5") - Resultados de Erro do Servidor
	500: 'Internal Server Error',
	501: 'Not Implemented',
	502: 'Bad Gateway',
	503: 'Service Unavailable',
	504: 'Gateway Time-out',
	505: 'HTTP Version not Supported'
};

exports.languageHTTPStatus = languageHTTPStatus;