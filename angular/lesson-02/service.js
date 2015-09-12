(function() {
  /**
   * Service in AngularJS.
   *    Goals: Make all the tests pass.
   *
   * What are Services in AngularJS?
   *     Are object used for share and organize code across your app.
   *
   * NOTE: You must leave the expected unchanged!
   *
   * Need some helps? Go to angularjs.org:
   *   https://docs.angularjs.org/guide/services
   */

  'use strict';

  describe('service():', function() {
    it('is simple to create as giving a string name and a constructor function that is the service.', function() {
      var serviceName = 'MyServiceName';

      function MyConstructorService() {}

      angular.module('my-module', [])
        .service(serviceName, MyConstructorService); // call method service here to create your first service.


      function testService() {
        // Taking service from module 'my-module'
        angular.injector(['my-module']).get(serviceName); // don't change this.
      }

      expect(testService).not.toThrowError();
    });

    it('returns an instance of the constructor function.', function() {
      var serviceName = 'MyService';

      function MyService() {
        this.name = 'FirstName';
      }

      angular.module('my-module', [])
        .service(serviceName, MyService); // create service here.

      var assert = angular.injector(['my-module']).get(serviceName);

      expect(assert.name).toBe('FirstName');
    });

    xit('services are singleton.', function() {
      // Singleton means that it has the same reference every time it is injected.
      var serviceName = 'MyService';

      function MyService() {
        this.message = 'I am the first message'; // don't change this here.
      }

      angular.module('my-module', [])
        .service(serviceName, MyService); // create service here.


      var firstInstance = angular.injector(['my-module']).get(serviceName);
      var secondInstance = angular.injector(['my-module']).get(serviceName);

      var newMessage = 'Change the first message of the firstInstance with this message';
      firstInstance.message = newMessage// change message here.

      expect(secondInstance).toBe(newMessage);
    });
  });
})();
