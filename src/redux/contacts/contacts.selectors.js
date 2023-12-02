export const selectorContacts = state => state.contacts.contacts.items;

export const selectorError = state => state.contacts.contacts.error;

export const selectorIsLoading = state => state.contacts.contacts.isLoading;

export const selectorFilter = state => state.contacts.filter;
