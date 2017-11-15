import _ from 'lodash';

export const isEmpty = (str) => {
  return str == null || str == undefined || str.trim() == '';
}

export const isUrl = (str) =>  {
  let matcher = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
  return matcher.test(str);
}

const messagesValidate = {
  required: 'Please, write',
  isUrl: 'Invalid Url',
  hasItems: 'Please, select the tags'
};

export default function Validate(fields, rules) {
  this.fields = fields;
  this.rules = rules;
  this.fieldKeys = _.keys(fields);
  this.errors = {};
  this.initialize();
}

Validate.prototype.initialize = function() {
  this.fieldKeys.map(key => {
    const rules = this.rules[key];
    this.getRuleAndField(key, rules);
  });
  return this.errors;
},

Validate.prototype.getRuleAndField = function(key, rules) {
  _.keys(rules).map((rule) => {
    const fieldRule = this.rules[key][rule];
    const fieldValue = this.fields[key];
    const validator = this[fieldRule];

    const errorMessage = validator(fieldValue);
    if (!this.errors[key]) {
      this.errors[key] = errorMessage;
    }
  });
},

Validate.prototype.getErrors = function() {
  return this.errors;
};

Validate.prototype.required = function(str) {
  return isEmpty(str) == false ? null : messagesValidate.required;
},

Validate.prototype.isUrl = function(str) {
  return isUrl(str) == true ? null : messagesValidate.isUrl
},

Validate.prototype.hasItems = function(items) {
  return items.length == 0 ? messagesValidate.isUrl : null;
}
