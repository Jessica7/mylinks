import { createReducer } from 'reducers/createReducer';
import uuidv4 from 'uuid/v4';

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

export default createReducer(initialState, {});
