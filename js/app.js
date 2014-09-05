angular.module('website', ['ngAnimate', 'ngTouch'])
    .controller('MainCtrl', function ($scope) {
        $scope.slides = [
            {image: 'images/taco2.png', 
            description: 'A tastey greek pizza with lots of sauce, red peppers, olives, basil, feta cheese, sun dried tomatoes.',
            title: "Greek Pizza",
            ingredient1: "1/2 C Red Onion",
            ingredient2: "1 Bag Cheese",
            ingredient3: "Crust",
            ingredient4: "4 Tbs BBQ Sauce",
            directions1: "1. Place the chicken in pan and let cook till chicken is no longer pink. Meanwhile, warm the tortillas in the oven or microwave until soft. ",
            directions2: "2. When chicken is fully cooked, transfer to serving bowl. Place lettuce, tomatoes, cheese, salsa, and sour cream in serving dishes. Each person can create their own wrap, using their preferred ingredients.",
            directions3: "3. Chicken short ribs pastrami kielbasa drumstick"

        },
            {image: 'images/burger.png',
            description: 'Nulla elementum orci libero, id varius eros imperdiet quis. Ut quis ante eros.',
            title: "Cheese",
            ingredient1: "2 Tbs Ranch",
            ingredient2: "1lb Hamburger",
            ingredient3: "Tomatos",
            ingredient4: "Lettuce",
            ingredient5: "Bacon",
            directions1: "1. Turducken salami filet mignon sausage leberkas pork belly tenderloin pork loin. Spare ribs filet mignon ribeye, doner jowl beef ribs flank meatball bresaola. ",
            directions2: "2. Cow bresaola fatback, chicken short ribs pastrami kielbasa drumstick",
            directions3: "3. Cow bresaola fatback, chicken short ribs."

        },
            {image: 'images/granola.png', 
            description: 'Morbi nulla nisi, aliquet sed tristique eu, imperdiet at erat. Sed feugiat nec velit a semper.',
            title: "BBQ Pizza",
            ingredient1: "2 Tbs Ranch",
            ingredient2: "1lb Hamburger",
            ingredient3: "Tomatos",
            ingredient4: "Lettuce",
            ingredient5: "Bacon",
            directions1: "1. Turducken salami filet mignon sausage leberkas pork belly tenderloin pork loin. Spare ribs filet mignon ribeye, doner jowl beef ribs flank meatball bresaola. ",
            directions2: "2. Cow bresaola fatback, chicken short ribs pastrami kielbasa drumstick",
            directions3: "3. Cow bresaola fatback, chicken short ribs."
        },
            {image: 'images/pie.png', 
            description: ' lobortis orci ac, varius magna. Duis posuere elit non turpis dignissim pharetra. Vivamus eget turpis ac.',
            title: "Turkey",
            ingredient1: "2 Tbs Ranch",
            ingredient2: "1lb Hamburger",
            ingredient3: "Tomatos",
            ingredient4: "Lettuce",
            ingredient5: "Bacon",
            directions1: "1. Turducken salami filet mignon sausage leberkas pork belly tenderloin pork loin. Spare ribs filet mignon ribeye, doner jowl beef ribs flank meatball bresaola. ",
            directions2: "2. Cow bresaola fatback, chicken short ribs pastrami kielbasa drumstick",
            directions3: "3. Cow bresaola fatback, chicken short ribs."
        },
            {image: 'images/pancakes.png', 
            description: 'In eu dui venenatis, semper turpis sit amet, porttitor turpis. Vivamus eu ornare turpis.',
            title: "Alfredo",
            ingredient1: "2 Tbs Ranch",
            ingredient2: "1lb Hamburger",
            ingredient3: "Tomatos",
            ingredient4: "Lettuce",
            ingredient5: "Bacon",
            directions1: "1. Turducken salami filet mignon sausage leberkas pork belly tenderloin pork loin. Spare ribs filet mignon ribeye, doner jowl beef ribs flank meatball bresaola. ",
            directions2: "2. Cow bresaola fatback, chicken short ribs pastrami kielbasa drumstick",
            directions3: "3. Cow bresaola fatback, chicken short ribs."
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

