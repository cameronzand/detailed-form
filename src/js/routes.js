function routerConfig ($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('root', {
			abstract: true,
			templateUrl: 'templates/layout.tpl.html',
			controller: 'LayoutController as layout'
		})

		.state('root.home',{
			url: '/',
			templateUrl: 'templates/home.tpl.html',
			controller: 'HomeController as home'
		})

		.state('root.add',{
			url: '/add',
			templateUrl: 'templates/add.tpl.html',
			controller: 'AddController as add'
		})

		.state('root.single',{
			url: '/info/:id',
			templateUrl: 'templates/single.tpl.html',
			controller: 'SingleController as single'
		});


	$urlRouterProvider.otherwise('/');

}

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export { routerConfig };