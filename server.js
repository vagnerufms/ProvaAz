/*
	###########################################################################################
	Autor: Vagner Silva
	Data: 13/11/2015
	Função: Gestão de Leilões (CRUD -> Node / Express / Angular / Kendo-UI / PostgreSQL)
	###########################################################################################
*/

 
'use strict';


/*
	========================================================== 
	Módulos/Pacotes Externos Requeridos
	==========================================================
*/
var express = require('express');								// Express
var http = require('http');										// HTTP
var bodyParser = require('body-parser');						// Processar conteúdo da Body de requisições HTTP
var fs = require('fs');											// FileSystem
var pg = require('pg');											// PostgreSQL
var path = require('path');										// Path


/*
	========================================================== 
	Módulos/Pacotes Internos Requeridos
	==========================================================
*/
var rotas = require('./servidor/rotas');						// Rotas e Controladores


/*
	========================================================== 
	Criação e Configuração de Nova Aplicação com Express
	==========================================================
*/
var app = express();											// Criação de Nova Aplicação com Express
app.use(bodyParser.json());										// Habilitar processamento de conteúdo da Body como JSON
app.use(express.static('./assets')); 							// Views Públicas


/*
	==========================================================
	Rotas
	==========================================================
*/
rotas(app);														// Vinculação das Rotas


/*
	========================================================== 
	Configuração do Host e Porta HTTP do Servidor
	==========================================================
*/
var server = app.listen(3000, 'localhost', function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Servidor executando: http://%s:%s', host, port);
});


module.exports = app;