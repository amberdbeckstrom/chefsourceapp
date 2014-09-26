angular.module('website', ['ngAnimate', 'ngTouch'])
    .controller('MainCtrl', function ($scope) {
        $scope.slides = [
            {image: 'images/applespinach.png', 
            description: 'Your health drink is here.',
            title: "Apple Spinach Smoothie",
            ingredient1: "2 C spinach",
            ingredient2: "3 Apples",
            ingredient3: "1 Orange",
            ingredient4: "1 C Water",
            directions1: "1. Peel orange. Cut and prepare Apples and Orange. ",
            directions2: "2. Add all ingredients to the blender.",
            directions3: "3. Blend until smoothie consistency"

        },
            {image: 'images/lemonade.png',
            description: 'Best drink for a nice hot day.',
            title: "Lemonade",
            ingredient1: "2 C Sugar",
            ingredient2: "5 Lemons",
            ingredient3: "10 C Cold water",
            directions1: "1. Juice the lemons",
            directions2: "2. Add sugar and water"

        },
            {image: 'images/mintmelon.png', 
            description: 'One of the most refreshing drinks.',
            title: "Mint Melon Smoothie",
            ingredient1: "1/4 C Mint",
            ingredient2: "2 Melons",
            ingredient3: "1 C Sugar",
            ingredient4: "12 C Water",
            directions1: "1. Prepare the melons for the blender. ",
            directions2: "2. Add the sugar, water and mint to the blender.",
            directions3: "3. Blend until its a smooth liquid."
        },
            {image: 'images/orangejuice.png', 
            description: ' lobortis orci ac, varius magna. Duis posuere elit non turpis dignissim pharetra. Vivamus eget turpis ac.',
            title: "Orange Juice",
            ingredient1: "2 C Sugar",
            ingredient2: "5 Oranges",
            ingredient3: "10 C Cold water",
            directions1: "1. Juice the oranges",
            directions2: "2. Add sugar and water"
        },
            {image: 'images/starwberriekiwi.png', 
            description: 'A fun mixture of fruit in a smoothie.',
            title: "Strawberry Kiwi Smoothie",
            ingredient1: "1 container of strawberries",
            ingredient2: "4 Kiwis",
            ingredient3: "6 C cold water",
            ingredient4: "3 C Sugar",
            directions1: "1. Peel kiwis and cut the tops off of the strawberries.",
            directions2: "2. Combine all of the ingredients in the blender.",
            directions3: "3. Blend until its a smooth mixture."
        }
        ];

        $scope.direction = 'left';
        $scope.currentIndex = 2;

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
                    TweenMax.to(element, 0, {left: finishPoint, onComplete: done });
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

                    TweenMax.fromTo(element, 0, { left: startPoint }, {left: 0, onComplete: done });
                }
                else {
                    done();
                }
            }
        };

});

