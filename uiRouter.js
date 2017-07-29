angular.module('app')
  // Gets rid of unwanted prefixes in routes
  .config(['$locationProvider', function($locationProvider){
    $locationProvider.hashPrefix('');
  }])

  .config(["$stateProvider", "$urlRouterProvider", 
    function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise("/gallery");

      var gallery = {
        name:'gallery',
        url: '/gallery',
        views: {
          '': {
            templateUrl: 'components/gallery/galleryView.html',
            controller: 'GalleryCtrl'
          },
          'images@gallery': { // You can find the reference to this inside the galleryView.html file
            templateUrl: 'components/gallery/partials/partial-gallery-images.html',
            controller: 'GalleryCtrl'
          },
          'sideMenu@gallery': {
            templateUrl: 'components/sideMenu/sideMenuView.html',
          },
          'newsletter@gallery': {
            templateUrl: 'components/newsletter/newsletterView.html'
          }
        }
      }

      var about = {
        name: 'about',
        url: '/about',
        templateUrl: 'components/about/aboutView.html',
        controller: 'AboutCtrl'
      }

      var giftCards = {
        name: 'giftCards',
        url: '/gift-cards',
        templateUrl: 'components/giftCards/giftCardsView.html',
        controller: 'GiftCardCtrl'
      }

      var contact = {
        name: 'contact',
        url: '/contact',
        views: {
          '':{
            templateUrl: 'components/contact/contactView.html',
            controller: 'ContactCtrl'
          },
          'contactForm@contact':{
            templateUrl: 'components/contact/partials/contactForm.html',
            controller: 'ContactCtrl'
          }
        },
      }

      var privacyPolicy = {
        name: 'privacyPolicy',
        url: '/privacyPolicy',
        templateUrl: 'components/privacyPolicy/privacyPolicyView.html',
        controller: 'PrivacyPolicyCtrl'
      }

      var auth = {
        name: 'auth',
        url: '/auth',
        params: {
          login: false,
          register: false
        },
        templateUrl: 'components/auth/authView.html',
        controller: 'AuthCtrl'
      }

      $stateProvider.state(gallery);
      $stateProvider.state(about);
      $stateProvider.state(giftCards);
      $stateProvider.state(contact);
      $stateProvider.state(privacyPolicy);
      $stateProvider.state(auth);
  }])