'use strict';

// var canv = document.getElementById('cardTable');
// var ctx = canv.getContext('2d');
// /* Controllers */
// function drawCard(i,x,y) {
//     ctx.drawImage(i,x,y);
// }

var pinochleApp = angular.module('pinochleApp', []);

pinochleApp.controller('pinochleCtrl', ['$scope','$http', function($scope,$http) {
	    $scope.trick_pos = [{'x':340,'y':210, 'rot': 0}, 
				{ 'x':240, 'y':100, 'rot':270 },
				{'x':340,'y':10, 'rot':180}, 
				{'x':440,'y':100, 'rot':90}];
	    $scope.trick = [{'val': 'A', 'suit': 'C'},
			    {'val': 'T', 'suit': 'D'},
			    {'val': 'K', 'suit': 'S'},
			    {'val': 'Q', 'suit': 'H'}];
	    // 3,4,5,6,7,8,9,10,11,12];
	    $http.get('data/hand.json').success(function(data) {
		    $scope.hand = data;
		});
	    $scope.hand_order = "suit";//"dDCHS";
	}]);
