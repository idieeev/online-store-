import React from 'react'
import image1 from "../../assets/Side.svg"
import image2 from "../../assets/Services.svg";
import image3 from "../../assets/Services2.svg";
import image4 from "../../assets/Services3.svg";
import image5 from "../../assets/Services4.svg";
import User from "../../assets/user.svg";
import image6 from "../../assets/Services5.svg";
import image7 from "../../assets/Services6.svg";
import image8 from "../../assets/Services7.svg";


import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../../App.css"


import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";


import { Pagination } from "swiper/modules";




const About = () => {
  return (
    <div>
      <div className="pl-[100px] pr-[100px] pt-[50px] pb-[50px] sm:p-[10px]">
        <h1 className="text-[25px]">
          <span className="text-[gray]">Home / </span>
          About
        </h1>
        <div className="flex justify-between items-center mt-[30px] sm:flex-wrap">
          <div className="w-[48%] sm:w-[100%]">
            <h1 className="text-[50px] font-[500]">Our Story</h1>
            <h1 className="w-[600px] text-[18px] pt-[20px] sm:w-[90%]">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.{" "}
            </h1>
            <h1 className="w-[600px] text-[18px] pt-[20px] sm:w-[90%]">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </h1>
          </div>
          <div className="w-[48%] sm:w-[100%] sm:mt-[10px]">
            <img className="w-[100%] rounded-lg" src={image1} alt="" />
          </div>
        </div>
      </div>
      <div className="pl-[100px] pr-[100px] flex justify-between items-center pt-[30px] pb-[30px] sm:p-[10px] sm:flex-wrap">
        <div className="w-[22%] rounded-lg border bg-[transparent] p-[10px] pb-[20px] hover:bg-red-600 hover:text-[white] hover:duration-500 sm:w-[90%] sm:m-[auto]">
          <img className="block m-[auto] mt-[10px]" src={image2} alt="" />
          <h1 className="text-[40px] text-center font-[600] pt-[10px]">
            10.5k{" "}
          </h1>
          <h1 className="text-center font-[400] pt-[10px] text-[18px]">
            Sallers active our site
          </h1>
        </div>
        <div className="w-[22%] rounded-lg border bg-red-600 p-[10px] pb-[20px] hover:bg-[transparent] hover:duration-500 sm:w-[90%] sm:m-[auto] sm:mt-[10px]">
          <img className="block m-[auto] mt-[10px]" src={image3} alt="" />
          <h1 className="text-[40px] text-center font-[600] pt-[10px]">33k</h1>
          <h1 className="text-center font-[400] pt-[10px] text-[18px]">
            Mopnthly Produduct Sale
          </h1>
        </div>
        <div className="w-[22%] rounded-lg border bg-[transparent] p-[10px] pb-[20px] hover:bg-red-600 hover:text-[white] hover:duration-500 sm:w-[90%] sm:m-[auto] sm:mt-[10px]">
          <img className="block m-[auto] mt-[10px]" src={image4} alt="" />
          <h1 className="text-[40px] text-center font-[600] pt-[10px]">
            45.5k
          </h1>
          <h1 className="text-center font-[400] pt-[10px] text-[18px]">
            Customer active in our site
          </h1>
        </div>
        <div className="w-[22%] rounded-lg border bg-[transparent] p-[10px] pb-[20px] hover:bg-red-600 hover:text-[white] hover:duration-500 sm:w-[90%] sm:m-[auto] sm:mt-[10px]">
          <img className="block m-[auto] mt-[10px]" src={image5} alt="" />
          <h1 className="text-[40px] text-center font-[600] pt-[10px]">25k </h1>
          <h1 className="text-center font-[400] pt-[10px] text-[18px]">
            Anual gross sale in our site
          </h1>
        </div>
      </div>
      <div className="pl-[100px] pr-[100px] pt-[50px] pb-[50px] sm:p-[10px]">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bg-[transparent] flex justify-between items-center">
              <div className="bg-[transparent] w-[30%] rounded-lg sm:w-[100%]">
                <img src={User} alt="" />
                <h1 className="text-[30px] font-[500] text-start pt-[10px]">
                  Tom Cruise
                </h1>
                <h1 className="text-[18px] font-400 text-start">
                  Founder & Chairman
                </h1>
                <div className="flex mt-[10px]">
                  <TwitterIcon
                    sx={{ textAlign: "start", marginRight: "10px" }}
                  />
                  <TwitterIcon
                    sx={{ textAlign: "start", marginRight: "10px" }}
                  />
                  <InstagramIcon
                    sx={{ textAlign: "start", marginRight: "300px" }}
                  />
                </div>
              </div>
              <div className="bg-[transparent] w-[30%] sm:hidden">
                <img src={User} alt="" />
                <h1 className="text-[30px] font-[500] text-start pt-[10px]">
                  Tom Cruise
                </h1>
                <h1 className="text-[18px] font-400 text-start">
                  Founder & Chairman
                </h1>
                <div className="flex mt-[10px]">
                  <TwitterIcon
                    sx={{ textAlign: "start", marginRight: "10px" }}
                  />
                  <TwitterIcon
                    sx={{ textAlign: "start", marginRight: "10px" }}
                  />
                  <InstagramIcon
                    sx={{ textAlign: "start", marginRight: "300px" }}
                  />
                </div>
              </div>
              <div className="bg-[transparent] w-[30%] sm:hidden">
                <img src={User} alt="" />
                <h1 className="text-[30px] font-[500] text-start pt-[10px]">
                  Tom Cruise
                </h1>
                <h1 className="text-[18px] font-400 text-start">
                  Founder & Chairman
                </h1>
                <div className="flex mt-[10px]">
                  <TwitterIcon
                    sx={{ textAlign: "start", marginRight: "10px" }}
                  />
                  <TwitterIcon
                    sx={{ textAlign: "start", marginRight: "10px" }}
                  />
                  <InstagramIcon
                    sx={{ textAlign: "start", marginRight: "300px" }}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[transparent] flex justify-between items-center">
              <div className="bg-[transparent] w-[30%] rounded-lg sm:w-[100%]">
                <img src={User} alt="" />
                <h1 className="text-[30px] font-[500] text-start pt-[10px]">
                  Tom Cruise
                </h1>
                <h1 className="text-[18px] font-400 text-start">
                  Founder & Chairman
                </h1>
                <div className="flex mt-[10px]">
                  <TwitterIcon
                    sx={{ textAlign: "start", marginRight: "10px" }}
                  />
                  <TwitterIcon
                    sx={{ textAlign: "start", marginRight: "10px" }}
                  />
                  <InstagramIcon
                    sx={{ textAlign: "start", marginRight: "300px" }}
                  />
                </div>
              </div>
              <div className="bg-[transparent] w-[30%] sm:hidden">
                <img src={User} alt="" />
                <h1 className="text-[30px] font-[500] text-start pt-[10px]">
                  Tom Cruise
                </h1>
                <h1 className="text-[18px] font-400 text-start">
                  Founder & Chairman
                </h1>
                <div className="flex mt-[10px]">
                  <TwitterIcon
                    sx={{ textAlign: "start", marginRight: "10px" }}
                  />
                  <TwitterIcon
                    sx={{ textAlign: "start", marginRight: "10px" }}
                  />
                  <InstagramIcon
                    sx={{ textAlign: "start", marginRight: "300px" }}
                  />
                </div>
              </div>
              <div className="bg-[transparent] w-[30%] sm:hidden">
                <img src={User} alt="" />
                <h1 className="text-[30px] font-[500] text-start pt-[10px]">
                  Tom Cruise
                </h1>
                <h1 className="text-[18px] font-400 text-start">
                  Founder & Chairman
                </h1>
                <div className="flex mt-[10px]">
                  <TwitterIcon
                    sx={{ textAlign: "start", marginRight: "10px" }}
                  />
                  <TwitterIcon
                    sx={{ textAlign: "start", marginRight: "10px" }}
                  />
                  <InstagramIcon
                    sx={{ textAlign: "start", marginRight: "300px" }}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[transparent] flex justify-between items-center">
              <div className="bg-[transparent] w-[30%] rounded-lg sm:w-[100%]">
                <img src={User} alt="" />
                <h1 className="text-[30px] font-[500] text-start pt-[10px]">
                  Tom Cruise
                </h1>
                <h1 className="text-[18px] font-400 text-start">
                  Founder & Chairman
                </h1>
                <div className="flex mt-[10px]">
                  <TwitterIcon
                    sx={{ textAlign: "start", marginRight: "10px" }}
                  />
                  <TwitterIcon
                    sx={{ textAlign: "start", marginRight: "10px" }}
                  />
                  <InstagramIcon
                    sx={{ textAlign: "start", marginRight: "300px" }}
                  />
                </div>
              </div>
              <div className="bg-[transparent] w-[30%] sm:hidden">
                <img src={User} alt="" />
                <h1 className="text-[30px] font-[500] text-start pt-[10px]">
                  Tom Cruise
                </h1>
                <h1 className="text-[18px] font-400 text-start">
                  Founder & Chairman
                </h1>
                <div className="flex mt-[10px]">
                  <TwitterIcon
                    sx={{ textAlign: "start", marginRight: "10px" }}
                  />
                  <TwitterIcon
                    sx={{ textAlign: "start", marginRight: "10px" }}
                  />
                  <InstagramIcon
                    sx={{ textAlign: "start", marginRight: "300px" }}
                  />
                </div>
              </div>
              <div className="bg-[transparent] w-[30%] sm:hidden">
                <img src={User} alt="" />
                <h1 className="text-[30px] font-[500] text-start pt-[10px]">
                  Tom Cruise
                </h1>
                <h1 className="text-[18px] font-400 text-start">
                  Founder & Chairman
                </h1>
                <div className="flex mt-[10px]">
                  <TwitterIcon
                    sx={{ textAlign: "start", marginRight: "10px" }}
                  />
                  <TwitterIcon
                    sx={{ textAlign: "start", marginRight: "10px" }}
                  />
                  <InstagramIcon
                    sx={{ textAlign: "start", marginRight: "300px" }}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[transparent] flex justify-between items-center">
              <div className="bg-[transparent] w-[30%] rounded-lg sm:w-[100%]">
                <img src={User} alt="" />
                <h1 className="text-[30px] font-[500] text-start pt-[10px]">
                  Tom Cruise
                </h1>
                <h1 className="text-[18px] font-400 text-start">
                  Founder & Chairman
                </h1>
                <div className="flex mt-[10px]">
                  <TwitterIcon
                    sx={{ textAlign: "start", marginRight: "10px" }}
                  />
                  <TwitterIcon
                    sx={{ textAlign: "start", marginRight: "10px" }}
                  />
                  <InstagramIcon
                    sx={{ textAlign: "start", marginRight: "300px" }}
                  />
                </div>
              </div>
              <div className="bg-[transparent] w-[30%] sm:hidden">
                <img src={User} alt="" />
                <h1 className="text-[30px] font-[500] text-start pt-[10px]">
                  Tom Cruise
                </h1>
                <h1 className="text-[18px] font-400 text-start">
                  Founder & Chairman
                </h1>
                <div className="flex mt-[10px]">
                  <TwitterIcon
                    sx={{ textAlign: "start", marginRight: "10px" }}
                  />
                  <TwitterIcon
                    sx={{ textAlign: "start", marginRight: "10px" }}
                  />
                  <InstagramIcon
                    sx={{ textAlign: "start", marginRight: "300px" }}
                  />
                </div>
              </div>
              <div className="bg-[transparent] w-[30%] sm:hidden">
                <img src={User} alt="" />
                <h1 className="text-[30px] font-[500] text-start pt-[10px]">
                  Tom Cruise
                </h1>
                <h1 className="text-[18px] font-400 text-start">
                  Founder & Chairman
                </h1>
                <div className="flex mt-[10px]">
                  <TwitterIcon
                    sx={{ textAlign: "start", marginRight: "10px" }}
                  />
                  <TwitterIcon
                    sx={{ textAlign: "start", marginRight: "10px" }}
                  />
                  <InstagramIcon
                    sx={{ textAlign: "start", marginRight: "300px" }}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
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

export default About