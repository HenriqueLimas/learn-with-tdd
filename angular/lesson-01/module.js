(function() {
  /**
   * Modules in AngularJS.
   *    Goals: Make all the tests pass.
   *
   * What is angular.module?
   *     is a global place for creating, registering and retrieving Angular modules. 
   *
   * What is Modules in angular?
   *     is a collection of services, directives, controllers, filters, and configuration information. 
   *
   * NOTE: You must leave the expected unchanged!
   *
   * Need some helps? Go to angularjs.org:
   *   https://docs.angularjs.org/api/ng/function/angular.module
   */

  'use strict';

  describe('angular.module():', function() {
    it('creates a new module is simple as passing a string with the name and an empty Array.', function() {
      function registeringModule() {
        var moduleName = 'MyFirstAngularModule';

        angular.module();
      }

      expect(registeringModule).not.toThrowError();
    });

    it('the Array is used to inject differents modules in one.', function() {
      function injectingModules() {
        var moduleA = 'a';
        var moduleB = 'b';
        var moduleC = 'c';

        angular.module(); // create module A here 
        angular.module(); // create module B here
        angular.module(); // create module C here

        var moduleAlphabet = 'alphabet';
        var modulesToInject = [moduleA, moduleB, moduleC];

        angular.module(); //Create alphabet here injecting the others modules.
      }

      expect(injectingModules).not.toThrowError();
    });

    it('can get a module already created just passing a string.', function() {
      var moduleName = 'myModule';

      angular.module(null, []); // first, create module here

      var myModuleReference = angular.module(); // get module reference here

      expect(myModuleReference).toEqual(jasmine.any(Object));
    });
  });
})();
