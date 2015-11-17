app.controller('HomeCtrl', function($rootScope, $location){
	$rootScope.activetab = $location.path();
});

app.controller('UnidadeCtrl', function($rootScope, $location){
	$rootScope.activetab = $location.path();
});

app.controller('EmpresaCtrl', function($rootScope, $location){
	$rootScope.activetab = $location.path();
});

app.controller('LeilaoCtrl', function($rootScope, $location){
	$rootScope.activetab = $location.path();
});