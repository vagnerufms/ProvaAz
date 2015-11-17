/*
	###########################################################################################
	Autor: Vagner Silva
	Data: 13/11/2015
	Versão: 1.0.0
	Função: Mensagens de Erros do Protocolo HTTP - PT BR
	Site Códigos de Erros: http://www.macoratti.net/http_err.htm
	###########################################################################################
*/
// Idioma Padrão: PT BR
var language = require('./language/http-status_lang_pt_br').languageHTTPStatus; // PT BR
//var language = require('./language/http-status_lang_en_us').languageHTTPStatus; // EN US

module.exports = {
	// 1xx (códigos iniciados em "1") - Resultados Informativos
	100: language[100],
	101: language[101],
	// 2xx (códigos iniciados em "2") - Resultados de Sucesso
	200: language[102],
	201: language[201],
	202: language[202],
	203: language[203],
	204: language[204],
	205: language[205],
	206: language[206],
	// 3xx (códigos iniciados em "3") - Instruções de Redirecionamento
	300: language[300],
	301: language[301],
	302: language[302],
	303: language[303],
	304: language[304],
	305: language[305],
	307: language[307],
	// 4xx (códigos iniciados em "4") - Resultados de Erro do Cliente
	400: language[400],
	401: language[401],
	402: language[402],
	403: language[403],
	404: language[404],
	405: language[405],
	406: language[406],
	407: language[407],
	408: language[408],
	409: language[409],
	410: language[410],
	411: language[411],
	412: language[412],
	413: language[413],
	414: language[414],
	415: language[415],
	416: language[416],
	417: language[417],
	422: language[422],
	429: language[429],
	// 5xx (códigos iniciados em "5") - Resultados de Erro do Servidor
	500: language[500],
	501: language[501],
	502: language[502],
	503: language[503],
	504: language[504],
	505: language[505],
	
	// 1xx (códigos iniciados em "1") - Resultados Informativos
	CONTINUE: 100,
	SWITCHING_PROTOCOLS: 101,
	// 2xx (códigos iniciados em "2") - Resultados de Sucesso
	OK: 200,
	CREATED: 201,
	ACCEPTED: 202,
	NON_AUTHORITATIVE_INFORMATION: 203,
	NO_CONTENT: 204,
	RESET_CONTENT: 205,
	PARTIAL_CONTENT: 206,
	// 3xx (códigos iniciados em "3") - Instruções de Redirecionamento
	MULTIPLE_CHOICES: 300,
	MOVED_PERMANENTLY: 301,
	FOUND: 302,
	SEE_OTHER: 303,
	NOT_MODIFIED: 304,
	USE_PROXY: 305,
	TEMPORARY_REDIRECT: 307,
	// 4xx (códigos iniciados em "4") - Resultados de Erro do Cliente
	BAD_REQUEST: 400,
	UNAUTHORIZED: 401,
	PAYMENT_REQUIRED: 402,
	FORBIDDEN: 403,
	NOT_FOUND: 404,
	METHOD_NOT_ALLOWED: 405,
	NOT_ACCEPTABLE: 406,
	PROXY_AUTHENTICATION_REQUIRED: 407,
	REQUEST_TIMEOUT: 408,
	CONFLICT: 409,
	GONE: 410,
	LENGTH_REQUIRED: 411,
	PRECONDITION_FAILED: 412,
	REQUEST_ENTITY_TOO_LARGE: 413,
	REQUEST_URI_TOO_LONG: 414,
	UNSUPPORTED_MEDIA_TYPE: 415,
	REQUESTED_RANGE_NOT_SATISFIABLE: 416,
	EXPECTATION_FAILED: 417,
	UNPROCESSABLE_ENTITY: 422,
	TOO_MANY_REQUESTS: 429,
	// 5xx (códigos iniciados em "5") - Resultados de Erro do Servidor
	INTERNAL_SERVER_ERROR: 500,
	NOT_IMPLEMENTED: 501,
	BAD_GATEWAY: 502,
	SERVICE_UNAVAILABLE: 503,
	GATEWAY_TIMEOUT: 504,
	HTTP_VERSION_NOT_SUPPORTED: 505
};