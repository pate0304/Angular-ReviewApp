var translationsEN = {
    username: 'User Name',
    writereview: 'Write Review',
    submit: 'Submit',
    PARAGRAPH: 'Srsly!',
    PASSED_AS_TEXT: 'Hey there! I\'m passed as text value!',
    PASSED_AS_ATTRIBUTE: 'I\'m passed as attribute value, cool ha?',
    PASSED_AS_INTERPOLATION: 'Beginners! I\'m interpolated!',
    VARIABLE_REPLACEMENT: 'Hi {{name}}',
    BUTTON_LANG_FR: 'French',
    BUTTON_LANG_EN: 'English'
};

var translationsFR = {
    username: 'Nom dutilisateur',
    writereview: 'Ecrire une critique',
    submit: 'soumettre',
    HEADLINE: 'Was für ein großartiges Modul!',
    PARAGRAPH: 'Ernsthaft!',
    PASSED_AS_TEXT: 'Hey! Ich wurde als text übergeben!',
    PASSED_AS_ATTRIBUTE: 'Ich wurde als Attribut übergeben, cool oder?',
    PASSED_AS_INTERPOLATION: 'Anfänger! Ich bin interpoliert!',
    VARIABLE_REPLACEMENT: 'Hi {{name}}',
    BUTTON_LANG_FR: 'Français',
    BUTTON_LANG_EN: 'Anglais'
};

var app = angular.module('myApp', ['pascalprecht.translate', 'ui.bootstrap']);

app.config(['$translateProvider', function ($translateProvider) {
    // add translation tables
    $translateProvider.translations('en', translationsEN);
    $translateProvider.translations('fr', translationsFR);
    $translateProvider.preferredLanguage('en');

}]);

app.controller('Ctrl', ['$translate', '$scope', function ($translate, $scope) {

    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
    };
    $scope.pageSize = 2;
    $scope.currentPage = 1;
    $scope.reviews = [];
    localStorage.setItem("Pref", langKey);
    for (item in localStorage) {

        var newItem = localStorage[item];
        $scope.reviews.push(newItem);
    }

    //    for (item in localStorage) {
    //
    //        var newItem = JSON.parse(localStorage[item]);
    //        $scope.reviews.push(newItem);
    //    }
    //    console.log("Here");
    $scope.submit = function (uname, review) {

        $scope.show = true;
        $scope.time = new Date();

        var reviewsToPush = {
            uname: uname,
            review: review,
            time: $scope.time
        };

        localStorage.setItem(uname, JSON.stringify(reviewsToPush));

        $scope.reviews.push(reviewsToPush);
    }


            }]);

app.filter('start', function () {
    return function (input, start) {
        if (!input || !input.length) {
            return;
        }
        start = +start;
        return input.slice(start);
    }
});
