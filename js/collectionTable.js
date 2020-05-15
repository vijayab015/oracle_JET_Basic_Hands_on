/**
 * Example of Require.js boostrap javascript
 */

/* global requirejs:false */

requirejs.config({
  // Path mappings for the logical module names
  paths: {
    knockout: 'libs/knockout/knockout-3.5.0',
    jquery: 'libs/jquery/jquery-3.4.1.min',
    'jqueryui-amd': 'libs/jquery/jqueryui-amd-1.12.1.min',
    ojs: 'libs/oj/v7.2.0/min',
    ojL10n: 'libs/oj/v7.2.0/ojL10n',
    ojtranslations: 'libs/oj/v7.2.0/resources',
    text: 'libs/require/text',
    promise: 'libs/es6-promise/es6-promise.min',
    hammerjs: 'libs/hammer/hammer-2.0.8.min',
    signals: 'libs/js-signals/signals.min',
    ojdnd: 'libs/dnd-polyfill/dnd-polyfill-1.0.0.min',
    css: 'libs/require-css/css.min',
    customElements: 'libs/webcomponents/custom-elements.min',
    proj4: 'libs/proj4js/dist/proj4',
    touchr: 'libs/touchr/touchr'
  },
  // Shim configurations for modules that do not expose AMD
  shim: {
    jquery: {
      exports: ['jQuery', '$']
    }
  },

  // This section configures the i18n plugin. It is merging the Oracle JET built-in translation
  // resources with a custom translation file.
  // Any resource file added, must be placed under a directory named "nls". You can use a path mapping or you can define
  // a path that is relative to the location of this main.js file.
  config: {
    ojL10n: {
      merge: {
        // 'ojtranslations/nls/ojtranslations': 'resources/nls/myTranslations'
      }
    },
    text: {
      // Override for the requirejs text plugin XHR call for loading text resources on CORS configured servers
      // eslint-disable-next-line no-unused-vars
      useXhr: function (url, protocol, hostname, port) {
        // Override function for determining if XHR should be used.
        // url: the URL being requested
        // protocol: protocol of page text.js is running on
        // hostname: hostname of page text.js is running on
        // port: port of page text.js is running on
        // Use protocol, hostname, and port to compare against the url being requested.
        // Return true or false. true means "use xhr", false means "fetch the .js version of this resource".
        return true;
      }
    }
  }
});


/**
 * A top-level require call executed by the Application.
 * Although 'ojcore' and 'knockout' would be loaded in any case (they are specified as dependencies
 * by the modules themselves), we are listing them explicitly to get the references to the 'oj' and 'ko'
 * objects in the callback.
 *
 * For a listing of which JET component modules are required for each component, see the specific component
 * demo pages in the JET cookbook.
 */
