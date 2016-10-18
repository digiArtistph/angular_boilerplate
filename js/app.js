angular.module('ngApp', [
   'ui.router',
   'main.controller',
   // 'contacts.controller'
])


.config(function($stateProvider, $urlRouterProvider) {
   $stateProvider

   .state('home', {
      url: '/home',
      templateUrl: 'templates/home.view.html',
      controller: 'MainCtrl',
      onExit: function($state) {
         console.log('On exit from home state: ' + $state.current.name);
      }
   })
   
   .state('contacts', {
      url: '/contacts',
      templateUrl: 'templates/contacts.html',
      controller: 'ContactsCtrl',
      resolve: {
         'data': function() {
            return {
               name: "Kenneth",
               age: 39,
               add: "Zone 2, Cugman"
            };
         }
      },
      onEnter: function(data) {
         console.log("On enter of the contacts state");
         console.log(data);
      }
   });

   $urlRouterProvider.otherwise('/home');
});
