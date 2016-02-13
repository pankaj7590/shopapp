controllers
.controller('CategoryCtrl', function($scope, $stateParams,CategoryService,CartService) {
	$scope.category = CategoryService.getCategory();
	$scope.changeQuantity = function(qty,product){
		var cart = CartService.getCart();
		var cart_item = $filter('filter')(cart, {id:product.id})[0];
		if(!cart_item){
			cart_item['product']=product;
			cart_item['qty'] = qty;
			cart_item['total'] = qty * product.price;
		}else{
			cart_item['qty'] = qty;
			cart_item['total'] = qty * product.price;
		}
		cart.push(cart_item);
	}
});