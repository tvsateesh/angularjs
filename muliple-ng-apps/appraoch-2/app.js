var shoppingCartModule = angular.module("shoppingCart", []);
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

shoppingCartModule.directive("shopingCart", function() {
    return {
        template : "Shopping Cart Directive Example"
    };
});

var namesModule = angular.module("namesList", []);
namesModule.controller("NamesController",
                       function($scope) {
    $scope.names = [{
        username: "Nitin"
    }, {
        username: "Mukesh"
    }];
}
                      );

var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
});

var angularJsApp = angular.module("angularJsApp",[]);
angularJsApp.controller("MyController", function($scope) {
    $scope.myScope = "Init";
});

var colorApp = angular.module("colorApp",[]);
colorApp.controller("styleColorCtrl", function($scope){
    $scope.myCol = "lightblue";
});


angularJsApp.directive("angularJsApp", function() {
    return {
        template : "<h1>Sample directive</h1>"
    };
});

angular.bootstrap(document.getElementById("App2"), ['namesList']);
angular.bootstrap(document.getElementById("App3"), ['myApp']);
angular.bootstrap(document.getElementById("App4"), ['angularJsApp']);
angular.bootstrap(document.getElementById("App5"), ['colorApp']);
