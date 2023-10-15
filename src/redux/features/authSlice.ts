'use client';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  isLoggedIn: boolean;
  token: string;
  refreshToken: string;
}

export interface TokensPayload {
  token: string;
  refreshToken: string;
}

const initialState: AuthState = {  
  isLoggedIn: false,
  token: '',
  refreshToken: ''
} 

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action:PayloadAction<AuthState>){
      state = action.payload;
    },
    refreshTokens(state, action:PayloadAction<TokensPayload>){
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
    }, 
    logout(state){
      state.isLoggedIn = false;
      state.token = '';
      state.refreshToken = '';
    }
  },
})

export const { login, logout, refreshTokens } = authSlice.actions
export const authReducer = authSlice.reducer;