// Declare app level module which depends on views, and components
var appModule = angular.module('wpsClient', ['pascalprecht.translate',
    'wpsUserInterface', 'leaflet-directive']);

appModule
        .config([
            '$translateProvider',
            function ($translateProvider) {
                $translateProvider.useStaticFilesLoader({
                    prefix: 'i18n/',
                    suffix: '.json'
                });
                var suppLang = ['en', 'de'];
                $translateProvider.registerAvailableLanguageKeys(suppLang);
                $translateProvider.determinePreferredLanguage();
                if ($translateProvider.preferredLanguage() === ''
                        || suppLang.indexOf($translateProvider
                                .preferredLanguage()) === -1) {
                    $translateProvider.preferredLanguage('en');
                }
                $translateProvider.useSanitizeValueStrategy('escape');
            }])
        .run(function run($rootScope) {
            $rootScope.wpsServices = applicationProperties.wpsServices;
            $rootScope.serviceVersion = applicationProperties.serviceVersion;
            $rootScope.selectedServiceUrl = applicationProperties.selectedServiceUrl;
            $rootScope.skipWpsSetup = applicationProperties.skipWpsSetup;
            $rootScope.reuseGeoJSONOutput = applicationProperties.reuseGeoJSONOutput;
            $rootScope.defaultLanguage = applicationProperties.defaultLanguage;
            $rootScope.mapStartCenter = applicationProperties.mapStartCenter;
            $rootScope.mapStartZoom = applicationProperties.mapStartZoom;
        });