import { VirtualizedList } from '@iceandfire/components';

import { CharacterElement } from './character.component';

type Props = {
  characters: string[];
};

export const CharactersList = ({ characters }: Props) => {
  return (
    <VirtualizedList
      height={400}
      maxWidth={360}
      itemCount={characters.length}
      itemData={characters}
      itemSize={72}
      renderRow={CharacterElement}
    />
  );
};