require(['ojs/ojcore', 'knockout', 'jquery', 
    'ojs/ojarraydataprovider','ojs/ojknockout',
    'ojs/ojinputtext','ojs/ojcheckboxset','ojs/ojradioset',
    "ojs/ojformlayout",'ojs/ojtable','ojs/ojpagingcontrol', 'ojs/ojpagingtabledatasource', 'ojs/ojarraytabledatasource'], // add additional JET component modules as needed
  // eslint-disable-next-line no-unused-vars
  function (oj, ko, $,ArrayDataProvider) { // this callback gets executed when all required modules are loaded
      // add any startup code that you want here
      
      function MyModel(){
         var deptArray = [{ DepartmentId: 3, DepartmentName: 'ADFPM 1001 neverending', LocationId: 200, ManagerId: 300 },
          { DepartmentId: 5, DepartmentName: 'BB', LocationId: 200, ManagerId: 300 },
          { DepartmentId: 10, DepartmentName: 'Administration', LocationId: 200, ManagerId: 300 },
          { DepartmentId: 20, DepartmentName: 'Marketing', LocationId: 200, ManagerId: 300 },
          { DepartmentId: 30, DepartmentName: 'Purchasing', LocationId: 200, ManagerId: 300 },
          { DepartmentId: 40, DepartmentName: 'Human Resources1', LocationId: 200, ManagerId: 300 },
          { DepartmentId: 50, DepartmentName: 'Administration2', LocationId: 200, ManagerId: 300 },
          { DepartmentId: 60, DepartmentName: 'Marketing3', LocationId: 200, ManagerId: 300 },
          { DepartmentId: 70, DepartmentName: 'Purchasing4', LocationId: 200, ManagerId: 300 },
          { DepartmentId: 80, DepartmentName: 'Human Resources5', LocationId: 200, ManagerId: 300 },
          { DepartmentId: 90, DepartmentName: 'Human Resources11', LocationId: 200, ManagerId: 300 },
          { DepartmentId: 100, DepartmentName: 'Administration12', LocationId: 200, ManagerId: 300 },
          { DepartmentId: 110, DepartmentName: 'Marketing13', LocationId: 200, ManagerId: 300 },
          { DepartmentId: 120, DepartmentName: 'Purchasing14', LocationId: 200, ManagerId: 300 },
          { DepartmentId: 130, DepartmentName: 'Human Resources15', LocationId: 200, ManagerId: 300 },
          { DepartmentId: 1001, DepartmentName: 'ADFPM 1001 neverending', LocationId: 200, ManagerId: 300 },
          { DepartmentId: 1009, DepartmentName: 'BB', LocationId: 200, ManagerId: 300 },
          { DepartmentId: 1011, DepartmentName: 'Administration', LocationId: 200, ManagerId: 300 },
          { DepartmentId: 2011, DepartmentName: 'Marketing', LocationId: 200, ManagerId: 300 },
          { DepartmentId: 3011, DepartmentName: 'Purchasing', LocationId: 200, ManagerId: 300 },
          { DepartmentId: 4011, DepartmentName: 'Human Resources1', LocationId: 200, ManagerId: 300 },
          { DepartmentId: 5011, DepartmentName: 'Administration2', LocationId: 200, ManagerId: 300 },
          { DepartmentId: 6011, DepartmentName: 'Marketing3', LocationId: 200, ManagerId: 300 },
          { DepartmentId: 7011, DepartmentName: 'Purchasing4', LocationId: 200, ManagerId: 300 },
          { DepartmentId: 8011, DepartmentName: 'Human Resources5', LocationId: 200, ManagerId: 300 },
          { DepartmentId: 9011, DepartmentName: 'Human Resources11', LocationId: 200, ManagerId: 300 },
          { DepartmentId: 10011, DepartmentName: 'Administration12', LocationId: 200, ManagerId: 300 },
          { DepartmentId: 11011, DepartmentName: 'Marketing13', LocationId: 200, ManagerId: 300 },
          { DepartmentId: 12011, DepartmentName: 'Purchasing14', LocationId: 200, ManagerId: 300 },
          { DepartmentId: 13011, DepartmentName: 'Human Resources15', LocationId: 200, ManagerId: 300 },
          { DepartmentId: 14011, DepartmentName: 'ADFPM 1001 neverending', LocationId: 200, ManagerId: 300 },
          { DepartmentId: 15011, DepartmentName: 'BB', LocationId: 200, ManagerId: 300 },
          { DepartmentId: 21022, DepartmentName: 'Administration', LocationId: 200, ManagerId: 300 },
          { DepartmentId: 22022, DepartmentName: 'Marketing', LocationId: 200, ManagerId: 300 },
          { DepartmentId: 23022, DepartmentName: 'Purchasing', LocationId: 200, ManagerId: 300 },
          { DepartmentId: 24022, DepartmentName: 'Human Resources1', LocationId: 200, ManagerId: 300 },
          { DepartmentId: 25022, DepartmentName: 'Administration2', LocationId: 200, ManagerId: 300 },
          { DepartmentId: 26022, DepartmentName: 'Marketing3', LocationId: 200, ManagerId: 300 },
          { DepartmentId: 27022, DepartmentName: 'Purchasing4', LocationId: 200, ManagerId: 300 },
          { DepartmentId: 28022, DepartmentName: 'Human Resources5', LocationId: 200, ManagerId: 300 },
          { DepartmentId: 29022, DepartmentName: 'Human Resources11', LocationId: 200, ManagerId: 300 },
          { DepartmentId: 310022, DepartmentName: 'Administration12', LocationId: 200, ManagerId: 300 },
          { DepartmentId: 311022, DepartmentName: 'Marketing13', LocationId: 200, ManagerId: 300 },
          { DepartmentId: 312022, DepartmentName: 'Purchasing14', LocationId: 200, ManagerId: 300 },
          { DepartmentId: 313022, DepartmentName: 'Human Resources15', LocationId: 200, ManagerId: 300 }];
      this.dataprovider = new ArrayDataProvider(deptArray, { keyAttributes: 'DepartmentId', implicitSort: [{ attribute: 'DepartmentId', direction: 'ascending' }] });
    this.provider=new oj.PagingTableDataSource(new oj.ArrayTableDataSource(deptArray));;
      }  
          
     
      var vm=new MyModel();
      $(document).ready(function()
      {
          ko.applyBindings(vm);
      })
  
      
  }
);

