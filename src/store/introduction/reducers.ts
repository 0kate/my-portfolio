import {
  IntroductionState,
  IntroductionActionTypes,
  OPEN_DRAWER,
  CLOSE_DRAWER,
} from './types';

const initialState: IntroductionState = {
  showDrawer: false,
};

export function introductionReducer(
  state: IntroductionState = initialState,
  action: IntroductionActionTypes
): IntroductionState {
  switch (action.type) {
    case OPEN_DRAWER:
      return {
        showDrawer: true,
      };
    case CLOSE_DRAWER:
      return {
        showDrawer: false,
      };
    default:
      return state;
  }
}
