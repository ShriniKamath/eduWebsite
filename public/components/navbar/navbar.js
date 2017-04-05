angular.module('componentExample').component('naviBar', {
  templateUrl: 'components/navbar/navbar.html',
  controller: naviController,
	controllerAs:'naviCtrl'
});

function naviController($mdSidenav) {
  
  // $mdSidenav('left').watch(true);
}
