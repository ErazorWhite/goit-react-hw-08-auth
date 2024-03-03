import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filter/selectors';
import Fuse from 'fuse.js';

const fuseOptions = {
  minMatchCharLength: 1,
  findAllMatches: true,
  threshold: 0.2,
  keys: ['name', 'number'],
};

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (!filter) return contacts;
    const fuse = new Fuse(contacts, fuseOptions);
    return fuse.search(filter).map(result => result.item);
  }
);
