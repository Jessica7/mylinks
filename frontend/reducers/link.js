import * as ACTIONS from 'constants/link';
import { createReducer } from 'reducers/createReducer';
import _ from 'lodash';
import uuidv4 from 'uuid/v4';

function findIndexById(items, action) {
  return _.findIndex(items, (item) => item.id == action.id);
}

function generateItems(limit) {
  let items = [];
  for (let i = 0; i <= limit; i++) {
    const fakeItem = {
      id: uuidv4(),
      title: `McDonald’s Sheds Stores ${i}`,
      url: "http://nyti.ms/2ldCq6V",
      tags: [`tag${i}`]
    };
    items.push(fakeItem);
  }

  return items;
}

const initialState = {
  items: generateItems(12),
  item: null,
  tags: [],
  searchTerm: '',
  filters: []
};

function deleteLink(state, action) {
  const { items } = state;
  const index = findIndexById(items, action);
  items.splice(index, 1);
  return {
    ...state,
    items
  };
}

function addLink(state, action) {
  const items = state.items;
  items.push(action.item);
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
    filters: state.filters.filter(filter => filter != 'byTags'),
    tags: []
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

export default createReducer(initialState, {
  [ACTIONS.DELETE_LINK]: deleteLink,
  [ACTIONS.ADD_LINK]: addLink,
  [ACTIONS.FILTER_BY_TAG]: filterTag,
  [ACTIONS.RESET_FILTERS]: filterClear,
  [ACTIONS.RESET_ONE_FILTER]: filterClearByOne,
  [ACTIONS.FILTER_BY_SEARCH]: filterBySearch,
  [ACTIONS.CONCAT_FILTER]: concatFilter,
});
