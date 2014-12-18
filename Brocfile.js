var makeModules = require('broccoli-dist-es6-module');
var templateFilter = require('ember-cli-htmlbars');

var templates = templateFilter('lib', {module: true});
module.exports = makeModules(templates, {
  global: 'ic.autocomplete',
  packageName: 'ic-autocomplete',
  main: 'main',
  shim: {
    'ember': 'Ember'
  }
});
