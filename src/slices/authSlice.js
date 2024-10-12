import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const authAdapter = createEntityAdapter();

const user = JSON.parse(sessionStorage.getItem('user'));

const initialState = {
  loggedIn: Object.hasOwn(sessionStorage, "user"),
  username: user?.username || null,
  password: user?.password || null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state, { payload }) => {
      const { data } = payload;
      sessionStorage.setItem('user', JSON.stringify(data));
      state.loggedIn = true;
      state.username = data.username;
      state.password = data.password;
    },
    logOut: (state) => {
      sessionStorage.removeItem('user');
      state.loggedIn = false;
      state.token = null;
      state.username = null;
    },
  },
});

export const { logIn, logOut} = authSlice.actions;
export const selectors = authAdapter.getSelectors((state) => state.auth);
export default authSlice.reducer;