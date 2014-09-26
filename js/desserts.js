angular.module('website', ['ngAnimate', 'ngTouch'])
    .controller('MainCtrl', function ($scope) {
        $scope.slides = [
            {image: 'images/applepie.png', 
            description: 'A taste of heaven right in your mouth.',
            title: "Apple Pie",
            ingredient1: "5 Apples",
            ingredient2: "1 Tablespoon cinnamon",
            ingredient3: "3 C Sugar",
            ingredient4: "1 Pie Crust",
            directions1: "1. Peel Apples and mix with other ingredients.",
            directions2: "2. Place in crust and cook for 30 Mins."

        },
            {image: 'images/coffeecake.png',
            description: 'There is nothing better than a good coffee cake.',
            title: "Coffee Cake",
            ingredient1: "1 yellow cake mix",
            ingredient2: "4 eggs",
            ingredient3: "1 cup water",
            ingredient4: "1 cup vegetable oil",
            ingredient5: "1 cup brown sugar",
            directions1: "1. Preheat oven to 350. Grease a 9x13 inch baking pan. ",
            directions2: "2. In a medium bowl mix the ingredients together.",
            directions3: "3. Bake for 20 mins."

        },
            {image: 'images/cherrypie.png', 
            description: 'Morbi nulla nisi, aliquet sed tristique eu, imperdiet at erat. Sed feugiat nec velit a semper.',
            title: "Cherry Pie",
            ingredient1: "1 Pound Cherries",
            ingredient2: "1 Tablespoon butter",
            ingredient3: "3 C Sugar",
            ingredient4: "1 Pie Crust",
            directions1: "1. Prepare Cherries and mix with other ingredients.",
            directions2: "2. Place in crust and cook for 30 Mins."
            
        },
            {image: 'images/pie.png', 
            description: ' lobortis orci ac, varius magna. Duis posuere elit non turpis dignissim pharetra. Vivamus eget turpis ac.',
            title: "Pecan Pie",
            ingredient1: "5 Apples",
            ingredient2: "1 Tablespoon cinnamon",
            ingredient3: "3 C Sugar",
            ingredient4: "1 Pie Crust",
            ingredient4: "1 Pound Pecans",
            directions1: "1. Peel Apples and mix with other ingredients.",
            directions2: "2. Place in crust and cook for 30 Mins."
        },
            {image: 'images/fruittart.png', 
            description: 'Pack with fruit dessert.',
            title: "Fruit Tart",
            ingredient1: "2 C Strawberries",
            ingredient2: "1/2 C Whipping Cream",
            ingredient3: "1 Kiwi",
            ingredient4: "1 C Blueberries",
            ingredient5: "Gingersnap Crust",
            directions1: "1. Slice fruit. ",
            directions2: "2. Add to crust.",
            directions3: "3. Chill for several hours."
        },

        {image: 'images/gingersnap.png', 
            description: 'Icecream that is packed with flavor and melts in your mouth.',
            title: "Ginger Snap Icecream",
            ingredient1: "16oz Heavy Whipping Cream",
            ingredient2: "2 Cups Sugar",
            ingredient3: "5 Cups Whole Milk",
            ingredient4: "2 Tbs Ginger",
            ingredient5: "4 Eggs",
            directions1: "1. Mix all ingredients in a bowl.",
            directions2: "2. Put in icecream mixer for 1 hr"
           
        },

        {image: 'images/mintoreo.png', 
            description: 'Mint, oreos and a cupcakes. A match made in heaven.',
            title: "Mint Oreo Cupcake",
            ingredient1: "1 Package Chocolate Cake Mix",
            ingredient2: "8oz Cream Cheese",
            ingredient3: "1 Egg",
            ingredient4: "12 Oreos",
            ingredient5: "1/8 C Mint Leaves",
            directions1: "1. Prepare the cupcake batter and the frosting. ",
            directions2: "2. Bake for 19 - 20 mins.",
            directions3: "3. Add the frosting to the cupcakes."
        }
        ];

        $scope.direction = 'left';
        $scope.currentIndex = 6;

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

