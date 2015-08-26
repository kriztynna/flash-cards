app.controller('MainController', function ($scope, whateverName, FlashCardsFactory) {
	$scope.categories = ['MongoDB','Express','Angular','Node'];
	$scope.currentCategory;

	FlashCardsFactory.getFlashCards().then(function (flashCards) {
		$scope.flashCards = flashCards;
	}).then(null, function (error) {
		console.log("Error", error);
	});

	$scope.getCategoryCards = function (category) {
		$scope.currentCategory = category;
		FlashCardsFactory.getFlashCards(category)
			.then(function (cards) {
				$scope.flashCards = cards;
			})
			.then(null, function (error) {
				console.error("Error getting category cards.");
			});
	};

	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
		}
	};
});