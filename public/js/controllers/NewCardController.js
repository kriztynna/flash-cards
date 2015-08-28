app.controller("NewCardController", function($scope, FlashCardsFactory, $rootScope){
	$scope.categories = FlashCardsFactory.categories;
	$scope.newCard = {
	    question: null,
	    category: null,
	    answers: [
	        { text: null, correct: false },
	        { text: null, correct: false },
	        { text: null, correct: false }
	    ]
	};
	$scope.newFlashCard = function (card){
		FlashCardsFactory.newFlashCard(card)
		.then(function(card) {
			$rootScope.$broadcast("insertCard", card);
		});
	};
});