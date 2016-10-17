var translationsEN = {
    username: 'User Name',
    writereview: 'Write Review',
    submit: 'Submit',
    BUTTON_LANG_FR: 'French',
    BUTTON_LANG_EN: 'English'
};

var translationsFR = {
    username: 'Nom dutilisateur',
    writereview: 'Ecrire une critique',
    submit: 'soumettre',
    BUTTON_LANG_FR: 'Français',
    BUTTON_LANG_EN: 'Anglais'
};

var app = angular.module('myApp', ['pascalprecht.translate', 'ui.bootstrap', 'ngCookies']);

app.config(['$translateProvider', function ($translateProvider) {
    // add translation tables
    $translateProvider.translations('en', translationsEN);
    $translateProvider.translations('fr', translationsFR);
    // $translateProvider.preferredLanguage('en');
    $translateProvider.useCookieStorage();

}]);

app.controller('Ctrl', ['$translate', '$scope', function ($translate, $scope) {

    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
    };
    $scope.pageSize = 2;
    $scope.currentPage = 1;
    $scope.reviews = [];
    for (item in localStorage) {

        var newItem = JSON.parse(JSON.stringify(localStorage[item]));
        $scope.reviews.push(newItem);
    }

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
