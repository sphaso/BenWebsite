angular.module('writing.controllers', [])
    .controller('WritingController', ['$scope', function($scope){

        $scope.poems = [0];

        $scope.clean = function(){
            for(var i = 0; i < $scope.poems.length; i++){
                $scope.poems[i] = false;
            }
        };

        $scope.expand = function(index){
            if($scope.poems[index]){
                $scope.clean();
                return;
            }

            $scope.clean();
            $scope.poems[index] = true;
        };

    }]);
