import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
  count: number;
};

const initialState: State = {
  count: 0,
};

export const { actions, reducer } = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementWithAmount(state, action: PayloadAction<{ amount: number }>) {
      state.count += action.payload.amount;
    },
  },
});
