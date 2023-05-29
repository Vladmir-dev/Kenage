import { createSlice } from "@reduxjs/toolkit";
import { fetchCurrencyRates } from "../actions";

const currencySlice = createSlice({
  name: "currency",
  initialState: {
    selectedCurrency: "UGX",
    rates: {},
  },
  reducers: {
    setCurrencyRates: (state, action) => {
      state.rates = action.payload;
    },
    setCurrency: (state, action) => {
        console.log("currency payload",action.payload)
        state.selectedCurrency = action.payload;
        console.log("===>",state.selectedCurrency)
      },
  },
});

export const fetchCurrencyRatesAsync = () => async (dispatch) => {
    try {
      const rates = await fetchCurrencyRates();
      dispatch(setCurrencyRates(rates.rates));
    } catch (error) {
      // Handle error
    }
  };
  
  export default currencySlice.reducer;

export const { setCurrencyRates,setCurrency } = currencySlice.actions;
