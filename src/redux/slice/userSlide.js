import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  hoTenKH: '',
  email: '',
  access_token: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      const { hoTenKH, email, access_token } = action.payload
      state.hoTenKH = hoTenKH || email;
      state.email = email;
      state.access_token = access_token;
    },
  },
})

export const { updateUser } = userSlice.actions

export default userSlice.reducer