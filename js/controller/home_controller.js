app.controller('HomeController', ['$scope', function ($scope) {
	$('.carousel').carousel({
	    interval: 5000 //changes the speed
	});

	$('.popular-des-lst .item').hover(function(){
        $(this).find('.view-all').removeClass('hidden', 2500);
    }, function(){
        $(this).find('.view-all').addClass('hidden', 2500);
    });
}]);