import * as ACTIONS from 'constants/link';
import { createReducer } from 'reducers/createReducer';
import _ from 'lodash';
import uuidv4 from 'uuid/v4';

function findIndexById(items, action) {
  return _.findIndex(items, (item) => item.id == action.id);
}

const fakeItem = {
  id: uuidv4(),
  title: "McDonald’s Sheds Stores",
  url: "http://nyti.ms/2ldCq6V",
  tags: ['Business']
};

const initialState = {
  items: [fakeItem],
  item: null,
  tags: []
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

export default createReducer(initialState, {
  [ACTIONS.DELETE_LINK]: deleteLink,
});
