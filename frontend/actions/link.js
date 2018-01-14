import * as actions from 'constants/link';

export function deleteLink(id) {
  return {
    type: actions.DELETE_LINK,
    id
  };
}

export function addItem(item) {
  return {
    type: actions.ADD_LINK,
    item
  };
}

export function setCurrrentLink(item) {
  return {
    type: actions.SET_CURRENT_LINK,
    item
  };
}

export function editItem(item) {
  return {
    type: actions.EDIT_LINK,
    item
  };
}

export function concatFilter(filter) {
  return {
    type: actions.CONCAT_FILTER,
    filter
  };
}

export function filteringByTag(tag) {
  return {
    type: actions.FILTER_BY_TAG,
    tag
  };
}

export function clearSearchFilter(term) {
  return {
    type: actions.FILTER_BY_SEARCH,
    term
  };
}

export function clearFilter(filter) {
  return {
    type: actions.RESET_FILTERS,
    filter
  };
}

export function clearFilterByOne(keyword) {
  return {
    type: actions.RESET_ONE_FILTER,
    keyword
  };
}

export function filteringBySearch(term) {
  return {
    type: actions.FILTER_BY_SEARCH,
    term
  };
}
