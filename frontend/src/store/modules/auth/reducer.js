import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  admin: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/LOGIN_REQUEST':
        draft.loading = true;
        break;
      case '@auth/LOGIN_SUCCESS': {
        draft.token = action.payload.token;
        draft.admin = action.payload.user.admin;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
