function formConfig ($stateProvider, $urlRouterProvider) {

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
		});


	$urlRouterProvider.otherwise('/');

}

formConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export { formConfig };