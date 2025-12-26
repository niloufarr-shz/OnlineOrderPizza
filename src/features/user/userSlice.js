import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAddress } from '../../services/apiGeocoding';
function getPosition() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation not supported"));
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        resolve({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      },
      (err) => {
        reject(new Error("User denied location or error occurred"));
      }
    );
  });
}


export const fetchAddress = createAsyncThunk(
  'user/fetchAddress',
  async function () {
    try {
      // 1) گرفتن موقعیت واقعی کاربر
      const positionObj = await getPosition(); // {latitude, longitude}

      const position = {
        latitude: positionObj.latitude,  // <--- مستقیم
        longitude: positionObj.longitude,
      };

      // 2) گرفتن آدرس از API
      const addressObj = await getAddress(position);
      const address = addressObj.formatted_address || `${addressObj.state}, ${addressObj.city} `;

      // 3) بازگرداندن داده‌ها
      return { position, address };
    } catch (err) {
      console.error("fetchAddress error:", err);
      throw err; // این باعث می‌شه extraReducers به rejected بره
    }
  }
);


const initialState = {
  username: '',
  status: 'idle',
  position: {},
  address: '',
  error: '',
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAddress.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = 'idle';
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status ='error';
        state.error ="There was a problem getting yor addres . make sure to fill this field";
      }),
});

export const { updateName } = userSlice.actions;
export default userSlice.reducer;
