angular.module('componentExample').component('homePage', {
	templateUrl: 'components/homePage/template.html',
	controller: homePageController,
	controllerAs:'homePageCtrl'
});

function homePageController() {
  
  // $mdSidenav('left').watch(true);
}
