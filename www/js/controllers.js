angular.module('starter.controllers', ['ionic'])

.controller('MyCtrl', function($scope, TarefasService) {

  $scope.data = {
    showDelete: false
  };

  document.addEventListener('deviceready', onDeviceReady, false); // Para SQLite

  // Cordova is ready
  function onDeviceReady() { // Para SQLite
      TarefasService.createDB();
      $scope.lerTarefas();
  } // Para SQLite


  //$scope.items = TarefasService.read();

  $scope.lerTarefas = function(){
      TarefasService.read().then(function(resultados){
          $scope.items = resultados;
      });
  }

  $scope.add = function() {
      var task = prompt('Entre com a tarefa');
      if (task){
        TarefasService.create(task).then(function(){
            $scope.lerTarefas();
        });
      }
  };

  $scope.edit = function(item) {
    var task = prompt('Entre com a tarefa');
    if (task){
      TarefasService.update(task, item.id).then(function(){
          $scope.lerTarefas();
      });
    }
  };

  $scope.moveItem = function(item, fromIndex, toIndex) {
    $scope.items.splice(fromIndex, 1);
    $scope.items.splice(toIndex, 0, item);
    //TarefasService.salvar($scope.items);
  };

  $scope.onItemDelete = function(item) {
    TarefasService.deleteTarefa(item.id).then(function(){
        $scope.lerTarefas();
    });
  };

});