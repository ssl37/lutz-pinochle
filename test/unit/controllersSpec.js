'use strict';

/* jasmine specs for controllers go here */
describe('pinochle controllers', function() {

	describe('pinochleCtrl', function(){
		var scope, ctrl, $httpBackend;
		beforeEach(module('pinochleApp'));
		beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
			    $httpBackend = _$httpBackend_;
			    $httpBackend.expectGET('data/hand.json').
				respond([{"val": "Q", "suit": "C"}, {"val": "J", "suit": "D"}, {"val": "J", "suit": "S"}, {"val": "J", "suit": "H"}]);
			    
			    scope = $rootScope.$new();
			    ctrl = $controller('pinochleCtrl', {$scope: scope});
			}));

		it('should create "trick" model with 4 cards', function() {
			expect(scope.trick.length).toBe(4);
		    });

		it('should create "hand" model with 4 cards', function() {
			expect(scope.hand).toBeUndefined();
			$httpBackend.flush();
			expect(scope.hand.length).toBe(4);
		    });

		it('should set the default value of hand_order model', function() {
			expect(scope.hand_order).toBe('suit');
		    });
	  
	    });
    });
