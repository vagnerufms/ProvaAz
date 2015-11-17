angular.module('app').controller('unidadeGridController', function($scope, $http) {
    $scope.gridOptions = {
        toolbar: [{name: "create", text: "Cadastrar Unidade"}],
        columns: [{
			 field: "nome", title: "Nome", width: '80%', attributes: {"class": "table-cell", style: "text-align: center;"} ,
        }, {
			command: [{name: "edit", text: {edit: "Editar",	update: "Atualizar", cancel: "Cancelar"} }, {name: "destroy", text: 'Deletar'}]
        }],
        editable: "inline",
		pageable: true,
        dataSource: {
			pageSize: 10,
            transport: {
                read: function(e) {
                    $http.get('http://localhost:3000/unidade/').
                    success(function(response) {
                        e.success(response);
                    }).
                    error(function(data, status, headers, config) {
						alert('Operação não foi efetuada. '+(data.error ? data.error : 'Erro desconhecido'));
                        console.log(status);
                    });
                },
                update: function(e) {
                    $http.put('http://localhost:3000/unidade/' + e.data.id, e.data).
                    success(function(response) {
                        e.success(response);
						$('#kendoGrid').data('kendoGrid').dataSource.read();
						$('#kendoGrid').data('kendoGrid').refresh();
                    }).
                    error(function(data, status, headers, config) {
                        alert('Erro. Tente Novamente.');
						alert('Operação de Atualização não foi efetuada. '+(data.error ? data.error : 'Erro desconhecido'));
                        console.log(status);
                    });
                },
                create: function(e) {
                    $http.post('http://localhost:3000/unidade/', e.data).
                    success(function(response) {
                        e.success(response);
						$('#kendoGrid').data('kendoGrid').dataSource.read();
						$('#kendoGrid').data('kendoGrid').refresh();
                    }).
                    error(function(data, status, headers, config) {
                        alert('Operação de Cadastro não foi efetuada. '+(data.error ? data.error : 'Erro desconhecido'));
                        console.log(status);
                    });
                },
                destroy: function(e) {
                    $http.delete('http://localhost:3000/unidade/' + e.data.id)
                        .success(function(data, status, headers, config) {
                            e.success(data);
                            $('#kendoGrid').data('kendoGrid').dataSource.read();
							$('#kendoGrid').data('kendoGrid').refresh();
                        }).
                    error(function(data, status, headers, config) {
                        alert('Operação de Exclusão não foi efetuada. '+(data.error ? data.error : 'Erro desconhecido'));
                        console.log(status);
                    });
                },
                parameterMap: function(options, operation) {
                    if (operation !== "read" && options.models) {
                        return {
                            models: kendo.stringify(options.models)
                        };
                    }
                }
            },
            schema: {
                data: function(data) {
                    return data;
                },
                total: function(data) {
                    return data.length;
                }, //!important for the CRUD operation!
                model: {
                    id: "id",
                    fields: {
                        nome: {
                            type: "string"
                        },
                    }
                }
            }
        }
    }
});