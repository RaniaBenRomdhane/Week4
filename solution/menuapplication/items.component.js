(function(){
'use strict';

angular.module('data')
.component('items',{
  templateUrl:'/menuapplication/showItems.html',
  bindings:{
    items :'<'
}


});

})();
