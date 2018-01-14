import * as ACTIONS from 'constants/link';
import { createReducer } from 'reducers/createReducer';
import _ from 'lodash';
import uuidv4 from 'uuid/v4';

const initialState = {
  items: [],
  item: null,
  tags: [],
  searchTerm: '',
  filters: []
};

function deleteLink(state, action) {
  const { items } = state;
  const index = _.findIndex(items, (item) => item.id == action.id);
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
  const index = _.findIndex(items, (i) => i.id == action.item.id);
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

function filterClear(state, action) {
  return {
    ...state,
    filters: state.filters.filter(filter => filter != action.filter),
    tags: []
  };
}

function clearSearchTerm(state, action) {
  return {
    ...state,
    filters: state.filters.filter(filter => filter != "byTerm"),
    searchTerm: ''
  };
}

function filterClearByOne(state, action) {
  const index = _.findIndex(f => state.tags.includes(action.keyword));
  state.tags.splice(index, 1);
  const filters = state.tags.length == 0
    ? state.filters.filter(filter => filter != 'byTags') : state.filters;
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

export default createReducer(initialState, {
  [ACTIONS.DELETE_LINK]: deleteLink,
  [ACTIONS.ADD_LINK]: addLink,
  [ACTIONS.EDIT_LINK]: editLink,
  [ACTIONS.FILTER_BY_TAG]: filterTag,
  [ACTIONS.RESET_FILTERS]: filterClear,
  [ACTIONS.RESET_SEARCH]: clearSearchTerm,
  [ACTIONS.RESET_ONE_FILTER]: filterClearByOne,
  [ACTIONS.FILTER_BY_SEARCH]: filterBySearch,
  [ACTIONS.CONCAT_FILTER]: concatFilter,
  [ACTIONS.SET_CURRENT_LINK]: setCurrentLink
});