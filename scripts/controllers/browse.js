'use strict';

app.controller('BrowseController', function($scope, $routeParams, toaster, Task, Auth) {

	$scope.searchTask = '';		
	$scope.tasks = Task.all;

});