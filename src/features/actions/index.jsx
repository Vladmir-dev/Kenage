// import { fetchProductStart, fetchProductSuccess, fetchProductFailure, loginStart, loginSuccess, loginFailure, signUpStart, signUpSuccess, signUpFailure } from "../reducers/cart";
// import {fetchProductStart, fetchProductFailure, fetchProductSuccess} from "../reducers/shop"
// import {loginStart, loginSuccess, loginFailure, signUpStart, signUpSuccess, signUpFailure} from "../reducers/authSlice"
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";
import axios from "axios";
import {domain, localdomain} from '../../common/helpers/helper'
import { kenageApi, kenageApiConfig } from "../../components/API/kenageAPI";
// import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom"

// const API_URL = ""
// const navigate = useNavigate()
// const dispatch = useDispatch()

const baseurl = localdomain

const Config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const API_URL = "https://api.exchangerate-api.com/v4/latest/UGX";

export const fetchCurrencyRates = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch currency rates:", error);
    throw error;
  }
};

export const otp = createAsyncThunk(
  "auth/otp",
  async (code, { getState, rejectWithValue, dispatch }) => {
    // console.log("login details ===>", code);
    console.log("code ===>", code)
    try {
      // console.log("login details ===>", code);
      // const response = await axios.post("https://kenagecollapi.onrender.com​/api/auth/login", loginDetails, Config)
      const response = await axios.post(
        `${baseurl}/auth/confirm/${code}`,
        Config
      );
      //  navigate("/")
      console.log("response =====>", response.data);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        // dispatch(setError("Incorrect credentials"));
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (loginDetails, { getState, rejectWithValue, dispatch }) => {
    console.log("login details ===>", loginDetails);
    // console.log("login details ===>", kenageApi)
    try {
      console.log("login details ===>", loginDetails);
      // const response = await axios.post("https://kenagecollapi.onrender.com​/api/auth/login", loginDetails, Config)
      const response = await axios.post(
        `${baseurl}/auth/login`,
        loginDetails,
        Config
      );
      //  navigate("/")
      console.log("response =====>", response.data);
      return response.data;
    } catch (error) {
      console.log("This is the error ===>", error.response.data.error.message);
      if (error.response && error.response.data.error.message) {
        // console.log("This is the error ===>", error);
        // dispatch(setError("Incorrect credentials"));
        return rejectWithValue(error.response.data.error.message);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const get_user = createAsyncThunk(
  "auth/get_user",
  async (token, { getState, rejectWithValue, dispatch }) => {
    console.log("token ===>", token);
    
    try {
      // console.log("login details ===>", token.token);
      // const response = await axios.post("https://kenagecollapi.onrender.com​/api/auth/login", loginDetails, Config)
      const response = await axios.get(
        `${baseurl}/auth/me`,
        {
          headers: { Authorization: `Bearer ${token.token}` },
        }
      );
      //  navigate("/")
      console.log("user data ==>", response.data);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data.error.message) {
        // dispatch(setError("Incorrect credentials"));
        return rejectWithValue(error.response.data.error.message);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const signup = createAsyncThunk(
  "auth/signup",
  async (signupDetails, { getState, rejectWithValue, dispatch }) => {
    // console.log("details ==>", signupDetails)
    try {
      console.log("details in try==>", signupDetails);
      const res = await axios.post(
        `${baseurl}/auth/register`,
        signupDetails,
        Config
      );
      // console.log("beginiing...");
      console.log("response =======>", res.data);
      // console.log("ending...");
      return res.data;
    } catch (error) {
      if (error.response && error.response.data.error.message) {
        // dispatch(setError("Incorrect credentials"));
        return rejectWithValue(error.response.data.error.message);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const logout = async () => {
  try {
    return "Logout succesfull";
  } catch (error) {
    if (error.response && error.response.data.message) {
      // dispatch(setError("Incorrect credentials"));
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.response.data);
    }
  }
};

export const fetch_flash_deals = createAsyncThunk(
  "products/fetch_flash_deals",
  async (token, { getState, rejectWithValue }) => {
    // console.log("The fetching data", token);

    try {
      const response = await axios.get(
        `${baseurl}/products/flash-deals`,
        Config
      );
      // console.log("response yeahh", response.data);

      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const top_categories = createAsyncThunk(
  "products/top_categories",
  async (token, { getState, rejectWithValue }) => {
    // console.log("The fetching data", token);

    try {
      const response = await axios.get(
        `${baseurl}/products/top-category`,
        Config
      );
      // console.log("Top Categories", response.data);

      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const new_arrivals = createAsyncThunk(
  "products/new_arrivals",
  async (token, { getState, rejectWithValue }) => {
    // console.log("The fetching data", token);

    try {
      const response = await axios.get(
        `${baseurl}/products/new-arrivals`,
        Config
      );
      // console.log("Top Categories", response.data);

      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const discounted = createAsyncThunk(
  "products/discounted",
  async (token, { getState, rejectWithValue }) => {
    // console.log("The fetching data", token);

    try {
      const response = await axios.get(
        `${baseurl}/products/discounted`,
        Config
      );
      // console.log("Top Categories", response.data);

      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const fetch_men_clothes = createAsyncThunk(
  "products/fetch_men_clothes",
  async (token, { getState, rejectWithValue }) => {
    // console.log("token", token);
    // let bodyContent = {
    //   api_key: token,
    // };
    try {
      const response = await axios.get(
        `${baseurl}/products/men-clothes`,
        Config
      );
      // console.log("response yeahh", response.data);

      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const fetch_men_shoes = createAsyncThunk(
  "products/fetch_men_shoes",
  async (token, { getState, rejectWithValue }) => {
    // console.log("token", token);
    // let bodyContent = {
    //   api_key: token,
    // };

    try {
      const response = await axios.get(
        `${baseurl}/products/men-shoes`,
        Config
      );
      // console.log("men shoes yeahh", response.data);

      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const fetch_women_clothes = createAsyncThunk(
  "products/fetch_women_clothes",
  async (token, { getState, rejectWithValue }) => {
    // console.log("token", token);

    try {
      const response = await axios.get(
        `${baseurl}/products/women-clothes`,
        Config
      );
      // console.log("men shoes yeahh", response.data);

      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const fetch_women_shoes = createAsyncThunk(
  "products/fetch_women_shoes",
  async (token, { getState, rejectWithValue }) => {
    // console.log("token", token);
    // let bodyContent = {
    //   api_key: token,
    // };
    try {
      const response = await axios.get(
        `${baseurl}/products/women-shoes`,
        Config
      );
      // console.log("men shoes yeahh", response.data);

      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const fetch_boys_clothes = createAsyncThunk(
  "products/fetch_boys_clothes",
  async (token, { getState, rejectWithValue }) => {
    // console.log("token", token);
    // let bodyContent = {
    //   api_key: token,
    // };
    try {
      const response = await axios.get(
        `${baseurl}/products/boy-clothes`,
        Config
      );
      // console.log("men shoes yeahh", response.data);

      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const fetch_boys_shoes = createAsyncThunk(
  "products/fetch_boys_shoes",
  async (token, { getState, rejectWithValue }) => {
    // console.log("token", token);

    try {
      const response = await axios.get(
        `${baseurl}/products/women-clothes`,
        Config
      );
      // console.log("men shoes yeahh", response.data);

      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const fetch_girls_clothes = createAsyncThunk(
  "products/fetch_girls_clothes",
  async (token, { getState, rejectWithValue }) => {
    // console.log("token", token);
    // let bodyContent = {
    //   api_key: token,
    // };
    try {
      const response = await axios.get(
        `${baseurl}/products/girl-clothes`,
        Config
      );
      // console.log("men shoes yeahh", response.data);

      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const fetch_girls_shoes = createAsyncThunk(
  "products/fetch_girls_shoes",
  async (token, { getState, rejectWithValue }) => {
    // console.log("token", token);
    // let bodyContent = {
    //   api_key: token,
    // };
    try {
      const response = await axios.get(
        `${baseurl}/products/girl-shoes`,
        Config
      );
      // console.log("men shoes yeahh", response.data);

      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const fetch_results = createAsyncThunk(
  "search/fetch_results",
  async (data, { getState, rejectWithValue }) => {
    // console.log("data ==>", data);
    try {
   

      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const add_to_cart = createAsyncThunk(
  "cart/add_to_cart",
  async (data, { getState, rejectWithValue }) => {
    try {
      // console.log("added product", data);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const decrease_qty = createAsyncThunk(
  "cart/decrease_qty",
  async (data, { getState, rejectWithValue }) => {
    // console.log("product ==>", product);
    try {
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const create_order = createAsyncThunk(
  "cart/create_order",
  async ({payload,token}, { getState, rejectWithValue }) => {
    console.log("product ==>", payload);
    try {
      console.log("The token",token);
      let response = await axios.post(
        `${baseurl}/orders`,
        JSON.stringify(payload),
        {
          headers: { Authorization: `Bearer ${token.token}` },
        }
      );
      const data = await response.data
      console.log("order response", data)
      return data;
    } catch (error) {
      console.log("order error ==>", error)
      // if (error.response && error.response.data.message) {
      //   return rejectWithValue(error.response.data.message);
      // } else {
      //   return rejectWithValue(error.response.data);
      // }
    }
  }
);

// export const set_currency = createAsyncThunk(
//   "products/set_currency",
//   async (currency, { getState, rejectWithValue }) => {
//     console.log("currency ==>", currency);
//     try {
//       // console.log(token);
//       // let response = await Axios.post(
//       //   "http://194.195.113.231:8000/api/v1/get-agent-swaps",
//       //   bodyContent,
//       //   headersList
//       // );
//       // let data = await response.data
//       // let data = response.data.swaps.sort((a, b) => {
//       //   new Date(a.date) - new Date(b.date);
//       // });
//       // console.log("my datattatat from men' s ==>", data);
//       return currency;
//     } catch (error) {
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.response.data);
//       }
//     }
//   }
// );
