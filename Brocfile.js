var makeModules = require('broccoli-dist-es6-module');
var templateFilter = require('ember-cli-htmlbars');
var emberTemplateCompiler = require('./bower_components/ember/ember-template-compiler');

var templates = templateFilter('lib',
  {
    module: true,
    isHTMLBars: true,
    templateCompiler: emberTemplateCompiler
  }
);
module.exports = makeModules(templates, {
  global: 'ic.autocomplete',
  packageName: 'ic-autocomplete',
  main: 'main',
  shim: {
    'ember': 'Ember'
  }
});
