import { createSelector } from '@reduxjs/toolkit';

import { charactersAdapter } from './characters.adapter';
import { CHARACTERS_FEATURE_KEY } from './characters.constants';
import type {
  AbstractCharactersState,
  CharactersState,
} from './characters.types';

const { selectAll, selectEntities, selectById } =
  charactersAdapter.getSelectors();

export const getCharactersState = (
  rootState: AbstractCharactersState
): CharactersState => rootState[CHARACTERS_FEATURE_KEY];

export const selectAllCharacters = createSelector(
  getCharactersState,
  selectAll
);

export const selectCharactersEntities = createSelector(
  getCharactersState,
  selectEntities
);

export const selectCharacterById = (id: string) =>
  createSelector(getCharactersState, (state) => selectById(state, id));

// ⛔ Do not use in react components -> changing reference ⛔
export const selectManyCharactersById = (ids: string[]) =>
  createSelector(getCharactersState, (state) => {
    return ids.map((id) => selectById(state, id));
  });
