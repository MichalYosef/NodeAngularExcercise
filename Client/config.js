restNorthwindApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        template : `Wellcome to REST Northwind app`
    })
    .when("/shippers", {
        templateUrl : "shippers/shippers.view.html",
        controller: 'shippersCtrl'

    })
});