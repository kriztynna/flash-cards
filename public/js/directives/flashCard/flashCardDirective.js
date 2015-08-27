app.directive('flashCardDirective', function(ScoreFactory){
	return {
		restrict: 'E',
		templateUrl: 'js/directives/flashCard/flashCardDirective.html',
		scope: { card: '=' },
		link: function(scope, element, arttribute){
			// answercard funtionality
			//card has .answerd, .correct, ...

			scope.answerQuestion = function(answer, card) {
				if (!card.answered) {
					card.answered = true;
					card.answeredCorrectly = answer.correct;
					if (answer.correct) {
						ScoreFactory.correct += 1;
					} else {
						ScoreFactory.incorrect += 1;
					}
				}
			}
		


		}
	}

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