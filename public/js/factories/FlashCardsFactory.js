app.factory('FlashCardsFactory', function ($http) {
    return {
    	categories: ['MongoDB','Express','Angular','Node'],
        getFlashCards: function (category) {
            var config = {};
            if (category) {config.params = {category: category};}
            return $http.get('/cards',config)
                    .then(function(response){return response.data;});
        }
    };
});
