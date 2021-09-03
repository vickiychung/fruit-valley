export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = fruit => {
  return {
    type: OPEN_MODAL,
    fruit
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};