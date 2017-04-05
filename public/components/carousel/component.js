angular.module('componentExample').component('carouselComp', {
	templateUrl: 'components/carousel/template.html',
	controller: carouselController,
	controllerAs:'carouselCtrl'
});

function carouselController() {
  
  // $mdSidenav('left').watch(true);
}
