app.controller('HomeController', function ($scope, $location) {
	$('.carousel').carousel({
	    interval: 5000 //changes the speed
	});

	$scope.prevCarouel = function(){
		$('.carousel').carousel('prev');
	}

	$scope.nextCarouel = function(){
		$('.carousel').carousel('next');
	}

	$scope.search = function(){
		$location.path('/search').search({'key': 'Sapa'});
	}

	$('.popular-des-lst .item').hover(function(){
        $(this).find('.view-all').removeClass('hidden', 2500);
    }, function(){
        $(this).find('.view-all').addClass('hidden', 2500);
    });
});