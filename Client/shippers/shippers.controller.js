restNorthwindApp.controller('shippersCtrl', function( $scope, restNorthwindService){

    $scope.headerText = 'Shippers';

    restNorthwindService.getShippers( function( retuenedData){

    }, function(res){/*on error*/});
});