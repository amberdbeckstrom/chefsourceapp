angular.module('website', ['ngAnimate', 'ngTouch'])
    .controller('MainCtrl', function ($scope) {
        $scope.slides = [
            {image: 'images/chickenkabobs.png', 
            description: 'A quick, and easy way to do your veggies and chicken on the grill--with no marinating!',
            title: "Chicken Kabobs",
            ingredient1: "4 chicken breasts",
            ingredient2: "1 large green pepper",
            ingredient3: "1 onion",
            ingredient4: "1 cup barbeque sauce",
            directions1: "1. Preheat grill for high heat.",
            directions2: "2. Thread the chicken, green bell pepper, onion, and red bell pepper pieces onto skewers alternately.",
            directions3: "3. Cook, turning and brushing with barbeque sauce frequently, for 15 minutes."

        },
            {image: 'images/meximeat.png',
            description: 'Delicous meatballs with a mexican twist.',
            title: "Mexican Meatballs",
            ingredient1: "1 Egg",
            ingredient2: "1/3 C bread crumbs",
            ingredient3: "1/4 C parmesan cheese",
            ingredient4: "1lb ground beef",
            directions1: "1. Preheat oven to 350. ",
            directions2: "2. Combine the egg, bread crumbs, parmesan and beef.",
            directions3: "3. Roll into balls and cook for 25mins."

        },
            {image: 'images/potatoskins.png', 
            description: 'Gouda cheese piled generously on baked potato skins along with pepperoni and green onions.',
            title: "Potato Skins",
            ingredient1: "5 Large potatoes",
            ingredient2: "4 C shredded cheese",
            ingredient3: "3 Green Onions",
            ingredient4: "1 Pound pepperoni sausage",
            directions1: "1. Preheat oven to 400 and bake the potatoes for 1 hour. ",
            directions2: "2. Cut baked potatoes in half. Scoop out potato, leaving a small layer on the skins. Cut halves into four strips. Place strips on a medium baking sheet.",
            directions3: "3. Sprinkle 1 cup Gouda cheese thinly over potato strips. Top with pepperoni, followed by green onions and remaining Gouda cheese.",
            directions4: "Bake topped potato strips in the 350 degrees F (175 degrees C) oven 30 minutes, or until cheese is bubbly and lightly browned.",
        },
            {image: 'images/sushi.png', 
            description: 'Tasty sushi kabobs loaded with veggies.',
            title: "Sushi Kabobs",
            ingredient1: "1 Medium onion",
            ingredient2: "1 Medium Red Pepper",
            ingredient3: "1 Medium Green Pepper",
            ingredient4: "2 Pounds Fish",
            directions1: "1. Cube vegetables and fish. ",
            directions2: "2. Place all items on the skewers"
        },
            {image: 'images/wings2.png', 
            description: 'yummy honey barbeque sauce is great on chicken wings, pork, or short ribs.',
            title: "BBQ Wings",
            ingredient1: "1/4 C Ketchup",
            ingredient2: "1 1/2 Pund Chicken Wings",
            ingredient3: "1/4 C Honey",
            ingredient4: "2 Tablespoons garlic powder",
            ingredient5: "Bacon",
            directions1: "1. In a large bowl mix the ingredients ",
            directions2: "2. Preheat the grill for low heat",
            directions3: "3. Grill the chicken wings on one side for 20 minutes, then turn and brush with honey. Continue grilling 25 minutes."
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

