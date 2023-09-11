import { createSlice } from "@reduxjs/toolkit";

const name = JSON.parse(localStorage.getItem("name"));
const initialState = {
  isLoggedIn: false,
  name: name ? name : "",
  user: {
    name: "",
    email: "",
    phone: "",
<<<<<<< HEAD
    Bio: "",
    image: "",
=======
    bio: "",
    photo: "",
>>>>>>> 2cbd6d8a01c307383dd3d965eee33fb031a8a2ed
  },
  userID: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_LOGIN(state, action) {
      state.isLoggedIn = action.payload;
    },
    SET_NAME(state, action) {
      localStorage.setItem("name", JSON.stringify(action.payload));
      state.name = action.payload;
    },
    SET_USER(state, action) {
      const profile = action.payload;
      state.user.name = profile.name;
      state.user.email = profile.email;
      state.user.phone = profile.phone;
<<<<<<< HEAD
      state.user.Bio = profile.Bio;
      state.user.image = profile.image;
=======
      state.user.bio = profile.bio;
      state.user.photo = profile.photo;
>>>>>>> 2cbd6d8a01c307383dd3d965eee33fb031a8a2ed
    },
  },
});

export const { SET_LOGIN, SET_NAME, SET_USER } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectName = (state) => state.auth.name;
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
