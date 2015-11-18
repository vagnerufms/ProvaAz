angular.module('app').controller('addEmpresaController', function($scope, $http) {
	$scope.salvarEmpresa = function() {
		if($scope.empresa && $scope.empresa.id && $scope.empresa.id != ''){
			//alert('atualizar empresa');
			$http.put('http://localhost:3000/empresa/'+$scope.empresa.id, $scope.empresa)
				.success(function(response) {
					console.log(response);
					//Atualiza Grid
					$('#kendoGrid').data('kendoGrid').dataSource.read();
					$('#kendoGrid').data('kendoGrid').refresh();
					$('#myModal').modal('toggle');
					//alert('Operação de Cadastro efetuada.');
					delete $scope.empresa;
					return false;
				})
				.error(function(data) {
					alert('Operação de Cadastro não foi efetuada. Erro: '+data.error);
					console.log(data);
				});
		}else{
			//alert('cadastrar empresa');
			$http.post('http://localhost:3000/empresa', $scope.empresa)
				.success(function(response) {
					console.log(response);
					//Atualiza Grid
					$('#kendoGrid').data('kendoGrid').dataSource.read();
					$('#kendoGrid').data('kendoGrid').refresh();
					$('#myModal').modal('toggle');
					//alert('Operação de Atualização efetuada.');
					delete $scope.empresa;
					return false;
				})
				.error(function(data) {
					alert('Operação de Atualização não foi efetuada. Erro: '+data.error);
					console.log(data);
				});
		}		
	}
});

editarEmpresa = function editarEmpresa(e) {
	var dataItem = this.dataItem($(e.currentTarget).closest("tr"));
	
	$('#id').val(dataItem.id);
	$('#razaoSocial').val(dataItem.razaoSocial);
	$('#cnpj').val(dataItem.cnpj);
	$('#logradouro').val(dataItem.logradouro);
	$('#municipio').val(dataItem.municipio);
	$('#numero').val(dataItem.numero);
	$('#complemento').val(dataItem.complemento);
	$('#bairro').val(dataItem.bairro);
	$('#cep').val(dataItem.cep);
	$('#telefone').val(dataItem.telefone);
	$('#email').val(dataItem.email);
	$('#site').val(dataItem.site);
	$('#usuario').val(dataItem.usuario);
	$('#senha').val(dataItem.senha);

    $('input').trigger('input');	
	
	$('#myModal').modal('show');
	console.log(dataItem);
	e.preventDefault();
}

angular.module('app').controller('empresaGridController', function($scope, $http) {
    $scope.gridOptions = {	
        columns: [
		{ field: "cnpj", title: "CNPJ", width: 150, attributes: {"class": "table-cell", style: "text-align: center;"} },
		{ field: "razaoSocial", title: "Razão Social", width: 380 },
		{ field: "telefone", title: "Telefone", width: 130, attributes: {"class": "table-cell", style: "text-align: center;"} },
		{ field: "email", title: "E-mail", width: 260},
		{          
			command: [{ text: "Editar", click: editarEmpresa}, {name: "destroy", text: 'Deletar'}]
        }],
        editable: "popup",
		pageable: true,
        dataSource: {
			pageSize: 10,
            transport: {
                read: function(e) {
                    $http.get('http://localhost:3000/empresa/').
                    success(function(response) {
                        e.success(response);
                    }).
                    error(function(data, status, headers, config) {
						alert('Operação não foi efetuada. '+(data.error ? data.error : 'Erro desconhecido'));
                        console.log(status);
                    });
                },
				destroy: function(e) {
                    $http.delete('http://localhost:3000/empresa/' + e.data.id)
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