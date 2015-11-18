angular.module('benmantle', ['writing'])
    .controller('MainController', ['$scope', function($scope){

        //0 = home
        $scope.showing = [true,true,true,true,true,true];

        $scope.all = function(){
            return $scope.showing.reduce(function(a,b) { return a && b; });
        };

        $scope.show = function(index) {
            if(!$scope.showing[index]){
                $scope.showing = [true,true,true,true,true,true];
            }
            else {
                $scope.showing[index] = 0;
            }
        };
}]);
