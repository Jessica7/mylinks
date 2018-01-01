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

export function clearFilter() {
  return {
    type: actions.RESET_FILTERS,
  };
}


export function filteringBySearch(term) {
  return {
    type: actions.FILTER_BY_SEARCH,
    term
  };
}
