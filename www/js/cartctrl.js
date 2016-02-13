controllers
.controller('CartCtrl', function($scope, $stateParams, CartService, $localstorage, $rootScope) {
	/*$rootScope.user = $localstorage.getObject('shop-user');
	if(!$rootScope.user.id){
		$rootScope.goToUrl('app.login');
	}*/
	$scope.cart = CartService.getCart();
});