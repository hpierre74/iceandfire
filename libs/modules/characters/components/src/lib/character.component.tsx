import { useEffect } from 'react';
import { ListChildComponentProps } from 'react-window';

import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Skeleton from '@mui/material/Skeleton';
import PersonIcon from '@mui/icons-material/Person';

import {
  fetchCharacter,
  selectCharacterById,
} from '@iceandfire/characters-logic';
import { useAppDispatch, useAppSelector } from '@iceandfire/hooks';

export function CharacterElement(props: ListChildComponentProps<string[]>) {
  const { index, style, data } = props;
  const dispatch = useAppDispatch();
  const character = useAppSelector(selectCharacterById(data[index]));

  useEffect(() => {
    dispatch(fetchCharacter(data[index]));
  }, [dispatch, data, index]);

  const handleClick = () => {
    // to implement
  };

  return (
    <ListItem
      style={style}
      key={index}
      component="div"
      disablePadding
      onClick={handleClick}
    >
      <ListItemButton>
        <ListItemAvatar>
          <Avatar>
            <PersonIcon />
          </Avatar>
        </ListItemAvatar>
        {character ? (
          <ListItemText
            primary={character?.name}
            secondary={character?.aliases.join(', ')}
            secondaryTypographyProps={{ noWrap: true }}
          />
        ) : (
          <Skeleton variant="text" sx={{ fontSize: '2.5rem' }} width="100%" />
        )}
      </ListItemButton>
    </ListItem>
  );
}
