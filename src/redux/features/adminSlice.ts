import { createSlice, PayloadAction } from "@reduxjs/toolkit";

enum RoleEnum {
  ADMIN = "admin",
  ORGANIZATION = "organization",
  GUEST = "guest",
}

export interface AuthState {
  isLoggedIn: boolean;
  role: RoleEnum;
  token: string | null;
  refreshToken: string | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  role: RoleEnum.GUEST,
  token: null,
  refreshToken: null,
};

export interface LoginPayload extends AuthState {}

export const authterSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setRefreshToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    login(state, action: PayloadAction<LoginPayload>) {
      const { isLoggedIn, refreshToken, token, role } = action.payload;
      state = { isLoggedIn, refreshToken, token, role };
    },
    logout(state) {
      state = initialState;
    },
  },
});

export const { setToken, setRefreshToken, login, logout } =
  authterSlice.actions;

const authSliceReducer = authterSlice.reducer;

export { authSliceReducer };
