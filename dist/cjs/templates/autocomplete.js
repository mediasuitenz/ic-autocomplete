"use strict";
exports["default"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  data.buffer.push("▾");
  },"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("  ");
  stack1 = helpers._triageMustache.call(depth0, "yield", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", blockHelperMissing=helpers.blockHelperMissing, buffer = '';
  data.buffer.push(escapeExpression(((helpers['ic-autocomplete-input'] || (depth0 && depth0['ic-autocomplete-input']) || helperMissing).call(depth0, {"name":"ic-autocomplete-input","hash":{
    'placeholder': ("placeholder"),
    'aria-label': ("placeholder"),
    'value': ("inputValue")
  },"hashTypes":{'placeholder': "ID",'aria-label': "ID",'value': "ID"},"hashContexts":{'placeholder': depth0,'aria-label': depth0,'value': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n\n");
  stack1 = ((helper = (helper = helpers['ic-autocomplete-toggle'] || (depth0 != null ? depth0['ic-autocomplete-toggle'] : depth0)) != null ? helper : helperMissing),(options={"name":"ic-autocomplete-toggle","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":[],"contexts":[],"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers['ic-autocomplete-toggle']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = ((helper = (helper = helpers['ic-autocomplete-list'] || (depth0 != null ? depth0['ic-autocomplete-list'] : depth0)) != null ? helper : helperMissing),(options={"name":"ic-autocomplete-list","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(3, data),"inverse":this.noop,"types":[],"contexts":[],"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers['ic-autocomplete-list']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"useData":true})