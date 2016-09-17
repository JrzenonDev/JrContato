angular.module('starter.service', [])

.factory('TarefasService', function() {

    var chave = 'tarefasIonic';

    function getTarefas() {
         var tarefas = window.localStorage[chave];
         if(tarefas) {
            // Faz o parser do Json
            return angular.fromJson(tarefas);
         }
         return [];
    }

    function salvar(tarefas) {
        window.localStorage[chave] = angular.toJson(tarefas);
    }

    function obterProxId() {
        var idTarefa = window.localStorage['tarefaIonic'];
        if(idTarefa){
            idTarefa++;
        } else{
            idTarefa = 1;
        }
        window.localStorage['tarefaIonic'] = idTarefa;
        return idTarefa;
    }
    // Expoem as funcoes criadas
    return {
        all: function() {
            return getTarefas();
        },
        salvar: function(tarefas) {
            return salvar(tarefas);
        },
        obterProxId: function() {
            return obterProxId();
        }
    }

});