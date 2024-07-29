import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
  id: null,
  address: null,
  avatar: null,
  birthday: null,
  email: null,
  name: null,
  loginMethod: null,
  name: null,
  phone: null
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      Object.assign(state, payload, { isLogged: true });
    },
    updateInfoUser (state, { payload }) {
      Object.assign(state, payload);
    },
    logout: (state) => {
      state.isLogged = false;
      state.id = null;
      state.address = null;
      state.avatar = null;
      state.birthday = null;
      state.email = null;
      state.name = null;
      state.loginMethod = null;
      state.name = null;
      state.phone = null;
      state.paymentMethod = [];
    },
  },
});

export const { login, logout, updateInfoUser} = userSlice.actions;
