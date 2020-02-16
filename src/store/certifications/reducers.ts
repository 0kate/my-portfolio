import {
  CertificationsState,
  CertificationsActionTypes,
  OPEN_MODAL,
  CLOSE_MODAL,
} from './types';

const initialState: CertificationsState = {
  showModal: false,
  clicked: {
    logoUrl: '',
    name: '',
  },
};

export function certificationsReducer(
  state: CertificationsState = initialState,
  action: CertificationsActionTypes
): CertificationsState {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        showModal: true,
        clicked: {
          logoUrl: action.payload.logoUrl,
          name: action.payload.name,
        },
      };
    case CLOSE_MODAL:
      return {
        ...state,
        showModal: false,
      };
    default:
      return state;
  }
}
