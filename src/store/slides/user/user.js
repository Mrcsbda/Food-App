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
  phone: null,
  paymentMethod: []
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;
