angular.module('screamAlarmClock.services', [])

.factory('userService', function($location) {

    var login = function(user) {
        // 
    };

    var signup = function(user) {

        firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function(error) {
            if(error) {
                var errorCode = error.code,
                    errorMessage = error.message;
            }

            return $location.path('#/app/alarm');
        });
    };

    var logout = function(user) {
        // 
    };

    var isConnected = function(callback) {
        console.log('starting....' );
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.dir(user);
                callback(user);
            } else {
                console.log('User isn\'t connected.' );
            }
        });
    }

    return {
        login: login,
        signup: signup,
        logout: logout,
        isConnected: isConnected
    };

});