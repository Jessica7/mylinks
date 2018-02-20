import * as ACTIONS from 'app/constants/link';
import { createReducer } from './createReducer';
import _ from 'lodash';

const initialState = {
  items: [],
  item: null,
  url: null,
  tags: [],
  searchTerm: '',
  filters: []
};

function deleteLink(state, action) {
  const { items } = state;
  const index = _.findIndex(items, (item) => item.id === action.id);
  items.splice(index, 1);
  return {
    ...state,
    items
  };
}

function addLink(state, action) {
  const { items } = state;
  items.push(action.item);
  return {
    ...state,
    items
  };
}

function editLink(state, action) {
  const { items } = state;
  const index = _.findIndex(items, (i) => i.id === action.item.id);
  items[index] = action.item;
  return {
    ...state,
    items
  };
}

function concatFilter(state, action) {
  let filters = state.filters;
  if (!filters.includes(action.filter))
    filters.push(action.filter);

  return {
    ...state,
    filters
  };
}

function filterTag(state, action) {
  let tags = state.tags;
  if (!tags.includes(action.tag))
    tags.push(action.tag);
  return {
    ...state,
    tags
  };
}

function filterClearAllTags(state, action) {
  return {
    ...state,
    filters: state.filters.filter(filter => filter !== action.filter),
    tags: []
  };
}

function clearSearchTerm(state, action) {
  return {
    ...state,
    filters: state.filters.filter(filter => filter !== "byTerm"),
    searchTerm: ''
  };
}

function filterClearByOneTag(state, action) {
  const index = _.findIndex(f => state.tags.includes(action.keyword));
  state.tags.splice(index, 1);
  const filters = state.tags.length === 0
    ? state.filters.filter(filter => filter !== 'byTags') : state.filters;
  return {
    ...state,
    filters,
    tags: state.tags
  };
}

function filterBySearch(state, action) {
  return {
    ...state,
    searchTerm: action.term
  };
}

function setCurrentLink(state, action) {
  return {
    ...state,
    item: action.item
  };
}

function changeProfileImage(state, action) {
  return {
    ...state,
    url: action.url
  };
}

export default createReducer(initialState, {
  [ACTIONS.DELETE_LINK]: deleteLink,
  [ACTIONS.ADD_LINK]: addLink,
  [ACTIONS.EDIT_LINK]: editLink,
  [ACTIONS.FILTER_BY_TAG]: filterTag,
  [ACTIONS.RESET_FILTER_TAG]: filterClearAllTags,
  [ACTIONS.RESET_SEARCH]: clearSearchTerm,
  [ACTIONS.RESET_FILTER_ONE_TAG]: filterClearByOneTag,
  [ACTIONS.FILTER_BY_SEARCH]: filterBySearch,
  [ACTIONS.CONCAT_FILTER]: concatFilter,
  [ACTIONS.SET_CURRENT_LINK]: setCurrentLink,
  [ACTIONS.CHANGE_PROFILE_IMAGE]: changeProfileImage
});
