controllers
.controller('CategoriesCtrl', function($scope,$state,CategoryService) {
  $scope.categories = [
    { name: 'Party Essentials', id: 1, image: 'img/categories/party.jpg', info: 'Great Deals Inside', 
		subcategories:[
			{name:'Buy 3 Each Get 15% Discount',
			products:[
				{id:'1', name:'Kurkure Chilli Chatka',mrp:'20',rate:'19',qty:'1',wt:'105.5',wt_in:'gm',qty_in:'unit', image:'img/categories/party.jpg'},
				{id:'2', name:'Kurkure Green Chutney',mrp:'20',rate:'18.5',qty:'1',wt:'105.5',wt_in:'gm',qty_in:'unit', image:'img/categories/party.jpg'},
				{id:'3', name:'Kurkure Naughty Tomato',mrp:'20',rate:'19.5',qty:'1',wt:'105.5',wt_in:'gm',qty_in:'unit', image:'img/categories/party.jpg'},
				{id:'4', name:'Kurkure Masala Munch',mrp:'20',rate:'20',qty:'1',wt:'105.5',wt_in:'gm',qty_in:'unit', image:'img/categories/party.jpg'},
				{id:'5', name:'Kurkure Corn Cups',mrp:'10',rate:'9.5',qty:'1',wt:'35',wt_in:'gm',qty_in:'unit', image:'img/categories/party.jpg'}
			]},
			{name:'Juices & Fruit Drinks',
			products:[
				{id:'6', name:'Maaza',mrp:'60',rate:'60',qty:'1',wt:'1.2',wt_in:'ltr',qty_in:'unit',image:'img/categories/party.jpg'}
			]},
		]
	},
    { name: 'Good Morning Store', id: 2, image: 'img/categories/goodmorning.jpg', info: 'Get Upto 25% Off', 
		subcategories:[
			{name:'Buy Any 2 Get Rs.25 Off',
			products:[
				{id:'7', name:'Tropicana Apple Delight Juice',mrp:'90',rate:'85',qty:'1',wt:'1',wt_in:'ltr',qty_in:'unit', image:'img/categories/goodmorning.jpg'},
				{id:'8', name:'Tropicana Litchi Delight Juice',mrp:'90',rate:'84',qty:'1',wt:'1',wt_in:'ltr',qty_in:'unit', image:'img/categories/goodmorning.jpg'},
				{id:'9', name:'Tropicana Pomegranate Juice',mrp:'99',rate:'90',qty:'1',wt:'1',wt_in:'ltr',qty_in:'unit', image:'img/categories/goodmorning.jpg'},
				{id:'10', name:'Tropicana Cranberry Delight Juice',mrp:'110',rate:'105',qty:'1',wt:'1',wt_in:'ltr',qty_in:'unit', image:'img/categories/goodmorning.jpg'},
				{id:'11', name:'Tropicana Guava Delight Juice',mrp:'90',rate:'80',qty:'1',wt:'1',wt_in:'ltr',qty_in:'unit', image:'img/categories/goodmorning.jpg'}
			]},
			{id:'', name:'Great Savings',
			products:[
				{id:'12', name:'Quaker Oats',mrp:'120',rate:'120',qty:'1',wt:'500',wt_in:'ltr',qty_in:'unit',image:'img/categories/goodmorning.jpg',packing:'Jar'}
			]},
		]
	},
    { name: 'Fruits & Vegetables', id: 3, image: 'img/categories/fruits.jpg', info: 'Potato, Tomato, Apples', 
		subcategories:[
			{id:'', name:'Vegetables',
			products:[
				{id:'13', name:'Potato',mrp:'14',rate:'11',qty:'1',wt:'500',wt_in:'gm',qty_in:'unit', image:'img/categories/fruits.jpg'},
				{id:'14', name:'Tomato',mrp:'24',rate:'22',qty:'1',wt:'500',wt_in:'gm',qty_in:'unit', image:'img/categories/fruits.jpg'},
				{id:'15', name:'Onion-Red',mrp:'17',rate:'17',qty:'1',wt:'500',wt_in:'gm',qty_in:'unit', image:'img/categories/fruits.jpg'},
				{id:'16', name:'Baby Brinjal',mrp:'22',rate:'18',qty:'1',wt:'250',wt_in:'gm',qty_in:'unit', image:'img/categories/fruits.jpg'},
				{id:'17', name:'Baby Corn',mrp:'16',rate:'13',qty:'1',wt:'250',wt_in:'gm',qty_in:'unit', image:'img/categories/fruits.jpg'}
			]},
			{id:'', name:'Fruits',
			products:[
				{id:'18', name:'Apple-Fuji',mrp:'260',rate:'216',qty:'1',wt:'1',wt_in:'kg',qty_in:'unit',image:'img/categories/fruits.jpg'},
				{id:'19', name:'Apple-Green(Granny Smith)',mrp:'54',rate:'45',qty:'1',wt:'250',wt_in:'gm',qty_in:'unit',image:'img/categories/fruits.jpg'},
				{id:'20', name:'Apple-Kashmir Delicious',mrp:'40',rate:'33',qty:'1',wt:'250',wt_in:'gm',qty_in:'unit',image:'img/categories/fruits.jpg'},
				{id:'21', name:'Apple-Royal Gala Delicious',mrp:'190',rate:'150',qty:'1',wt:'1',wt_in:'kg',qty_in:'unit',image:'img/categories/fruits.jpg'},
				{id:'22', name:'Apple-Washington Delicious',mrp:'156',rate:'130',qty:'1',wt:'500',wt_in:'gm',qty_in:'unit',image:'img/categories/fruits.jpg'}
			]},
		]
	},
    { name: 'Drinks & Beverages', id: 4, image: 'img/categories/drinks.jpg', info: 'Tea, Cola, Juices', 
		subcategories:[
			{id:'', name:'Juices & Fruit Drinks',
			products:[
				{id:'23', name:'Tropicana Apple Delight Juice',mrp:'90',rate:'85',qty:'1',wt:'1',wt_in:'ltr',qty_in:'unit', image:'img/categories/drinks.jpg'},
				{id:'24', name:'Tropicana Litchi Delight Juice',mrp:'90',rate:'84',qty:'1',wt:'1',wt_in:'ltr',qty_in:'unit', image:'img/categories/drinks.jpg'},
				{id:'25', name:'Tropicana Pomegranate Juice',mrp:'99',rate:'90',qty:'1',wt:'1',wt_in:'ltr',qty_in:'unit', image:'img/categories/drinks.jpg'},
				{id:'26', name:'Tropicana Cranberry Delight Juice',mrp:'110',rate:'105',qty:'1',wt:'1',wt_in:'ltr',qty_in:'unit', image:'img/categories/drinks.jpg'},
				{id:'27', name:'Tropicana Guava Delight Juice',mrp:'90',rate:'80',qty:'1',wt:'1',wt_in:'ltr',qty_in:'unit', image:'img/categories/drinks.jpg'}
			]},
			{id:'', name:'Tea',
			products:[
				{id:'28', name:'Tetley Lemon & Honey Tea Bags',mrp:'160',rate:'157',qty:'1',wt:'30',wt_in:'bags',qty_in:'unit',image:'img/categories/drinks.jpg'},
				{id:'29', name:'Tata Premium Tea',mrp:'199',rate:'199',qty:'1',wt:'500',wt_in:'gm',qty_in:'unit',image:'img/categories/drinks.jpg'},
				{id:'30', name:'Tata Tea Agni',mrp:'232',rate:'232',qty:'1',wt:'1',wt_in:'kg',qty_in:'unit',image:'img/categories/drinks.jpg'},
				{id:'31', name:'Tetley Tea Bags',mrp:'450',rate:'450',qty:'1',wt:'100',wt_in:'bags',qty_in:'unit',image:'img/categories/drinks.jpg'},
				{id:'32', name:'Brooke Bond Natural Care Red Label',mrp:'185',rate:'185',qty:'1',wt:'500',wt_in:'gm',qty_in:'unit',image:'img/categories/drinks.jpg'}
			]},
		]
	},
  ];
  
  $scope.getCategoryDetails = function(category){
	  CategoryService.saveCategory(category);
	  $state.go('app.single');
  }
})