import {
  createContext,
  SetStateAction,
  Dispatch,
  MutableRefObject
} from 'react';
import { UseToastOptions } from '@chakra-ui/react';
import { UseStateCallbackT } from './useStateCallback';

export const AppContext = createContext<{
  pathSegments: string[];
  setPathSegments: Dispatch<SetStateAction<string[]>>;

  directories: DirContentT[];
  setDirectories: UseStateCallbackT<DirContentT[]>;

  images: MutableRefObject<DirContentT[]>;
}>(null);

export const channels = {
  LIST_DIR: 'LIST_DIR',
  DELETE_FILE: 'DELETE_FILE',
  UNDO_DELETE: 'UNDO_DELETE',
  EMPTY_TRASH: 'EMPTY_TRASH'
} as const;

export const toastConfig: Partial<UseToastOptions> = {
  position: 'top',
  duration: 2_000,
  containerStyle: {
    fontSize: 'md'
  }
};

export const uploadButtonThemes = {
  blue: {
    bgColor: 'blue',
    bgHover: 'twitter'
  },
  green: {
    bgColor: 'green',
    bgHover: 'whatsapp'
  }
} as const;
