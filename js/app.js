angular.module('website', ['ngAnimate', 'ngTouch'])
    .controller('MainCtrl', function ($scope) {
        $scope.slides = [
            {image: 'images/taco2.png', 
            description: 'A tastey greek pizza with lots of sauce, red peppers, olives, basil, feta cheese, sun dried tomatoes.',
            title: "Greek Pizza"
        },
            {image: 'images/burger.png',
            description: 'Nulla elementum orci libero, id varius eros imperdiet quis. Ut quis ante eros.',
            title: "Cheese"
        },
            {image: 'images/img02.jpg', 
            description: 'Morbi nulla nisi, aliquet sed tristique eu, imperdiet at erat. Sed feugiat nec velit a semper.',
            title: "BBQ Pizza"
        },
            {image: 'images/img03.jpg', 
            description: ' lobortis orci ac, varius magna. Duis posuere elit non turpis dignissim pharetra. Vivamus eget turpis ac.',
            title: "Turkey"
        },
            {image: 'images/img04.jpg', 
            description: 'In eu dui venenatis, semper turpis sit amet, porttitor turpis. Vivamus eu ornare turpis.',
            title: "Alfredo"
        }
        ];

        $scope.direction = 'left';
        $scope.currentIndex = 0;

        $scope.setCurrentSlideIndex = function (index) {
            $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
            $scope.currentIndex = index;
        };

        $scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex === index;
        };

        $scope.prevSlide = function () {
            $scope.direction = 'left';
            $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
        };

        $scope.nextSlide = function () {
            $scope.direction = 'right';
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
        };
    })
    .animation('.slide-animation', function () {
        return {
            beforeAddClass: function (element, className, done) {
                var scope = element.scope();

                if (className == 'ng-hide') {
                    var finishPoint = element.parent().width();
                    if(scope.direction !== 'right') {
                        finishPoint = -finishPoint;
                    }
                    TweenMax.to(element, 0.5, {left: finishPoint, onComplete: done });
                }
                else {
                    done();
                }
            },
            removeClass: function (element, className, done) {
                var scope = element.scope();

                if (className == 'ng-hide') {
                    element.removeClass('ng-hide');

                    var startPoint = element.parent().width();
                    if(scope.direction === 'right') {
                        startPoint = -startPoint;
                    }

                    TweenMax.fromTo(element, 0.5, { left: startPoint }, {left: 0, onComplete: done });
                }
                else {
                    done();
                }
            }
        };
    });

