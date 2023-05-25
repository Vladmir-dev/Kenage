// import { fetchProductStart, fetchProductSuccess, fetchProductFailure, loginStart, loginSuccess, loginFailure, signUpStart, signUpSuccess, signUpFailure } from "../reducers/cart";
// import {fetchProductStart, fetchProductFailure, fetchProductSuccess} from "../reducers/shop"
// import {loginStart, loginSuccess, loginFailure, signUpStart, signUpSuccess, signUpFailure} from "../reducers/authSlice"
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";
import axios from 'axios';
import { kenageApi,kenageApiConfig } from "../../components/API/kenageAPI";
// import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom"

// const API_URL = ""
// const navigate = useNavigate()
// const dispatch = useDispatch()

const Config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const otp = createAsyncThunk(
  "auth/otp",
  async (code, { getState, rejectWithValue, dispatch }) => {
    console.log("login details ===>", code)
    // console.log("login details ===>", kenageApi)
    try {
      console.log("login details ===>", code)
      // const response = await axios.post("https://kenagecollapi.onrender.com​/api/auth/login", loginDetails, Config)
      const  {data}  = await axios.post(
        `https://kenagecollapi.onrender.com/api/auth/confirm/${code}`,
        Config
      );
      //  navigate("/")
      console.log("response =====>", data)
      return data;
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
    console.log("login details ===>", loginDetails)
    // console.log("login details ===>", kenageApi)
    try {
      console.log("login details ===>", loginDetails)
      // const response = await axios.post("https://kenagecollapi.onrender.com​/api/auth/login", loginDetails, Config)
      const  {data}  = await axios.post(
        "https://kenagecollapi.onrender.com​/api/auth/login",
        loginDetails,
        Config
      );
      //  navigate("/")
      console.log("response =====>", data.token)
      return data;
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

export const get_user = createAsyncThunk(
  "auth/gat_user",
  async (token, { getState, rejectWithValue, dispatch }) => {
    console.log("token ===>", token)
    // console.log("login details ===>", kenageApi)
    try {
      console.log("login details ===>", token.token)
      // const response = await axios.post("https://kenagecollapi.onrender.com​/api/auth/login", loginDetails, Config)
      const  {data}  = await axios.get(
        "https://kenagecollapi.onrender.com​/api/auth/me",
        {
          headers: { Authorization: `Bearer ${token.token}` }
        }
      );
      //  navigate("/")
      console.log("user data ==>", data)
      return data;
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

export const signup = createAsyncThunk(
    "auth/signup",
    async (signupDetails, { getState, rejectWithValue, dispatch }) => {
      // console.log("details ==>", signupDetails)
      try {
        console.log("details in try==>", signupDetails)
        const res  = await axios.post(
          "https://kenagecollapi.onrender.com​/api/auth/register",
          signupDetails,
          Config
        );
        console.log("beginiing...")
        console.log("response =======>", res.data)
        console.log("ending...")
        return res.data;
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

  
  export const logout = async () => {
    try {
      return "Logout succesfull"
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
      console.log("The fetching data",token)

      try {
      const response = await axios.get('https://kenagecollapi.onrender.com/api/products/flash-deals', Config)
      console.log("response yeahh", response.data)
  
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
      console.log("The fetching data",token)

      try {
      const response = await axios.get('https://kenagecollapi.onrender.com/api/products/top-category', Config)
      console.log("Top Categories", response.data)
  
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
      console.log("token",token)
      // let bodyContent = {
      //   api_key: token,
      // };
      try {
        const response = await axios.get('https://kenagecollapi.onrender.com/api/products/men-clothes', Config)
      console.log("response yeahh", response.data)

        // const data = [
        //   {
        //     id: 7,
        //     cover: "./images/shops/shops-1.png",
        //     name: "Mapple Earphones",
        //     price: "180",
        //     discount: "25",
        //   },
        //   {
        //     id: 8,
        //     cover: "./images/shops/shops-2.png",
        //     name: "Vivo android one",
        //     price: "120",
        //     discount: "10",
        //   },
        //   {
        //     id: 9,
        //     cover: "./images/shops/shops-3.png",
        //     name: "Sony Light",
        //     price: "20",
        //     discount: "50 ",
        //   },
        //   {
        //     id: 10,
        //     cover: "./images/shops/shops-4.png",
        //     name: "Iphone",
        //     price: "999",
        //     discount: "10 ",
        //   },
        //   {
        //     id: 11,
        //     cover: "./images/shops/shops-5.png",
        //     name: "Ceats wireless earphone",
        //     price: "80",
        //     discount: "20 ",
        //   },
        //   {
        //     id: 12,
        //     cover: "./images/shops/shops-7.png",
        //     name: "Redimi Phone",
        //     price: "400",
        //     discount: "20 ",
        //   },
        //   {
        //     id: 13,
        //     cover: "./images/shops/shops-8.png",
        //     name: "Xeats Bluetooth earphones",
        //     price: "60",
        //     discount: "5 ",
        //   },
        //   {
        //     id: 14,
        //     cover: "./images/shops/shops-9.png",
        //     name: "Airpod",
        //     price: "120",
        //     discount: "10",
        //   },
        //   {
        //     id: 15,
        //     cover: "./images/shops/shops-10.png",
        //     name: "Silver Cap",
        //     price: "5",
        //     discount: "2",
        //   },
        // ]
        // console.log(token);
        // let response = await Axios.post(
        //   "http://194.195.113.231:8000/api/v1/get-agent-swaps",
        //   bodyContent,
        //   headersList
        // );
        // let data = await response.data
        // let data = response.data.swaps.sort((a, b) => {
        //   new Date(a.date) - new Date(b.date);
        // });
        // console.log("my datattatat from men' s ==>", data);
  
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
      console.log("token",token)
      // let bodyContent = {
      //   api_key: token,
      // };
      const response = await axios.get('https://kenagecollapi.onrender.com/api/products/women-clothes', Config)
      console.log("men shoes yeahh", response.data)
      try {
        
        const data = [
          {
            id: 1,
            discount: 50,
            cover: "./images/flash/flash-1.png",
            name: "Shoes",
            price: 100,
          },
          {
            id: 2,
            discount: 40,
            cover: "./images/flash/flash-2.png",
            name: "Watch",
            price: 20,
          },
          {
            id: 3,
            discount: 40,
            cover: "./images/flash/flash-3.png",
            name: "Smart Mobile Black",
            price: 200,
          },
          {
            id: 4,
            discount: 40,
            cover: "./images/flash/flash-4.png",
            name: "Smart Watch Black",
            price: 50,
          },
          {
            id: 5,
            discount: 50,
            cover: "./images/flash/flash-1.png",
            name: "Shoes",
            price: 100,
          },
          {
            id: 6,
            discount: 50,
            cover: "./images/flash/flash-3.png",
            name: "Shoes",
            price: 100,
          },
        ]
        // console.log(token);
        // let response = await Axios.post(
        //   "http://194.195.113.231:8000/api/v1/get-agent-swaps",
        //   bodyContent,
        //   headersList
        // );
        // let data = await response.data
        // let data = response.data.swaps.sort((a, b) => {
        //   new Date(a.date) - new Date(b.date);
        // });
        // console.log("my datattatat from men' s ==>", data);
  
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
      console.log("token",token)
      // let bodyContent = {
      //   api_key: token,
      // };
      try {
        const response = await axios.get('https://kenagecollapi.onrender.com/api/products/men-clothes', Config)
      console.log("men shoes yeahh", response.data)

        const data = [
          {
            id: 7,
            cover: "./images/shops/shops-1.png",
            name: "Mapple Earphones",
            price: "180",
            discount: "25",
          },
          {
            id: 8,
            cover: "./images/shops/shops-2.png",
            name: "Vivo android one",
            price: "120",
            discount: "10",
          },
          {
            id: 9,
            cover: "./images/shops/shops-3.png",
            name: "Sony Light",
            price: "20",
            discount: "50 ",
          },
          {
            id: 10,
            cover: "./images/shops/shops-4.png",
            name: "Iphone",
            price: "999",
            discount: "10 ",
          },
          {
            id: 11,
            cover: "./images/shops/shops-5.png",
            name: "Ceats wireless earphone",
            price: "80",
            discount: "20 ",
          },
          {
            id: 12,
            cover: "./images/shops/shops-7.png",
            name: "Redimi Phone",
            price: "400",
            discount: "20 ",
          },
          {
            id: 13,
            cover: "./images/shops/shops-8.png",
            name: "Xeats Bluetooth earphones",
            price: "60",
            discount: "5 ",
          },
          {
            id: 14,
            cover: "./images/shops/shops-9.png",
            name: "Airpod",
            price: "120",
            discount: "10",
          },
          {
            id: 15,
            cover: "./images/shops/shops-10.png",
            name: "Silver Cap",
            price: "5",
            discount: "2",
          },
        ]
        // console.log(token);
        // let response = await Axios.post(
        //   "http://194.195.113.231:8000/api/v1/get-agent-swaps",
        //   bodyContent,
        //   headersList
        // );
        // let data = await response.data
        // let data = response.data.swaps.sort((a, b) => {
        //   new Date(a.date) - new Date(b.date);
        // });
        // console.log("my datattatat from men' s ==>", data);
  
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
      console.log("token",token)
      // let bodyContent = {
      //   api_key: token,
      // };
      try {
        const response = await axios.get('https://kenagecollapi.onrender.com/api/products/women-clothes', Config)
      console.log("men shoes yeahh", response.data)

        const data = [
          {
            id: 1,
            discount: 50,
            cover: "./images/flash/flash-1.png",
            name: "Shoes",
            price: 100,
          },
          {
            id: 2,
            discount: 40,
            cover: "./images/flash/flash-2.png",
            name: "Watch",
            price: 20,
          },
          {
            id: 3,
            discount: 40,
            cover: "./images/flash/flash-3.png",
            name: "Smart Mobile Black",
            price: 200,
          },
          {
            id: 4,
            discount: 40,
            cover: "./images/flash/flash-4.png",
            name: "Smart Watch Black",
            price: 50,
          },
          {
            id: 5,
            discount: 50,
            cover: "./images/flash/flash-1.png",
            name: "Shoes",
            price: 100,
          },
          {
            id: 6,
            discount: 50,
            cover: "./images/flash/flash-3.png",
            name: "Shoes",
            price: 100,
          },
        ]
        // console.log(token);
        // let response = await Axios.post(
        //   "http://194.195.113.231:8000/api/v1/get-agent-swaps",
        //   bodyContent,
        //   headersList
        // );
        // let data = await response.data
        // let data = response.data.swaps.sort((a, b) => {
        //   new Date(a.date) - new Date(b.date);
        // });
        // console.log("my datattatat from men' s ==>", data);
  
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
      console.log("token",token)
      // let bodyContent = {
      //   api_key: token,
      // };
      try {
        const response = await axios.get('https://kenagecollapi.onrender.com/api/products/men-clothes', Config)
      console.log("men shoes yeahh", response.data)

        const data = [
          {
            id: 7,
            cover: "./images/shops/shops-1.png",
            name: "Mapple Earphones",
            price: "180",
            discount: "25",
          },
          {
            id: 8,
            cover: "./images/shops/shops-2.png",
            name: "Vivo android one",
            price: "120",
            discount: "10",
          },
          {
            id: 9,
            cover: "./images/shops/shops-3.png",
            name: "Sony Light",
            price: "20",
            discount: "50 ",
          },
          {
            id: 10,
            cover: "./images/shops/shops-4.png",
            name: "Iphone",
            price: "999",
            discount: "10 ",
          },
          {
            id: 11,
            cover: "./images/shops/shops-5.png",
            name: "Ceats wireless earphone",
            price: "80",
            discount: "20 ",
          },
          {
            id: 12,
            cover: "./images/shops/shops-7.png",
            name: "Redimi Phone",
            price: "400",
            discount: "20 ",
          },
          {
            id: 13,
            cover: "./images/shops/shops-8.png",
            name: "Xeats Bluetooth earphones",
            price: "60",
            discount: "5 ",
          },
          {
            id: 14,
            cover: "./images/shops/shops-9.png",
            name: "Airpod",
            price: "120",
            discount: "10",
          },
          {
            id: 15,
            cover: "./images/shops/shops-10.png",
            name: "Silver Cap",
            price: "5",
            discount: "2",
          },
        ]
        // console.log(token);
        // let response = await Axios.post(
        //   "http://194.195.113.231:8000/api/v1/get-agent-swaps",
        //   bodyContent,
        //   headersList
        // );
        // let data = await response.data
        // let data = response.data.swaps.sort((a, b) => {
        //   new Date(a.date) - new Date(b.date);
        // });
        // console.log("my datattatat from men' s ==>", data);
  
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
      console.log("token",token)
      // let bodyContent = {
      //   api_key: token,
      // };
      try {

        const response = await axios.get('https://kenagecollapi.onrender.com/api/products/women-clothes', Config)
      console.log("men shoes yeahh", response.data)

        const data = [
          {
            id: 1,
            discount: 50,
            cover: "./images/flash/flash-1.png",
            name: "Shoes",
            price: 100,
          },
          {
            id: 2,
            discount: 40,
            cover: "./images/flash/flash-2.png",
            name: "Watch",
            price: 20,
          },
          {
            id: 3,
            discount: 40,
            cover: "./images/flash/flash-3.png",
            name: "Smart Mobile Black",
            price: 200,
          },
          {
            id: 4,
            discount: 40,
            cover: "./images/flash/flash-4.png",
            name: "Smart Watch Black",
            price: 50,
          },
          {
            id: 5,
            discount: 50,
            cover: "./images/flash/flash-1.png",
            name: "Shoes",
            price: 100,
          },
          {
            id: 6,
            discount: 50,
            cover: "./images/flash/flash-3.png",
            name: "Shoes",
            price: 100,
          },
        ]
        // console.log(token);
        // let response = await Axios.post(
        //   "http://194.195.113.231:8000/api/v1/get-agent-swaps",
        //   bodyContent,
        //   headersList
        // );
        // let data = await response.data
        // let data = response.data.swaps.sort((a, b) => {
        //   new Date(a.date) - new Date(b.date);
        // });
        // console.log("my datattatat from men' s ==>", data);
  
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
      console.log("token",token)
      // let bodyContent = {
      //   api_key: token,
      // };
      try {
        const response = await axios.get('https://kenagecollapi.onrender.com/api/products/men-clothes', Config)
      console.log("men shoes yeahh", response.data)

        const data = [
          {
            id: 7,
            cover: "./images/shops/shops-1.png",
            name: "Mapple Earphones",
            price: "180",
            discount: "25",
          },
          {
            id: 8,
            cover: "./images/shops/shops-2.png",
            name: "Vivo android one",
            price: "120",
            discount: "10",
          },
          {
            id: 9,
            cover: "./images/shops/shops-3.png",
            name: "Sony Light",
            price: "20",
            discount: "50 ",
          },
          {
            id: 10,
            cover: "./images/shops/shops-4.png",
            name: "Iphone",
            price: "999",
            discount: "10 ",
          },
          {
            id: 11,
            cover: "./images/shops/shops-5.png",
            name: "Ceats wireless earphone",
            price: "80",
            discount: "20 ",
          },
          {
            id: 12,
            cover: "./images/shops/shops-7.png",
            name: "Redimi Phone",
            price: "400",
            discount: "20 ",
          },
          {
            id: 13,
            cover: "./images/shops/shops-8.png",
            name: "Xeats Bluetooth earphones",
            price: "60",
            discount: "5 ",
          },
          {
            id: 14,
            cover: "./images/shops/shops-9.png",
            name: "Airpod",
            price: "120",
            discount: "10",
          },
          {
            id: 15,
            cover: "./images/shops/shops-10.png",
            name: "Silver Cap",
            price: "5",
            discount: "2",
          },
        ]
        // console.log(token);
        // let response = await Axios.post(
        //   "http://194.195.113.231:8000/api/v1/get-agent-swaps",
        //   bodyContent,
        //   headersList
        // );
        // let data = await response.data
        // let data = response.data.swaps.sort((a, b) => {
        //   new Date(a.date) - new Date(b.date);
        // });
        // console.log("my datattatat from men' s ==>", data);
  
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
      console.log("token",token)
      // let bodyContent = {
      //   api_key: token,
      // };
      try {
        const response = await axios.get('https://kenagecollapi.onrender.com/api/products/men-clothes', Config)
      console.log("men shoes yeahh", response.data)

        const data = [
          {
            id: 1,
            discount: 50,
            cover: "./images/flash/flash-1.png",
            name: "Shoes",
            price: 100,
          },
          {
            id: 2,
            discount: 40,
            cover: "./images/flash/flash-2.png",
            name: "Watch",
            price: 20,
          },
          {
            id: 3,
            discount: 40,
            cover: "./images/flash/flash-3.png",
            name: "Smart Mobile Black",
            price: 200,
          },
          {
            id: 4,
            discount: 40,
            cover: "./images/flash/flash-4.png",
            name: "Smart Watch Black",
            price: 50,
          },
          {
            id: 5,
            discount: 50,
            cover: "./images/flash/flash-1.png",
            name: "Shoes",
            price: 100,
          },
          {
            id: 6,
            discount: 50,
            cover: "./images/flash/flash-3.png",
            name: "Shoes",
            price: 100,
          },
        ]
        // console.log(token);
        // let response = await Axios.post(
        //   "http://194.195.113.231:8000/api/v1/get-agent-swaps",
        //   bodyContent,
        //   headersList
        // );
        // let data = await response.data
        // let data = response.data.swaps.sort((a, b) => {
        //   new Date(a.date) - new Date(b.date);
        // });
        // console.log("my datattatat from men' s ==>", data);
  
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
      console.log("data ==>",data)
     try{
        // console.log(token);
        // let response = await Axios.post(
        //   "http://194.195.113.231:8000/api/v1/get-agent-swaps",
        //   bodyContent,
        //   headersList
        // );
        // let data = await response.data
        // let data = response.data.swaps.sort((a, b) => {
        //   new Date(a.date) - new Date(b.date);
        // });
        // console.log("my datattatat from men' s ==>", data);
  
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
    async (product, { getState, rejectWithValue }) => {
      console.log("product ==>",product)
     try{

        // console.log(token);
        // let response = await Axios.post(
        //   "http://194.195.113.231:8000/api/v1/get-agent-swaps",
        //   bodyContent,
        //   headersList
        // );
        // let data = await response.data
        // let data = response.data.swaps.sort((a, b) => {
        //   new Date(a.date) - new Date(b.date);
        // });
        // console.log("my datattatat from men' s ==>", data);
        return product;
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
    async (product, { getState, rejectWithValue }) => {
      console.log("product ==>",product)
     try{

        // console.log(token);
        // let response = await Axios.post(
        //   "http://194.195.113.231:8000/api/v1/get-agent-swaps",
        //   bodyContent,
        //   headersList
        // );
        // let data = await response.data
        // let data = response.data.swaps.sort((a, b) => {
        //   new Date(a.date) - new Date(b.date);
        // });
        // console.log("my datattatat from men' s ==>", data);
        return product;
      } catch (error) {
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message);
        } else {
          return rejectWithValue(error.response.data);
        }
      }
    }
  );