angular.module('heroApp')
    .component('heroDetail', {
        templateUrl: 'heroDetail.html',
        controller: HeroDetailController,
        bindings: {
            hero: '<',
            onDelete: '&',
            onUpdate: '&',
        },
        transclude: true
    });
    
    
    function HeroDetailController($scope) {
        var ctrl = this;
        
        ctrl.delete = function() {
            ctrl.onDelete({hero:ctrl.hero});
        }
       
    }