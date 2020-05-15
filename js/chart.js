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
require(['ojs/ojcore', 'knockout', 'jquery', 'text!chartData.json','ojs/ojarraydataprovider','ojs/ojknockout', 
    'ojs/ojbutton',
    'ojs/ojtoolbar', 'ojs/ojgauge','ojs/ojfilepicker','ojs/ojavatar','ojs/ojchart'], // add additional JET component modules as needed
  // eslint-disable-next-line no-unused-vars
  function (oj, ko, $,data,ArrayDataProvider) { // this callback gets executed when all required modules are loaded
      // add any startup code that you want here
      
      function MyModel()
 {
           this.stackValue = ko.observable('off');
          this.orientationValue = ko.observable('vertical');
          this.dataProvider = new ArrayDataProvider(JSON.parse(data), {keyAttributes: 'id'});
          
          self.foodRating = ko.observable(0);
          self.serviceRating = ko.observable(1);
          self.avgRating = ko.computed(function(){
              let avg = (self.foodRating() + self.serviceRating()) / 2;
              return avg;
          });
      
      
      }
      
      
      var vm =new MyModel();
      
      $(document).ready(function()
      {
          ko.applyBindings(vm);
      })
      
  }
);
