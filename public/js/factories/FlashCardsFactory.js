app.factory('FlashCardsFactory', function ($http) {
    // return { justTesting: 'testing!' };
    return {
        getFlashCards: function (category) {
            if (category){
                return $http.get('/cards?category='+category)
                    .then(function(response){return response.data});
            }
            return $http.get('/cards')
                .then(function(response){return response.data});
        }
    };
});
