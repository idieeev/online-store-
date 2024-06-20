import React, { useEffect,useState } from 'react'
import image1 from "../../assets/hero.svg"
import image2 from "../../assets/apple.svg";
import left from "../../assets/left.svg"
import right from "../../assets/right.svg";
import phone from "../../assets/phone.svg"
import computer from "../../assets/computer.svg";
import watch from "../../assets/watch.svg";
import camera from "../../assets/camera.svg";
import headphone from "../../assets/headphone.svg";
import gamepad from "../../assets/gamepad.svg";
import frame from "../../assets/frame.svg";
import frame2 from "../../assets/frame3.svg";
import image6 from "../../assets/Services5.svg";
import image7 from "../../assets/Services6.svg";
import image8 from "../../assets/Services7.svg";
import zvezda from "../../assets/zvezda.svg";
import productImage from "../../assets/product.svg";
import time from "../../assets/time.svg";
import { Autoplay } from "swiper/modules";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import iphone from "../../assets/iphone.jpeg"

import "swiper/css";
import "swiper/css/pagination";


import { Pagination } from "swiper/modules";

import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../../App.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { useDispatch, useSelector } from "react-redux";

import { getData,postCard } from '../../counters/counter';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';

const Home = () => {
  let imageApi = "http://65.108.148.136:8072/images/";


  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.data);
  useEffect(() => {
    dispatch(getData());
  }, [])
  
  return (
    <div>
      <div className="pl-[100px] pr-[100px] flex justify-between items-center pt-[30px] pb-[30px] sm:p-[0px] sm:flex-wrap">
        <div className="w-[25%] p-[10px] border-r-[1.8px] border-[#aaa9a9] sm:w-[100%]">
          <input
            placeholder="Search"
            className="border-[2px] sm:block hidden w-[90%] h-[50px] outline-none pl-[10px] bg-[transparent] rounded-md text-[18px] text-[gray]"
            type="search"
          />
          <div>
            <h1 className="text-[20px] font-[400] p-[10px] rounded-md hover:bg-[whitesmoke] pt-[10px] cursor-pointer">
              Woman’s Fashion
            </h1>
            <img src="" alt="" />
          </div>
          <h1 className="text-[20px] font-[400] p-[10px] rounded-md hover:bg-[whitesmoke] pt-[10px] cursor-pointer">
            Men’s Fashion
          </h1>
          <h1 className="text-[20px] font-[400] p-[10px] rounded-md hover:bg-[whitesmoke] pt-[10px] cursor-pointer">
            Electronics
          </h1>
          <h1 className="text-[20px] font-[400] p-[10px] rounded-md hover:bg-[whitesmoke] pt-[10px] cursor-pointer">
            Home & Lifestyle
          </h1>
          <h1 className="text-[20px] font-[400] p-[10px] rounded-md hover:bg-[whitesmoke] pt-[10px] cursor-pointer">
            Medicine
          </h1>
          <h1 className="text-[20px] font-[400] p-[10px] rounded-md hover:bg-[whitesmoke] pt-[10px] cursor-pointer">
            Sports & Outdoor
          </h1>
          <h1 className="text-[20px] font-[400] p-[10px] rounded-md hover:bg-[whitesmoke] pt-[10px] cursor-pointer">
            Baby’s & Toys
          </h1>
          <h1 className="text-[20px] font-[400] p-[10px] rounded-md hover:bg-[whitesmoke] pt-[10px] cursor-pointer">
            Groceries & Pets
          </h1>
          <h1 className="text-[20px] font-[400] p-[10px] rounded-md hover:bg-[whitesmoke] pt-[10px] cursor-pointer">
            Health & Beauty
          </h1>
        </div>
        <div className="w-[70%] sm:w-[60%]">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex justify-between items-center  text-[white] bg-[black] pt-[70px] pb-[70px] pl-[10px] pr-[10px]">
                <div className="w-[48%] pt-[20px] pb-[20px]">
                  <div className="flex justify-center items-center ">
                    {/* <img className="w-[10px] h-[30px]" src={image2} alt="" /> */}
                    <h1 className="text-[18px] ">iPhone 14 Series</h1>
                  </div>
                  <div>
                    <h1 className="text-[40px] font-[500]">
                      Up to 10% off Voucher
                    </h1>
                    <button className="text-[20px] border-b-[2px] p-[10px]">
                      Shop Now
                    </button>
                  </div>
                </div>
                <div className="w-[48%]">
                  <img src={image1} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-between items-center  text-[white] bg-[black] pt-[70px] pb-[70px] pl-[10px] pr-[10px]">
                <div className="w-[48%] pt-[20px] pb-[20px]">
                  <div className="flex justify-center items-center ">
                    {/* <img className="w-[10px] h-[30px]" src={image2} alt="" /> */}
                    <h1 className="text-[18px] ">iPhone 14 Series</h1>
                  </div>
                  <div>
                    <h1 className="text-[40px] font-[500]">
                      Up to 10% off Voucher
                    </h1>
                    <button className="text-[20px] border-b-[2px] p-[10px]">
                      Shop Now
                    </button>
                  </div>
                </div>
                <div className="w-[48%]">
                  <img src={image1} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-between items-center text-[white] bg-[black] pt-[70px] pb-[70px] pl-[10px] pr-[10px]">
                <div className="w-[48%] pt-[20px] pb-[20px]">
                  <div className="flex justify-center items-center ">
                    {/* <img className="w-[10px] h-[30px]" src={image2} alt="" /> */}
                    <h1 className="text-[18px] ">iPhone 14 Series</h1>
                  </div>
                  <div>
                    <h1 className="text-[40px] font-[500]">
                      Up to 10% off Voucher
                    </h1>
                    <button className="text-[20px] border-b-[2px] p-[10px]">
                      Shop Now
                    </button>
                  </div>
                </div>
                <div className="w-[48%]">
                  <img src={image1} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-between items-center text-[white] bg-[black] pt-[70px] pb-[70px] pl-[10px] pr-[10px]">
                <div className="w-[48%] pt-[20px] pb-[20px]">
                  <div className="flex justify-center items-center ">
                    {/* <img className="w-[10px] h-[30px]" src={image2} alt="" /> */}
                    <h1 className="text-[18px] ">iPhone 14 Series</h1>
                  </div>
                  <div>
                    <h1 className="text-[40px] font-[500]">
                      Up to 10% off Voucher
                    </h1>
                    <button className="text-[20px] border-b-[2px] p-[10px]">
                      Shop Now
                    </button>
                  </div>
                </div>
                <div className="w-[48%]">
                  <img src={image1} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-between items-center text-[white] bg-[black] pt-[70px] pb-[70px] pl-[10px] pr-[10px]">
                <div className="w-[48%] pt-[20px] pb-[20px]">
                  <div className="flex justify-center items-center ">
                    {/* <img className="w-[10px] h-[30px]" src={image2} alt="" /> */}
                    <h1 className="text-[18px] ">iPhone 14 Series</h1>
                  </div>
                  <div>
                    <h1 className="text-[40px] font-[500]">
                      Up to 10% off Voucher
                    </h1>
                    <button className="text-[20px] border-b-[2px] p-[10px]">
                      Shop Now
                    </button>
                  </div>
                </div>
                <div className="w-[48%]">
                  <img src={image1} alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="pl-[100px] pr-[100px] pt-[50px] pb-[50px] sm:p-[10px] sm:mt-[10px]">
        <div className="flex w-[150px] items-center gap-[10px]">
          <button className="w-[15%] rounded-md h-[40px] bg-red-700"></button>
          <h1 className="text-[18px] text-[red]">Today’s</h1>
        </div>
        <div className="flex justify-between  items-center mt-[20px]">
          <h1 className="text-[30px] font-[400]">Flash Sales</h1>
          <img src={time} alt="" />
          <div className="flex gap-[10px]">
            <img src={left} alt="" />
            <img src={right} alt="" />
          </div>
        </div>
        <div className="flex justify-between items-center mt-[50px] sm:flex-wrap flex-wrap">
          {product?.map((elem) => {
            return (
              <div
                key={elem.id}
                className="product w-[24%] mt-[20px] h-[52vh] rounded-md bg-[white] p-[10px] pb-[20px] sm:h-[68vh] sm:w-[70%] sm:m-[auto] sm:mt-[10px]"
              >
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
                    className="image w-[100%] m-[auto]  h-[70%]   block object-cover"
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
        <div>
          <Link to={"/all/product"}>
            <button className="w-[200px] h-[50px] bg-red-500 rounded-md text-[white] m-[auto] mt-[20px] block hover:bg-red-700">
              More Products
            </button>
          </Link>
        </div>
      </div>
      <div className="pl-[100px] pr-[100px] pt-[50px] pb-[50px] sm:p-[10px]">
        <div className="flex w-[150px] items-center gap-[10px]">
          <button className="w-[15%] rounded-md h-[40px] bg-red-700"></button>
          <h1 className="text-[18px] text-[red]">Categories</h1>
        </div>
        <div className="flex justify-between items-center mt-[20px]">
          <h1 className="text-[30px] font-[400] sm:text-[20px]">
            Browse By Category
          </h1>
          <div className="flex gap-[10px]">
            <img src={left} alt="" />
            <img src={right} alt="" />
          </div>
        </div>
        <div className="flex justify-between items-center mt-[30px] sm:flex-wrap">
          <div className="w-[16%] border-[2px] rounded-md p-[10px] sm:w-[60%] sm:m-[auto] hover:duration-700 hover:bg-red-500 hover:text-[white]">
            <img className="block m-[auto] mt-[10px]" src={phone} alt="" />
            <h1 className="text-[18px] text-[gray] hover:text-[white]  text-center pt-[10px] pb-[20px]">
              Phones
            </h1>
          </div>
          <div className="w-[16%] border-[2px] rounded-md p-[10px] sm:w-[60%] sm:m-[auto] sm:mt-[10px] hover:duration-700 hover:bg-red-500 hover:text-[white]">
            <img className="block m-[auto] mt-[10px]" src={computer} alt="" />
            <h1 className="text-[18px] text-[gray] hover:text-[white]  text-center pt-[10px] pb-[20px]">
              Computers
            </h1>
          </div>
          <div className="w-[16%] border-[2px] rounded-md p-[10px] sm:w-[60%] sm:m-[auto] sm:mt-[10px] hover:duration-700 hover:bg-red-500 hover:text-[white]">
            <img className="block m-[auto] mt-[10px]" src={watch} alt="" />
            <h1 className="text-[18px] text-[gray] hover:text-[white]  text-center pt-[10px] pb-[20px]">
              Smartwatches
            </h1>
          </div>
          <div className="w-[16%] border-[2px] rounded-md p-[10px] sm:w-[60%] sm:m-[auto] sm:mt-[10px] hover:duration-700 hover:bg-[transparent] bg-red-500 hover:text-[white]">
            <img className="block m-[auto] mt-[10px]" src={camera} alt="" />
            <h1 className="text-[18px] text-[white] hover:text-[gray]  text-center pt-[10px] pb-[20px]">
              Camera
            </h1>
          </div>
          <div className="w-[16%] border-[2px] rounded-md p-[10px] sm:w-[60%] sm:m-[auto] sm:mt-[10px] hover:duration-700 hover:bg-red-500 hover:text-[white]">
            <img className="block m-[auto] mt-[10px]" src={headphone} alt="" />
            <h1 className="text-[18px] text-[gray] hover:text-[white]  text-center pt-[10px]  pb-[20px]">
              Headphones
            </h1>
          </div>
          <div className="w-[16%] border-[2px] rounded-md p-[10px] sm:w-[60%] sm:m-[auto] sm:mt-[10px] hover:duration-700 hover:bg-red-500 hover:text-[white]">
            <img className="block m-[auto] mt-[10px]" src={gamepad} alt="" />
            <h1 className="text-[18px] text-[gray] hover:text-[white]  text-center pt-[10px] pb-[20px]">
              Gaming
            </h1>
          </div>
        </div>
      </div>
      <div className="pl-[100px] pr-[100px] pt-[50px] pb-[50px] sm:p-[10px] sm:mt-[10px]">
        <div className="flex w-[150px] items-center gap-[10px]">
          <button className="w-[15%] rounded-md h-[40px] bg-red-700"></button>
          <h1 className="text-[18px] text-[red]">This Month</h1>
        </div>
        <div className="flex justify-between   items-center mt-[20px]">
          <h1 className="text-[30px] font-[400]">Best Selling Products</h1>
          <button className="w-[200px] h-[50px] bg-red-600 rounded-md text-[white] text-[20px]">
            View All
          </button>
        </div>
        <div className="flex justify-between items-center mt-[50px] sm:flex-wrap">
          {product?.slice(0, 4).map((elem) => {
            return (
              <div
                key={elem.id}
                className="product w-[24%]   h-[52vh] rounded-md bg-[white] p-[10px] pb-[20px] sm:h-[68vh] sm:w-[70%] sm:m-[auto] sm:mt-[10px]"
              >
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
                    className="image  w-[100%] m-[auto]  h-[70%]   block "
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
      </div>
      <div className="pl-[100px] pr-[100px] pt-[20px] pb-[20px] sm:p-[10px] ">
        <div className="bg-[#000000] flex justify-between items-center sm:flex-wrap p-[50px] pb-[50px] pt-[50px] rounded-md">
          <div className="w-[49%] sm:w-[100%]">
            <h1 className="text-[18px] text-[#00FF66] pb-[20px]">Categories</h1>
            <h1 className="text-[40px] text-[white] font-[500] pt-[10px]">
              Enhance Your Music Experience
            </h1>
            <div className="mt-[20px]">
              <img src={frame} alt="" />
            </div>
            <button className="bg-[#00FF66] text-[17px] hover:bg-[#30a030] w-[180px] h-[50px] mt-[30px] rounded-md">
              Buy Now!
            </button>
          </div>
          <div className="w-[49%] sm:w-[100%] sm:mt-[10px]">
            <img
              className="w-[100%] rounded-2xl shadow-[gray]"
              src={frame2}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="pl-[100px] pr-[100px] pt-[50px] pb-[50px] sm:p-[10px] sm:mt-[10px]">
        <div className="flex w-[150px] items-center gap-[10px]">
          <button className="w-[15%] rounded-md h-[40px] bg-red-700"></button>
          <h1 className="text-[18px] text-[red]">Our products</h1>
        </div>
        <div className="flex justify-between   items-center mt-[20px]">
          <h1 className="text-[30px] font-[400]">Explore Our Products</h1>
          <button className="w-[200px] h-[50px] bg-red-600 rounded-md text-[white] text-[20px]">
            View All
          </button>
        </div>
        <div className="flex justify-between items-center mt-[50px] sm:flex-wrap">
          {product?.slice(0, 4).map((elem) => {
            return (
              <div
                key={elem.id}
                className="product w-[24%]   h-[52vh] rounded-md bg-[white] p-[10px] pb-[20px] sm:h-[68vh] sm:w-[70%] sm:m-[auto] sm:mt-[10px]"
              >
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
                    className="image w-[100%] m-[auto]  h-[70%]   block "
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
      </div>
      <div className="pl-[100px] pr-[100px] pt-[50px] pb-[50px] sm:p-[10px] sm:mt-[10px]">
        <div className="flex w-[150px] items-center gap-[10px]">
          <button className="w-[15%] rounded-md h-[40px] bg-red-700"></button>
          <h1 className="text-[18px] text-[red]">Featured</h1>
        </div>
        <div className="flex justify-between   items-center mt-[20px]">
          <h1 className="text-[30px] font-[400]">New Arrival</h1>
        </div>
        <div className="flex justify-between items-center mt-[20px] sm:flex-wrap">
          <div className="div1 w-[49%] sm:w-[100%] sm:h-[100vh]"></div>
          <div className="w-[49%] flex justify-between flex-wrap gap-[10px] sm:w-[100%] mt-[10px]">
            <div className="div2 w-[100%] sm:w-[100%] sm:h-[100vh]"></div>
            <div className="div3 w-[49%] sm:w-[100%] sm:h-[100vh]"></div>
            <div className="div4 w-[49%] sm:w-[100%] sm:h-[100vh]"></div>
          </div>
        </div>
      </div>
      <div className="pl-[150px] pr-[150px] pt-[50px] pb-[50px] flex justify-between items-center sm:flex-wrap sm:p-[10px]">
        <div className="w-[31%] sm:w-[80%] sm:m-[auto] sm:mt-[10px]">
          <img className="block m-[auto]" src={image6} alt="" />
          <h1 className="text-center text-[19px] font-[600] pt-[10px]">
            FREE AND FAST DELIVERY
          </h1>
          <h1 className="text-center pt-[10px] text-[17px] font-[400]">
            Free delivery for all orders over $140
          </h1>
        </div>
        <div className="w-[31%] sm:w-[80%] sm:m-[auto] sm:mt-[10px]">
          <img className="block m-[auto]" src={image7} alt="" />
          <h1 className="text-center text-[19px] font-[600] pt-[10px]">
            24/7 CUSTOMER SERVICE
          </h1>
          <h1 className="text-center pt-[10px] text-[17px] font-[400]">
            Friendly 24/7 customer support
          </h1>
        </div>
        <div className="w-[31%] sm:w-[80%] sm:m-[auto] sm:mt-[10px] sm:mb-[10px]">
          <img className="block m-[auto]" src={image8} alt="" />
          <h1 className="text-center text-[19px] font-[600] pt-[10px]">
            MONEY BACK GUARANTEE
          </h1>
          <h1 className="text-center pt-[10px] text-[17px] font-[400]">
            We reurn money within 30 days
          </h1>
        </div>
      </div>
    </div>
  );
}
export default Home
