import { createSelector } from 'reselect'
import _ from 'lodash';

const filtersPredicate = {
  byTerm: (item, state) => item.title.includes(state.searchTerm),
  byTags: (item, state) => state.tags.some(tag => item.tags.includes(tag))
};
export const getLinkState = state => state.link;

export const applyFilters = createSelector(
  [ getLinkState ],
  state => {
    let found = state.items;

    if (state.filters.length) {
      found = _.filter(state.items, (item) => {
        const linkFound = state.filters.map(f => {
          return (filtersPredicate[f](item, state)) ? true : false;
        });
        return linkFound.includes(true);
      });
    }
    return {
      ...state,
      items: found
    };
  }
);
