angular.module('screamAlarmClock.controllers', ['ionic', 'ngMaterial', 'ionic-material', 'ionic-timepicker'])

.controller('AppCtrl', function($scope, $ionicModal, $ionicPopup, $timeout, $location) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.user = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.loginModal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.loginModal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.loginModal.show();
  };

    $ionicModal.fromTemplateUrl('templates/signup.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.signupModal = modal;
    });

    $scope.openSignup = function() {
        $scope.signupModal.show();
    };

    $scope.closeSignup = function() {
        $scope.signupModal.hide();
    };

})

.controller('AuthController', function($scope, userService) {

    $scope.signup = function(user) {
        userService.signup(user);
    };

})

.controller('AlarmController', function($scope, $stateParams, userService) {
    $scope.$on('$ionicView.afterEnter', function() {
        userService.isConnected(function(user) {
            $scope.user = user;
        });
    });
})

.controller('addAlarmController', function($scope, $stateParams, ionicTimePicker, $http, userService) {
    /*var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyZDZjZjQ3Ny1kZmNmLTQwYWMtOTc4YS05MTNlMTJjNWVmOWIifQ.yUed-my6OYhXxvsFRbQglPliCf-V8-mUZ5kvE6xwRSU';
    var config = {
        headers: {
              'Authorization': 'Bearer ' + token,
              'Content-Type': 'application/json'
        }
    };*/

    $scope.data = {
        new_date: new Date(),
        alarm_name: 'Novo alarme'
    };


})