angular.module('benmantle', [])
    .controller('MainController', ['$scope', function($scope){

        //0 = home
        $scope.showing = [0];

        $scope.show = function(index) {
            if($scope.showing[index]){
                $scope.showing[index] = false;
                return;
            }

            $scope.showing.map(function(x) { x = 0; });
            $scope.showing[index] = true;
        };
}]);
