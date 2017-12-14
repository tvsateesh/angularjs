var shoppingCartModule = angular.module("shoppingCart", ['namesList','myApp','angularJsApp','colorApp'])
shoppingCartModule.controller("ShoppingCartController",
                              function($scope) {
    $scope.items = [{
        product_name: "Product 1",
        price: 50
    }, {
        product_name: "Product 2",
        price: 20
    }, {
        product_name: "Product 3",
        price: 180
    }];
    $scope.remove = function(index) {
        $scope.items.splice(index, 1);
    }
}
                             );
var namesModule = angular.module("namesList", [])
namesModule.controller("NamesController",
                       function($scope) {
    $scope.names = [{
        username: "Nitin"
    }, {
        username: "Mukesh"
    }];
}
                      );

var app = angular.module('myApp', [])
app.controller('myCtrl', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
});

var angularJsApp = angular.module("angularJsApp",[])
angularJsApp.controller("MyController", function($scope) {
    $scope.myScope = "Init";
});

var colorApp = angular.module("colorApp",[])
colorApp.controller("styleColorCtrl", function($scope){
    $scope.myCol = "lightblue";
});