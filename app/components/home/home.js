/**
 * Created by JO3353 on 21-6-2017.
 */
angular.module('app').controller('homeController', homeController);


homeController.$inject = ['$scope'];

function homeController($scope) {
    let vm = this;

    vm.text = "hello world";

    return this;
}

