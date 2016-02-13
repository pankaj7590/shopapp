// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('shop', ['ionic', 'shop.controllers','shop.services'])

.run(function($ionicPlatform,$rootScope,$state,CartService) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

	$rootScope.goToUrl = function(url) {
		$state.go(url);
		if(url == 'app.categories' || url == 'app.login') {
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
		}
	}
  
	$rootScope.openCart = function(){
		$rootScope.goToUrl('app.cart');
	}
	
	$rootScope.updateCart = function($event,category,product,op){
		var curElem = angular.element($event.currentTarget);
		var curVal = curElem.parent().find('input').val();
		var cart = CartService.getCart();
		var newCartCategory = [];
		if(cart.indexOf(category)<0){
			newCartCategory.push({category:category});
		}else{
			var index = cart.indexOf(category);
			newCartCategory.push({category:category});
		}
		if(op == 'inc'){
			var newVal = parseInt(curVal)+1;
		}else if(op == 'dec'){
			var newVal = parseInt(curVal)>0?parseInt(curVal)-1:0;
		}
		$(curElem).parent().find('input[type="text"]').val(newVal);
		var prodList = $('#product-list input[type="text"]');
		angular.forEach(prodList,function(v,k){
			var prod = v;
			var prodQty = parseInt(angular.element(prod).val());
			if(prodQty>0){
				var prodVal = JSON.parse(angular.element(prod).next().val());
				newCartCategory.push({'item':prodVal,'qty':prodQty});
			}
		});
		cart.push(newCartCategory);console.log(cart);
		CartService.saveCart(cart);
	}
	/*
	$rootScope.updateCart = function($event,product,op){
		var curElem = angular.element($event.currentTarget);
		var curVal = curElem.parent().find('input').val();
		var cart = [];
		if(op == 'inc'){
			var newVal = parseInt(curVal)+1;
		}else if(op == 'dec'){
			var newVal = parseInt(curVal)>0?parseInt(curVal)-1:0;
		}
		$(curElem).parent().find('input[type="text"]').val(newVal);
		var prodList = $('#product-list input[type="text"]');
		angular.forEach(prodList,function(v,k){
			var prod = v;
			var prodQty = parseInt(angular.element(prod).val());
			if(prodQty>0){
				var prodVal = JSON.parse(angular.element(prod).next().val());
				cart.push({'item':prodVal,'qty':prodQty});
			}
		});
		CartService.saveCart(cart);
	}*/
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.categories', {
      url: '/categories',
      views: {
        'menuContent': {
          templateUrl: 'templates/categories.html',
          controller: 'CategoriesCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/category',
    views: {
      'menuContent': {
        templateUrl: 'templates/category.html',
        controller: 'CategoryCtrl'
      }
    }
  })

  .state('app.cart', {
    url: '/cart',
    views: {
      'menuContent': {
        templateUrl: 'templates/cart.html',
        controller: 'CartCtrl'
      }
    }
  })

  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html',
        controller: 'AppCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/categories');
});
