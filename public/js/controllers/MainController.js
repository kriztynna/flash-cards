app.controller('MainController', function ($scope, FlashCardsFactory, ScoreFactory) {
	$scope.categories = FlashCardsFactory.categories;
	$scope.currentCategory;
	$scope.ready;

	$scope.getCategoryCards = function (category) {
		$scope.currentCategory = category;
		$scope.ready=false;
		FlashCardsFactory.getFlashCards(category)
			.then(function (cards) {
				$scope.flashCards = cards;
				$scope.ready=true;
			})
			.then(null, function (error) {
				console.error("Error getting category cards.");
			});
	};

	$scope.getCategoryCards();

	// $scope.answerQuestion = function (answer, flashCard) {
	// 	if (!flashCard.answered) {
	// 		flashCard.answered = true;
	// 		flashCard.answeredCorrectly = answer.correct;
	// 		if (answer.correct) {
	// 			ScoreFactory.correct += 1;
	// 		} else {
	// 			ScoreFactory.incorrect += 1;
	// 		}
	// 	}
	// };
});