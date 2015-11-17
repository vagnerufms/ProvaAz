var app = angular.module('app',['ngRoute', 'kendo.directives']);

app.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/', {
		templateUrl : '/app/views/home/home.html',
		controller : 'HomeCtrl',
	})
	.when('/unidades', {
		templateUrl : '/app/views/unidade/unidades.html',
		controller : 'UnidadeCtrl',
	})
	.when('/empresas', {
		templateUrl : '/app/views/empresa/empresas.html',
		controller : 'EmpresaCtrl',
	})
	.when('/leiloes', {
		templateUrl : '/app/views/leilao/leiloes.html',
		controller : 'LeilaoCtrl',
	})
	.otherwise ({ redirectTo: '/' });
});