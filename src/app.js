var app = angular.module('app', []);

app.controller('IngressoController', function($scope){
    $scope.diaDaSemana = new Date().getDay();

    var quantidadeDeIngressoConstante = 1;

    var criancas = 5.50;
    var estudantes = 8.00;
    var idosos = 6.00;

    var valorFinal = 0;


    $scope.calculaIngresso = function(tipoIngresso, carteira){
      switch ($scope.diaDaSemana) {
        case 1:
          switch (tipoIngresso) {
            case 'Criancas':
              valorFinal = (criancas * quantidadeDeIngressoConstante) - (criancas * 0.1);
              break;
            case 'Estudantes':
              if(carteira){
                valorFinal = (estudantes * quantidadeDeIngressoConstante) - (estudantes * 0.35);
              }else{
                valorFinal = (estudantes * quantidadeDeIngressoConstante) - (estudantes * 0.1);
              }
              break;
            case 'Idosos':
              valorFinal = (idosos * quantidadeDeIngressoConstante) - (idosos * 0.1);
              break;
          }
          break;

        case 2:
          switch (tipoIngresso) {
            case 'Criancas':
              valorFinal = (criancas * quantidadeDeIngressoConstante) - (criancas * 0.15);
              break;
              case 'Estudantes':
                if(carteira){
                  valorFinal = (estudantes * quantidadeDeIngressoConstante) - (estudantes * 0.35);
                }else{
                  valorFinal = (estudantes * quantidadeDeIngressoConstante) - (estudantes * 0.05);
                }
                break;
            case 'Idosos':
              valorFinal = (idosos * quantidadeDeIngressoConstante) - (idosos * 0.15);
              break;
          }
          break;

        case 3:
          switch (tipoIngresso) {
            case 'Criancas':
              valorFinal = (criancas * quantidadeDeIngressoConstante) - (criancas * 0.30);
              break;
              case 'Estudantes':
                valorFinal = (estudantes * quantidadeDeIngressoConstante) - (estudantes * 0.50);
                break;
            case 'Idosos':
              valorFinal = (idosos * quantidadeDeIngressoConstante) - (idosos * 0.40);
              break;
          }
          break;

        case 4:
          switch (tipoIngresso) {
            case 'Criancas':
              valorFinal = (criancas * quantidadeDeIngressoConstante);
              break;
              case 'Estudantes':
                if(carteira){
                  valorFinal = (estudantes * quantidadeDeIngressoConstante) - (estudantes * 0.35);
                }else{
                  valorFinal = (estudantes * quantidadeDeIngressoConstante) - (estudantes * 0.30);
                }
                break;
            case 'Idosos':
              valorFinal = (idosos * quantidadeDeIngressoConstante) - (idosos * 0.30);
              break;
          }
          break;

        case 5:
          switch (tipoIngresso) {
            case 'Criancas':
              valorFinal = (criancas * quantidadeDeIngressoConstante) - (criancas * 0.11);
              break;
              case 'Estudantes':
                if(carteira){
                  valorFinal = (estudantes * quantidadeDeIngressoConstante) - (estudantes * 0.35);
                }else{
                  valorFinal = (estudantes * quantidadeDeIngressoConstante);
                }
                break;
            case 'Idosos':
              valorFinal = (idosos * quantidadeDeIngressoConstante);
              break;
          }
          break;

          case 0:
          case 6:
          case 7:
            switch (tipoIngresso) {
              case 'Criancas':
                valorFinal = (criancas * quantidadeDeIngressoConstante);
                break;
                case 'Estudantes':
                  if(carteira){
                    valorFinal = (estudantes * quantidadeDeIngressoConstante) - (estudantes * 0.35);
                  }else{
                    valorFinal = (estudantes * quantidadeDeIngressoConstante);
                  }
                  break;
              case 'Idosos':
                valorFinal = (idosos * quantidadeDeIngressoConstante) - (idosos * 0.05);
                break;
            }
            break;
      }

          $scope.valorFinal = valorFinal.toFixed(2);
    }


});
