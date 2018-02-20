import _ from 'lodash';

export const isEmpty = (str) => {
  return str === null || str === undefined || str.trim() === '';
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

class Validate {
  constructor(fields, rules) {
    this.fields = fields;
    this.rules = rules;
    this.fieldKeys = _.keys(fields);
    this.errors = {};
    this.initialize();
  }

  initialize() {
    this.fieldKeys.map(key => {
      const rules = this.rules[key];
      this.getRuleAndField(key, rules);
    });
    return this.errors;
  }

  getRuleAndField (key, rules) {
    _.keys(rules).map((rule) => {
      const fieldRule = this.rules[key][rule];
      const fieldValue = this.fields[key];
      const validator = this[fieldRule];
  
      const errorMessage = validator(fieldValue);
      if (!this.errors[key]) {
        this.errors[key] = errorMessage;
      }
    });
  }
  
  getErrors () {
    return this.errors;
  }

  required(str) {
    return isEmpty(str) === false ? null : messagesValidate.required;
  }

  isUrl(str) {
    return isUrl(str) === true ? null : messagesValidate.isUrl
  }

  hasItems(items) {
    return items.length === 0 ? messagesValidate.isUrl : null;
  }
  
}

export default Validate;  