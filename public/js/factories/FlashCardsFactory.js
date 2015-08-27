app.factory('FlashCardsFactory', function ($http) {
    return {
        getFlashCards: function (category) {
            var config = {};
            if (category) {config.params = {category: category};}
            return $http.get('/cards',config)
                    .then(function(response){return response.data;});
        }
    };
});
