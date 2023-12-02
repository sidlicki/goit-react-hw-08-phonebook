import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';

import { instance } from 'redux/auth/auth.reducer';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAllContacts',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get('/contacts');

      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkApi) => {
    try {
      const { data } = await instance.post('/contacts', newContact);

      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact ',
  async (contactId, thunkApi) => {
    try {
      const { data } = await instance.delete(`/contacts/${contactId}`);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// export const addToFavorite = createAsyncThunk(
//   'contacts/addToFavorite',
//   async (contactId, thunkApi) => {
//     try {
//       const { data } = await axios.put(
//         `https://6560d78d83aba11d99d199f6.mockapi.io/contacts/allContacts/${contactId}`,
//         { favorite: true }
//       );
//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

// export const removeFromFavorite = createAsyncThunk(
//   'contacts/removeFromFavorite',
//   async (contactId, thunkApi) => {
//     try {
//       const { data } = await axios.put(
//         `https://6560d78d83aba11d99d199f6.mockapi.io/contacts/allContacts/${contactId}`,
//         { favorite: false }
//       );
//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async (newContactInfo, thunkApi) => {
    try {
      const { data } = await instance.put(`/contacts/${newContactInfo.id}`, {
        name: newContactInfo.name,
        number: newContactInfo.number,
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filterContacts(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchAllContacts.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items = [...state.contacts.items, payload];
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== payload.id
        );
      })
      // praca z favorite
      // .addCase(addToFavorite.fulfilled, (state, { payload }) => {
      //   state.contacts.items = state.contacts.items.map(contact =>
      //     contact.id === payload.id ? { ...contact, favorite: true } : contact
      //   );
      // })
      // .addCase(removeFromFavorite.fulfilled, (state, { payload }) => {
      //   state.contacts.items = state.contacts.items.map(contact =>
      //     contact.id === payload.id ? { ...contact, favorite: false } : contact
      //   );
      // })
      .addCase(editContact.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.contacts.items = state.contacts.items.map(contact =>
          contact.id === payload.id
            ? { ...contact, name: payload.name, number: payload.number }
            : contact
        );
      })
      .addMatcher(
        isAnyOf(
          fetchAllContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        state => {
          state.contacts.isLoading = true;
          state.contacts.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchAllContacts.rejected,
          addContact.rejected,
          deleteContact.rejected,
          // addToFavorite.rejected,
          // removeFromFavorite.rejected,
          editContact.rejected
        ),
        (state, { payload }) => {
          state.contacts.isLoading = false;
          state.contacts.error = payload;
        }
      ),
});

export const { filterContacts } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
