angular.module('benmantle', [])
    .controller('MainController', ['$scope', function($scope){
        
        //0 = home
        $scope.showing = [0];

        $scope.show = function(index) {
            $scope.showing.map(function(x) { x = 0; });
            $scope.showing[index] = true;
        };

        $scope.boom = function(index) {
            alert("cao");
        };

}]);
