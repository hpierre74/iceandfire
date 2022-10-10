import { EntityState } from '@reduxjs/toolkit';

import { CHARACTERS_FEATURE_KEY } from './characters.constants';

export type Character = {
  url: string;
  name: string;
  gender: string;
  culture: string;
  born: string;
  died: string;
  titles: string[];
  aliases: string[];
  father: string;
  mother: string;
  spouse: string;
  allegiances: string[];
  books: string[];
  povBooks: string[];
  tvSeries: string[];
  playedBy: string[];
};

export interface CharactersState extends EntityState<Character> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error: string | null;
}

export interface AbstractCharactersState {
  [key: string]: unknown;
  [CHARACTERS_FEATURE_KEY]: CharactersState;
}
