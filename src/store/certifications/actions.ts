import {
  OPEN_MODAL,
  CLOSE_MODAL,
  CertificationsActionTypes
} from './types';

export function openModal(e: any): CertificationsActionTypes {
  console.log(typeof e);
  return {
    type: OPEN_MODAL,
    payload: {
      logoUrl: e.target.src,
      name: e.target.dataset.name,
    },
  };
}

export function closeModal(): CertificationsActionTypes {
  return {
    type: CLOSE_MODAL,
  };
}
