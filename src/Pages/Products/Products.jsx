import React, { useEffect } from "react";
import Slider from "@mui/material/Slider";
import { IconButton, TextField } from "@mui/material";
import Shop from "../../components/Shop/Shop";
import { useDispatch, useSelector } from "react-redux";
import zvezda from "../../assets/zvezda.svg";
import { getData } from "../../counters/counter";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Link } from "react-router-dom";

const Products = () => {
  const [value, setValue] = React.useState([20, 37]);
  const product = useSelector((state) => state.product.data);
  const imageApi = "http://65.108.148.136:8072/images/";

  const dispatch = useDispatch();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function valuetext(value) {
    return `${value}°C`;
  }
  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <main className="w-[87%] m-auto flex justify-between gap-20 my-[50px]">
      <aside className="w-[20%]  flex flex-col gap-2 text-[20px] tracking-[1px]">
        <p className="font-[600]">Category</p>
        <p>All products</p>
        <p>Electronics</p>
        <p>Home & Lifestyle</p>
        <p>Medicine</p>
        <p>Sports & Outdoor</p>
        <p>See all</p>
        <hr className="my-[20px] border-[gray]" />

        <p className="font-[600]">Brands</p>
        <div className="flex gap-1 items-center">
          <input type="checkbox" className="w-[20px] h-[20px]" />
          <p>Samsung</p>
        </div>
        <div className="flex gap-1 items-center">
          <input type="checkbox" className="w-[20px] h-[20px]" />
          <p>Apple</p>
        </div>
        <div className="flex gap-1 items-center">
          <input type="checkbox" className="w-[20px] h-[20px]" />
          <p>Huawei</p>
        </div>
        <div className="flex gap-1 items-center">
          <input type="checkbox" className="w-[20px] h-[20px]" />
          <p>Pocco</p>
        </div>
        <div className="flex gap-1 items-center">
          <input type="checkbox" className="w-[20px] h-[20px]" />
          <p>Lenovo</p>
        </div>
        <p>See all </p>

        <hr className="my-[20px] border-[gray]" />

        <p className="font-[600]">Features</p>
        <div className="flex gap-1 items-center">
          <input type="checkbox" className="w-[20px] h-[20px]" />
          <p>Metallic</p>
        </div>
        <div className="flex gap-1 items-center">
          <input type="checkbox" className="w-[20px] h-[20px]" />
          <p>Plastic cover</p>
        </div>
        <div className="flex gap-1 items-center">
          <input type="checkbox" className="w-[20px] h-[20px]" />
          <p>8GB Ram</p>
        </div>
        <div className="flex gap-1 items-center">
          <input type="checkbox" className="w-[20px] h-[20px]" />
          <p>Super power</p>
        </div>
        <div className="flex gap-1 items-center">
          <input type="checkbox" className="w-[20px] h-[20px]" />
          <p>Large Memory</p>
        </div>
        <p>See all</p>

        <hr className="my-[20px] border-[gray]" />

        <p className="font-[600]">Price range</p>

        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
        <div className=" flex gap-5 items-center">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </div>
        <button className="w-[100%] h-[6svh] mt-[20px] rounded-md border border-[#DB4444] text-[#DB4444] text-[20px]">
          Apply
        </button>

        <hr className="my-[20px] border-[gray]" />

        <p className="font-bold">Condition</p>
        <div className="flex gap-1 items-center">
          <input
            type="radio"
            className="w-[20px] h-[20px] accent-[#db4444]"
            name="range"
          />
          <p>Any</p>
        </div>
        <div className="flex gap-1 items-center">
          <input
            type="radio"
            className="w-[20px] h-[20px] accent-[#db4444]"
            name="range"
          />
          <p>Refurbished</p>
        </div>
        <div className="flex gap-1 items-center">
          <input
            type="radio"
            className="w-[20px] h-[20px] accent-[#db4444]"
            name="range"
          />
          <p>Brand new</p>
        </div>
        <div className="flex gap-1 items-center">
          <input
            type="radio"
            className="w-[20px] h-[20px] accent-[#db4444]"
            name="range"
          />
          <p>Old items</p>
        </div>

        <hr className="my-[20px] border-[gray]" />

        <div className="flex gap-2 items-center">
          <input type="checkbox" className="w-[20px] h-[20px]" />
          <div className="flex items-center gap-1">
            <img src="../src/assets/full.png" className="w-[18px]" alt="star" />
            <img src="../src/assets/full.png" className="w-[18px]" alt="star" />
            <img src="../src/assets/full.png" className="w-[18px]" alt="star" />
            <img src="../src/assets/full.png" className="w-[18px]" alt="star" />
            <img src="../src/assets/full.png" className="w-[18px]" alt="star" />
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <input type="checkbox" className="w-[20px] h-[20px]" />
          <div className="flex items-center gap-1">
            <img src="../src/assets/full.png" className="w-[18px]" alt="star" />
            <img src="../src/assets/full.png" className="w-[18px]" alt="star" />
            <img src="../src/assets/full.png" className="w-[18px]" alt="star" />
            <img src="../src/assets/full.png" className="w-[18px]" alt="star" />
            <img
              src="../src/assets/empty.png"
              className="w-[18px]"
              alt="star"
            />
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <input type="checkbox" className="w-[20px] h-[20px]" />
          <div className="flex items-center gap-1">
            <img src="../src/assets/full.png" className="w-[18px]" alt="star" />
            <img src="../src/assets/full.png" className="w-[18px]" alt="star" />
            <img src="../src/assets/full.png" className="w-[18px]" alt="star" />
            <img
              src="../src/assets/empty.png"
              className="w-[18px]"
              alt="star"
            />
            <img
              src="../src/assets/empty.png"
              className="w-[18px]"
              alt="star"
            />
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <input type="checkbox" className="w-[20px] h-[20px]" />
          <div className="flex items-center gap-1">
            <img src="../src/assets/full.png" className="w-[18px]" alt="star" />
            <img src="../src/assets/full.png" className="w-[18px]" alt="star" />
            <img
              src="../src/assets/empty.png"
              className="w-[18px]"
              alt="star"
            />
            <img
              src="../src/assets/empty.png"
              className="w-[18px]"
              alt="star"
            />
            <img
              src="../src/assets/empty.png"
              className="w-[18px]"
              alt="star"
            />
          </div>
        </div>
      </aside>
      <aside className=" w-[75%] flex flex-col gap-10 items-center">
        <div className="w-[100%] grid grid-cols-3 gap-5">
          {product?.map((elem) => {
            return (
              <div className="product w-[100%]   h-[52vh] rounded-md bg-[white] p-[10px] pb-[20px] sm:w-[100%]">
                <div className="h-[30vh] rounded-md cursor-pointer">
                  <div className="flex justify-between items-center">
                    <button className="text-[20px] w-[100px] h-[40px] mb-[5px] bg-red-500 rounded-md text-[white]">
                      {elem.discountPrice}%
                    </button>
                    <div>
                      <IconButton>
                        <FavoriteBorderIcon
                          sx={{ width: "30px", height: "30px" }}
                        />
                      </IconButton>
                      <Link to={`cart/${elem.id}`}>
                        <IconButton>
                          <RemoveRedEyeIcon
                            sx={{ width: "30px", height: "30px" }}
                          />
                        </IconButton>
                      </Link>
                    </div>
                  </div>
                  <img
                    className="image object-cover w-[100%] m-[auto]  h-[70%]   block "
                    src={`${imageApi}${elem.image}`}
                    alt=""
                  />
                  <div
                    onClick={() => dispatch(postCard(elem.id))}
                    className="cart w-[100%] h-[20%] items-center gap-[20px] justify-center bg-black text-[white] hidden  bottom-3  cursor-pointer"
                  >
                    <ShoppingCartIcon sx={{ width: "30px", height: "30px" }} />
                    <h1 className="text-[20px] text-center pt-[10px]">
                      Add to Cart
                    </h1>
                  </div>
                </div>
                <div>
                  <h1 className="text-[18px] pt-[10px] font-[500] overflow-auto mt-[10px] ">
                    {elem.productName}
                  </h1>
                </div>
                <div className="flex items-center gap-[20px] pt-[5px] pb-[5px]">
                  <h1 className="text-[16px] pt-[5px] text-red-600 font-[500]">{`${"$"}${
                    elem.price
                  }`}</h1>
                  <img src={zvezda} alt="" />
                </div>
                <div
                  className="w-[30px] h-[30px]  rounded-full border-[2px] border-[black] pt-[5px]"
                  style={{ backgroundColor: elem.color }}
                ></div>
              </div>
            );
          })}
        </div>
      </aside>
    </main>
  );
};

export default Products;
