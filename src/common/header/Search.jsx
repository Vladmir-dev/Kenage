import React, { useState, useEffect } from "react";
import logo from "../../components/assets/images/kenage.png";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import { useSelector, useDispatch } from "react-redux";
import {
  fetch_men_clothes,
  top_categories,
  new_arrivals,
  discounted,
  fetch_men_shoes,
  fetch_women_clothes,
  fetch_women_shoes,
  fetch_boys_clothes,
  fetch_boys_shoes,
  fetch_girls_clothes,
  fetch_girls_shoes,
  fetch_results,
} from "../../features/actions";
import { useNavigate } from "react-router-dom";
import { fetchCurrencyRatesAsync } from "../../features/reducers/currencySlice";

const Search = () => {
  // fixed Header
  // window.addEventListener("scroll", function () {
  //   const search = document.querySelector(".search")
  //   search.classList.toggle("active", window.scrollY > 100)
  // })
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const men_cloth = useSelector((state) => state.products.men_clothes);
  const men_shoe = useSelector((state) => state.products.men_shoes);
  const women_cloth = useSelector((state) => state.products.women_clothes);
  const women_shoe = useSelector((state) => state.products.women_shoes);
  const token = useSelector((state) => state.users.token);
  const boy_cloth = useSelector((state) => state.products.boy_clothes);
  const boy_shoe = useSelector((state) => state.products.boy_shoes);
  const girl_cloth = useSelector((state) => state.products.girl_clothes);
  const girl_shoe = useSelector((state) => state.products.girl_shoes);
  const cart = useSelector((state) => state.cart.cartItems);
  const category = useSelector((state) => state.products.topCategories);
  const arrivals = useSelector((state) => state.products.newArrivals);
  const discounts = useSelector((state) => state.products.discounts);
  const rates = useSelector((state) => state.currency.rates)
  const currency = useSelector((state) => state.currency.selectedCurrency)
  // const token = useSelector((state) => state.users.token)

  console.log("currency", currency);
  // console.log("top arrivals ==>", arrivals);
  // console.log("women's clothes ==>", women_cloth)
  // console.log("women's shoes ==>", women_shoe)
  // console.log("prod dndn clothes ==>", products)
  useEffect(() => {
    dispatch(fetch_men_clothes(token));
    dispatch(fetch_men_shoes(token));
    dispatch(fetch_women_clothes(token));
    dispatch(fetch_women_shoes(token));
    dispatch(fetch_boys_clothes(token));
    dispatch(fetch_boys_shoes(token));
    dispatch(fetch_girls_clothes(token));
    dispatch(fetch_girls_shoes(token));
    dispatch(top_categories(token));
    dispatch(new_arrivals(token));
    dispatch(discounted(token));
    dispatch(fetchCurrencyRatesAsync());
  }, [dispatch]);

  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    navigate("/search");
    const query = e.target.value.toLowerCase();
    setQuery(query);

    // Combine all arrays into a single array
    const allProducts = [
      ...men_cloth,
      ...men_shoe,
      ...women_cloth,
      ...women_shoe,
      ...boy_cloth,
      ...boy_shoe,
      ...girl_cloth,
      ...girl_shoe,
      ...category,
      ...discounted,
    ];
    // console.log("all products", allProducts);
    // Perform search in the combined array
    const results = allProducts.filter((product) => {
      // Customize the conditions based on your product data structure
      return product.name.toLowerCase().includes(query);
      // product.description.toLowerCase().includes(query) ||
      // product.category.toLowerCase().includes(query)
    });

    setSearchResults(results);
    dispatch(fetch_results(results));
  };

  console.log("results ==>", searchResults);

  return (
    <>
      <section className="md:py-[20px] md:px-[0px] py-[15px] px-[0px] bg-white">
        <div className="container c_flex">
          <div className="logo width ">
            <img src={logo} alt="logo" className="md:w-[100px] w-[80px]" />
          </div>
          <div className="search-box f_flex md:mr-0 mr-[35px]">
            <i className="fa fa-search"></i>
            <input
              type="text"
              value={query}
              onChange={handleSearch}
              placeholder="Search & hit enter..."
            />
            <span className="hidden md:block">All Category</span>
          </div>

          <div className="hidden md:block">
            <div className="icon flex justify-center items-center md:gap-5 gap-2">
              <Link to="/profile">
                <div className="flex justify-center rounded-full bg-[#f6f9fc] md:p-[18px] p-[8px]">
                  <i className="fa fa-user"></i>
                </div>
              </Link>

              <div className="cart">
                <Link to="/cart">
                  <i className="fa fa-shopping-bag md:p-4 p-2 bg-[#f6f9fc] rounded-full"></i>
                  <span
                    className="px-2 md:py-[2px] rounded-full md:text-[10px] text-white"
                    style={{ background: "#FF5722" }}
                  >
                    {cart.length === 0 ? "" : cart.length}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
