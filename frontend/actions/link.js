import * as actions from 'constants/link';

export function deleteLink(id) {
  return {
    type: actions.DELETE_LINK,
    id
  };
}
