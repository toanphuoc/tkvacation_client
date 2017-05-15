app.controller('DestinationController', ['$scope', function ($scope) {

 	$('.destinations .item').hover(function(){
 		$(this).find('.category-head-animate').removeClass('hidden', 2500);
 		$(this).find('.category-overlay').removeClass('hidden', 2500);
 	}, function(){
 		$(this).find('.category-head-animate').addClass('hidden', 2500);
 		$(this).find('.category-overlay').addClass('hidden', 2500);
 	});
}]);