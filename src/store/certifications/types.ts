export interface CertificationsState {
  showModal: boolean,
  clicked: {
    logoUrl: string,
    name: string,
  },
}

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

interface OpenModalAction {
  type: typeof OPEN_MODAL,
  payload: {
    logoUrl: string,
    name: string,
  },
}

interface CloseModalAction {
  type: typeof CLOSE_MODAL,
}

export type CertificationsActionTypes = OpenModalAction | CloseModalAction;
