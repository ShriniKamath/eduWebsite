angular.module('componentExample').component('menuBar', {
  templateUrl: 'components/homePage/menuBar/template.html',
  controller: menuBarController,
	controllerAs:'menuBarCtrl'
});

function menuBarController($mdSidenav) {
  
  // $mdSidenav('left').watch(true);
}
