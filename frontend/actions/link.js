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
