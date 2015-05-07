"use strict";
exports["default"] = Ember.HTMLBars.template((function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createTextNode("ic-autocomplete {\n  display: inline-block;\n  position: relative;\n}\n\nic-autocomplete-list {\n  display: none;\n  position: absolute;\n  z-index: 1;\n  border: 1px solid #aaa;\n  background: #fff;\n  top: 100%;\n  padding: 5px 0px;\n  max-height: 400px;\n  overflow: auto;\n  font-size: 12px;\n  width: 100%;\n  -moz-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\nic-autocomplete[is-open] ic-autocomplete-list {\n  display: block;\n}\n\nic-autocomplete-option {\n  display: block;\n  padding: 2px 16px;\n  cursor: default;\n}\n\nic-autocomplete-option:focus {\n  outline: 0;\n  color: white;\n  background: hsl(200, 50%, 50%);\n}\n\nic-autocomplete-option[selected]:before {\n  content: '✓';\n  position: absolute;\n  left: 4px;\n}\n\nic-autocomplete-toggle {\n  display: inline-block;\n  outline: none;\n  position: absolute;\n  top: 2px;\n  right: 6px;\n  font-size: 14px;\n  cursor: default;\n}\n\n.ic-autocomplete-input {\n  position: relative;\n  padding-right: 20px;\n  width: 100%;\n  -moz-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      return fragment;
    }
  };
}()));