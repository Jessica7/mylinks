import * as actions from 'app/constants/link';

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

export function clearSearchFilter() {
  return {
    type: actions.FILTER_BY_SEARCH
  };
}

export function clearFilterAllTags(filter) {
  return {
    type: actions.RESET_FILTER_TAG,
    filter
  };
}

export function clearFilterByOne(keyword) {
  return {
    type: actions.RESET_FILTER_ONE_TAG,
    keyword
  };
}

export function filteringBySearch(term) {
  return {
    type: actions.FILTER_BY_SEARCH,
    term
  };
}

export function changeProfileImage(url) {
  return {
    type: actions.CHANGE_PROFILE_IMAGE,
    url
  };
}
