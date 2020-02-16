export interface IntroductionState {
  showDrawer: boolean,
}

export const OPEN_DRAWER = 'OPEN_DRAWER';
export const CLOSE_DRAWER = 'CLOSE_DRAWER';

interface OpenDrawerAction {
  type: typeof OPEN_DRAWER,
}

interface CloseDrawerAction {
  type: typeof CLOSE_DRAWER,
}

export type IntroductionActionTypes = OpenDrawerAction | CloseDrawerAction;
