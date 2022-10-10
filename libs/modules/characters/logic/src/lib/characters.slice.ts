import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchCharacter } from './characters.actions';
import { charactersAdapter } from './characters.adapter';
import { CHARACTERS_FEATURE_KEY } from './characters.constants';
import type { Character, CharactersState } from './characters.types';

export const initialCharactersState: CharactersState =
  charactersAdapter.getInitialState({
    loadingStatus: 'not loaded',
    error: null,
  });

export const charactersSlice = createSlice({
  name: CHARACTERS_FEATURE_KEY,
  initialState: initialCharactersState,
  reducers: {
    addCharacter: charactersAdapter.addOne,
    removeCharacter: charactersAdapter.removeOne,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacter.pending, (state: CharactersState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchCharacter.fulfilled,
        (state: CharactersState, action: PayloadAction<Character>) => {
          charactersAdapter.addOne(state, action.payload);
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(fetchCharacter.rejected, (state: CharactersState, action) => {
        state.loadingStatus = 'error';
        state.error = action.error.message || '';
      });
  },
});

export const charactersReducer = charactersSlice.reducer;

export const { addCharacter, removeCharacter } = charactersSlice.actions;
