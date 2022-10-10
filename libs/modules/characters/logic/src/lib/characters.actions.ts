import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectCharacterById } from './characters.selectors';

import type { AbstractCharactersState, Character } from './characters.types';

export const fetchCharacter = createAsyncThunk<
  Character,
  string,
  { state: AbstractCharactersState }
>(
  'characters/fetchByUrls',
  async (url, { getState }) => {
    const response = await fetch(url);

    return response.json();
  },
  {
    condition: (url, { getState }) => {
      const character = selectCharacterById(url)(getState());

      return !character;
    },
  }
);
