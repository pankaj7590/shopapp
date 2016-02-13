angular.module('shop.services', [])
.factory('$localstorage', ['$window', function($window) {
	return {
		set: function(key, value) {
			$window.localStorage[key] = value;
		},
		get: function(key, defaultValue) {
			return $window.localStorage[key] || defaultValue;
		},
		setObject: function(key, value) {
			$window.localStorage[key] = JSON.stringify(value);
		},
		getObject: function(key) {
			return JSON.parse($window.localStorage[key] || '{}');
		},
		getArray: function(key) {
			return JSON.parse($window.localStorage[key] || '[]');
		},
	}
}])
.service('CategoryService', function(){
   var _category;
   this.saveCategory = function(category){
	   this._category=category;
   }
   this.getCategory = function(){
	   return this._category;
   }
})
.service('CartService', function(){
	var _cart = [];
	return {
		saveCart : function(cart){
			_cart=cart;
		},
		getCart : function(){
			return _cart;
		}
	}
});