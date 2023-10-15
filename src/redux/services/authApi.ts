import { UserModel } from "@/definitions/models/UserModel";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

interface AuthResponse {
  user: UserModel;
  token: string;
}

interface LoginCredentials {
  username: string;
  password: string;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/auth" }),
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginCredentials>({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),

    refreshToken: builder.mutation<{ token: string }, string>({
      query: (token) => ({
        url: "/refresh",
        method: "POST",
        body: { token },
      }),
    }),
  }),
});

export const {} = authApi;