angular.module('website', ['ngAnimate', 'ngTouch'])
    .controller('MainCtrl', function ($scope) {
        $scope.slides = [
            {image: 'images/breakfastburrito.png', 
            description: 'A burrito ready to make your morning the best part of your day.',
            title: "Breakfast Burrito",
            ingredient1: "3 Eggs",
            ingredient2: "1/4 C Cheese",
            ingredient3: "1/2 C Spinach",
            ingredient4: "1/2 Pound of Ham",
            directions1: "1. Break the eggs and mix in a bowl. ",
            directions2: "2. Mix all ingredients in with the eggs.",
            directions3: "3. Remove from heat when eggs are fully cooked"

        },
            {image: 'images/frenchtoast.png',
            description: 'A great breakfast treat that will fill you.',
            title: "French Toast",
            ingredient1: "12 Eggs",
            ingredient2: "2 tsp vanilla ",
            ingredient3: "1 C Milk",
            ingredient4: "1 Loaf of bread",
            ingredient5: "Syrup",
            directions1: "1. Combine eggs, vanilla and milk in a bowl. ",
            directions2: "2. Dip the bread into the mixture until fully coverd.",
            directions3: "3. Then place on grill and cook till eggs on bread are cooked."

        },
            {image: 'images/granola.png', 
            description: 'A healthy treat for the whole family.',
            title: "Granola",
            ingredient1: "8 cups rolled oats",
            ingredient2: "1 1/2 cups oat bran",
            ingredient3: "1/2 cup brown sugar",
            ingredient4: "3/4 cup honey",
            ingredient5: "1 cup chopped almonds",
            directions1: "1. Preheat the oven to 325 degrees F (165 degrees C). ",
            directions2: "2. Combine the oats, wheat germ, oat bran, sunflower seeds, almonds, pecans, and walnuts in a large bowl.",
            directions3: "3. Bake in the preheated oven until crispy and toasted, about 20 minutes.."
        },
            {image: 'images/omlet.png', 
            description: 'Its like an egg taco!.',
            title: "Omlet",
            ingredient1: "4 Eggs",
            ingredient2: "1/4 C Mushrooms",
            ingredient3: "1/4 C Cheese",
            ingredient4: "1 Small Onion",
            ingredient5: "1/2 C Spinach",
            directions1: "1. Mix eggs in a bowl. ",
            directions2: "2. Combine eggs and ingredients and mix well.",
            directions3: "3. Cook till looks delicous."
        },
            {image: 'images/pancakes.png', 
            description: 'The most delicous stack of heaven.',
            title: "Pancakes",
            ingredient1: "2 C Flour",
            ingredient2: "3 Eggs",
            ingredient3: "1 Tbs Vanilla",
            ingredient4: "1 C Milk",
            directions1: "1. Mix eggs, vanilla, milk and flour in medium bowl.",
            directions2: "2. Pour in medium size cirlces on griddle",
            directions3: "3. When bubbles show flip to other side until done."
        },

        {image: 'images/waffles.png', 
            description: 'One of the fluffiest waffles recipes there are.',
            title: "Waffles",
            ingredient1: "6 egg whites",
            ingredient2: "1/2 C vegetable oil",
            ingredient3: "1 Tbs Vanilla",
            ingredient4: "2 C Milk",
            directions1: "1. Mix egg whites until stiff. ",
            directions2: "2. Then combine all ingredients into one bowl.",
            directions3: "3. Cook until golden brown."
        }
        ];

        $scope.direction = 'left';
        $scope.currentIndex = 5;

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

