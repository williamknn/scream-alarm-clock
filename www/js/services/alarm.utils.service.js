angular.module('screamAlarmClock.utils', [])

.factory('round', function() {

    var number = function(number) {
        var roundNumber = function(number, precision) {
            var factor = Math.pow(10, precision);
            var tempNumber = number * factor;
            var roundedTempNumber = Math.round(tempNumber);
            return roundedTempNumber / factor;
        };

        return roundNumber(number, -1);
    };

    return {
        number: number
    };
})