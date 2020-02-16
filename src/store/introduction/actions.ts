import {
  OPEN_DRAWER,
  CLOSE_DRAWER,
  IntroductionActionTypes,
} from './types';

export function openDrawer(): IntroductionActionTypes {
  return {
    type: OPEN_DRAWER,
  };
}

export function closeDrawer(): IntroductionActionTypes {
  return {
    type: CLOSE_DRAWER,
  };
}
