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
      tags: [`Business ${i}`]
    };
    items.push(fakeItem);
  }
 
  return items;
}

const initialState = {
  items: generateItems(14),
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

function addLink(state, action) {
  const items = state.items;
  items.push(action.item);
  return {
    ...state,
    items
  };
}

export default createReducer(initialState, {
  [ACTIONS.DELETE_LINK]: deleteLink,
  [ACTIONS.ADD_LINK]: addLink,
});
