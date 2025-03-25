import { createSlice } from "@reduxjs/toolkit";

const atmSlice = createSlice({
  name: "atm",
  initialState: { saldo: 100 }, // Saldo inicial
  reducers: {
    depositar: (state, action) => {
      state.saldo += action.payload;
    },
    levantar: (state, action) => {
      state.saldo -= action.payload;
    },
  },
});

export const { depositar, levantar } = atmSlice.actions;
export default atmSlice.reducer;
