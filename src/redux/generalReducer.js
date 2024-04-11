import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { generalService } from "../services/GeneralService";


export const sendToken = createAsyncThunk(
    "general/sendToken",
    async (payload) => {
      const response = await generalService.sendToken(payload);
      return response.data;
    }
  );

const generalSlice = createSlice( {
    name: 'general',
    initialState: {
        userLocation: {},
        bookmarkStatus: false,
        webToken: "",
        driverAccepted: false,
        pickedUp: false,
        droppedOff: false,
        hasAccount: true,
        isActivitySearchActive: false,
        activeTab: 0,
        appSetting: {},
        country: 'GH',
        countryCode: '+233',
        currency: 'GHS',
        countries: [],
        banks: [],
        mobileProviders: [],
        hasMobileMoney: ['GHS'],
        reanimate: false,
        toast: {
            type: 'success',
            message: 'Hello bro',
            show: false
        },
        show: false,
        toggle: false,
    },
    reducers: {
        setLocation : (state, payload) => {
          state.userLocation.lat = payload.lat;
          state.userLocation.lng = payload.lng;
        },
        setToken : (state, {payload}) => {
            state.webToken = payload;

          },
          setDriverAccepted : (state, {payload}) => {
            state.driverAccepted = payload;

          }
    }
});
export const { setToken , setDriverAccepted} = generalSlice.actions;
export default generalSlice.reducer;