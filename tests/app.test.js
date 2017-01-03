var expect = chai.expect;

describe('Ingresso Controller', function(){

  var scope, control;

  beforeEach(angular.mock.module('app'));
  beforeEach(inject(function($rootScope, $controller){
    scope = $rootScope.$new();
    control = $controller('IngressoController', {$scope: scope});
  }));

  describe('Calculo de descontos para entradas conforme o tipo dos ingressos', function(){

    describe('Calcula valor Segunda-Feira', function(){

      it('Crianças', function(){
        scope.calculaIngresso('Criancas', 1, 1);
        var valor = 4.95;
        expect(scope.valorFinal).to.equal(valor.toFixed(2));
      })

      it('Estudantes com carteirinha', function(){
        scope.calculaIngresso('Estudantes', 1, 1, true);
        var valor = 4;
        expect(scope.valorFinal).to.equal(valor.toFixed(2));
      })

      it('Estudantes sem carteirinha', function(){
        scope.calculaIngresso('Estudantes', 1, 1, false);
        var valor = 7.2;
        expect(scope.valorFinal).to.equal(valor.toFixed(2));
      })

      it('Idosos', function(){
        scope.calculaIngresso('Idosos', 1, 1);
        var valor = 5.4;
        expect(scope.valorFinal).to.equal(valor.toFixed(2));
      })

    })

    describe('Calcula valor Terça-Feira', function(){

      it('Crianças', function(){
        scope.calculaIngresso('Criancas', 1, 2);
        var valor = 4.67;
        expect(scope.valorFinal).to.equal(valor.toFixed(2));
      })

      it('Estudantes com carteirinha', function(){
        scope.calculaIngresso('Estudantes', 1, 2, true);
        var valor = 5.2;
        expect(scope.valorFinal).to.equal(valor.toFixed(2));
      })

      it('Estudantes sem carteirinha', function(){
        scope.calculaIngresso('Estudantes', 1, 2, false);
        var valor = 7.6;
        expect(scope.valorFinal).to.equal(valor.toFixed(2));
      })

      it('Idosos', function(){
        scope.calculaIngresso('Idosos', 1, 2);
        var valor = 5.1;
        expect(scope.valorFinal).to.equal(valor.toFixed(2));
      })

    })

    describe('Calcula valor Quarta-Feira', function(){

      it('Crianças', function(){
        scope.calculaIngresso('Criancas', 1, 3);
        var valor = 3.85;
        expect(scope.valorFinal).to.equal(valor.toFixed(2));
      })

      it('Estudantes', function(){
        scope.calculaIngresso('Estudantes', 1, 3);
        var valor = 4;
        expect(scope.valorFinal).to.equal(valor.toFixed(2));
      })
      it('Idosos', function(){
        scope.calculaIngresso('Idosos', 1, 3);
        var valor = 3.6;
        expect(scope.valorFinal).to.equal(valor.toFixed(2));
      })

    })

    describe('Calcula valor Quinta-Feira', function(){

      it('Crianças', function(){
        scope.calculaIngresso('Criancas', 1, 4);
        var valor = 6;
        expect(scope.valorFinal).to.equal(valor.toFixed(2));
      })

      it('Estudantes com carteirinha', function(){
        scope.calculaIngresso('Estudantes', 1, 4, true);
        var valor = 5.2;
        expect(scope.valorFinal).to.equal(valor.toFixed(2));
      })

      it('Estudantes sem carteirinha', function(){
        scope.calculaIngresso('Estudantes', 1, 4, false);
        var valor = 5.6;
        expect(scope.valorFinal).to.equal(valor.toFixed(2));
      })

      it('Idosos', function(){
        scope.calculaIngresso('Idosos', 1, 4);
        var valor = 4.2;
        expect(scope.valorFinal).to.equal(valor.toFixed(2));
      })

    })

    describe('Calcula valor Sexta-Feira', function(){

      it('Crianças', function(){
        scope.calculaIngresso('Criancas', 1, 5);
        var valor = 4.89;
        expect(scope.valorFinal).to.equal(valor.toFixed(2));
      })

      it('Estudantes com carteirinha', function(){
        scope.calculaIngresso('Estudantes', 1, 5, true);
        var valor = 7;
        expect(scope.valorFinal).to.equal(valor.toFixed(2));
      })

      it('Estudantes sem carteirinha', function(){
        scope.calculaIngresso('Estudantes', 1, 5, false);
        var valor = 8;
        expect(scope.valorFinal).to.equal(valor.toFixed(2));
      })

      it('Idosos', function(){
        scope.calculaIngresso('Idosos', 1, 5);
        var valor = 6;
        expect(scope.valorFinal).to.equal(valor.toFixed(2));
      })

    })

    describe('Calcula valor Sábado, Domingo, Feriados', function(){

      it('Crianças', function(){
        scope.calculaIngresso('Criancas', 1, 7);
        var valor = 5.5;
        expect(scope.valorFinal).to.equal(valor.toFixed(2));
      })

      it('Estudantes com carteirinha', function(){
        scope.calculaIngresso('Estudantes', 1, 6, true);
        var valor = 5.2;
        expect(scope.valorFinal).to.equal(valor.toFixed(2));
      })

      it('Estudantes sem carteirinha', function(){
        scope.calculaIngresso('Estudantes', 1, 6, false);
        var valor = 10;
        expect(scope.valorFinal).to.equal(valor.toFixed(2));
      })

      it('Idosos', function(){
        scope.calculaIngresso('Idosos', 1, 0);
        var valor = 5.7;
        expect(scope.valorFinal).to.equal(valor.toFixed(2));
      })

    })





  })
});
