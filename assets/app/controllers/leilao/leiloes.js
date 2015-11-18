angular.module('app').controller('leilaoListViewController', function($scope, $http) {
    var dataSource = new kendo.data.DataSource({
        pageSize: 6,
		transport: {
            read: function (e) {
                $http.get('http://localhost:3000/leiloes').
                success(function (data, status, headers, config) {
                    e.success(data);
                }).
                error(function (data, status, headers, config) {
                    alert('Carregamento dos dados não efetuado. '+(data.error ? data.error : 'Erro desconhecido '));
                    console.log(status);
                });
            }
        }        
    });

    $("#pager").kendoPager({
        dataSource: dataSource
    }).data("kendoPager");
	
    $("#kendoListView").kendoListView({
        dataSource: dataSource,
		pageable: true,
        template: kendo.template($("#template").html())
    });
	
	$("div").removeClass("k-widget k-listview");
});