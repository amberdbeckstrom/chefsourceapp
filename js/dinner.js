angular.module('website', ['ngAnimate', 'ngTouch'])
    .controller('MainCtrl', function ($scope) {
        $scope.slides = [
            {image: 'images/lasagna.png', 
            description: 'Literally tastes like youre in Italy.',
            title: "Spinach Lasagna",
            ingredient1: "1 Pound sweet Italian sausage",
            ingredient2: "3/4 pound lean ground beef",
            ingredient3: "1/2 cup minced onion",
            ingredient4: "2 cloves garlic, crushed",
            ingredient5: "2 tablespoons white sugar",
            directions1: "1. Cook sausage, ground beef, onion, and garlic over medium heat until well browned.. ",
            directions2: "2. Stir in crushed tomatoes, tomato paste, tomato sauce, and water. Season with sugar, basil, fennel seeds.",
            directions3: "3. Bake in preheated oven for 25 minutes. Remove foil, and bake an additional 25 minutes."

        },
            {image: 'images/burger.png',
            description: 'Love me some ranch and burger.',
            title: "Ranch Burger",
            ingredient1: "2 Tbs Ranch",
            ingredient2: "1lb Hamburger",
            ingredient3: "Tomatos",
            ingredient4: "Lettuce",
            ingredient5: "Bacon",
            directions1: "1. Mix up hamburger and cook on grill.",
            directions2: "2. Prepare tomatoes, lettuce and bacon.",
            directions3: "3. Enjoy this delicous meal."

        },
            {image: 'images/steak2.png', 
            description: 'One of the food main groups...STEAK',
            title: "Steak",
            ingredient1: "1 Tbs Pepper",
            ingredient2: "1 Can Dr. Pepper",
            ingredient3: "1 Tsp Salt",
            directions1: "1. Marinate steak in Pepper, Salt and Dr. Pepper.",
            directions2: "2. Cool on grill till the pink in middle."
        },

            {image: 'images/wheat-noodles.png', 
            description: ' A healthy meal that gives you the veggies and grains you need.',
            title: "Veggie Noodles",
            ingredient1: "1 Medium Green Pepper",
            ingredient2: "1 Medium Red Pepper",
            ingredient3: "1 Medium Onion Pepper",
            ingredient4: "1 C Snap Peas",
            ingredient5: "Wheat Noodles",
            directions1: "1. Cook noodles in a pot. ",
            directions2: "2. Saute veggies.",
            directions3: "3. Combine noodles and veggies."
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

