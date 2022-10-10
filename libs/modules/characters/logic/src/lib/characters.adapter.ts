import { createEntityAdapter } from '@reduxjs/toolkit';

import type { Character } from './characters.types';

export const charactersAdapter = createEntityAdapter<Character>({
  selectId: (character) => character.url,
});
