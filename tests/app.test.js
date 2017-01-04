var expect = chai.expect;

describe('Ingresso Controller', function(){

  var scope, control;

  beforeEach(angular.mock.module('app'));
  beforeEach(inject(function($rootScope, $controller){
    scope = $rootScope.$new();
    control = $controller('IngressoController', {$scope: scope});
  }));

  describe('Calculo de descontos para entradas conforme o tipo dos ingressos', function(){

    describe('Calcula valor do dia atual: ', function(){

      it('Crianças', function(){
        scope.calculaIngresso('Criancas', 1);
        var valor = 3.85;
        expect(scope.valorFinal).to.equal(valor.toFixed(2));
      })

      it('Estudantes com carteirinha', function(){
        scope.calculaIngresso('Estudantes', 1, true);
        var valor = 4;
        expect(scope.valorFinal).to.equal(valor.toFixed(2));
      })

      it('Estudantes sem carteirinha', function(){
        scope.calculaIngresso('Estudantes', 1, false);
        var valor = 4;
        expect(scope.valorFinal).to.equal(valor.toFixed(2));
      })

      it('Idosos', function(){
        scope.calculaIngresso('Idosos', 1);
        var valor = 3.6;
        expect(scope.valorFinal).to.equal(valor.toFixed(2));
      })

    })







  })
});
