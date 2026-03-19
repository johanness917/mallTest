import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginPost } from "../api/memberApi";
import { setCookie } from "../util/CookieUtil";

const initState = {
  email: ""
}

export const loginPostAsync = createAsyncThunk('loginPostAsync', (param) => {
  return loginPost(param);
});

const loginSlice = createSlice({
  name: 'LoginSlice',
  initialState: initState,
  reducers: {
    login: (state, action) => {
      const data = action.payload;
      console.log('로그인 금고지기' + data.email + "" + data.pw);
      return { email: data.email }
    },
    logout: (state, action) => {
      return { ...initState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginPostAsync.fulfilled, (state, action) => {
        console.log("fulfilled: 완료" + action.payload.email)
        // 에러가 없다면
        if (!action.payload.error) {
          console.log('쿠키에 저장');
          setCookie("member", JSON.stringify(action.payload), 1)
        }
        return action.payload;
      })
      .addCase(loginPostAsync.pending, (state, actionn) => {
        console.log("pending: 처리중")
      })

      .addCase(loginPostAsync.rejected, (state, actionn) => {
        console.log("rejected: 오류")
      })

  }
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;