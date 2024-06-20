import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import GoogleIcon from "@mui/icons-material/Google";
import SendIcon from "@mui/icons-material/Send";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import logo from "../../assets/logo.svg";


import { useFormik } from "formik";
import { axiosRequest } from "../../utils/axiosRequest";
import { saveToken } from "../../utils/token";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const API = "http://65.108.148.136:8072/";
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit: async () => {
      try {
        let { data } = await axiosRequest.post(`${API}Account/login`, formik.values);
        if (data.statusCode == 200) {
          saveToken(data.data);
          navigate("/all");
        }
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div>
      <div className="flex justify-between items-center pt-[20px] pb-[20px] border-b-[2px] pl-[100px] pr-[100px] sm:p-[10px]">
        <div className="sm:block hidden sm:w-[10%]">
          <MenuIcon />
        </div>
        <div className="block sm:w-[30%]">
          <img src={logo} alt="" />
        </div>
        <div className="flex gap-[30px] items-center sm:hidden">
          <Link to={"/all"}>
            <h1 className="text-[20px] font-[400] hover:border-[black]  hover:border-b-[2px] hover:duration-500">
              Home
            </h1>
          </Link>
          <h1 className="text-[20px] font-[400] hover:border-[black]  hover:border-b-[2px] hover:duration-500">
            Contact
          </h1>
          <Link to={"/all/about"}>
            <h1 className="text-[20px] font-[400] hover:border-[black]  hover:border-b-[2px] hover:duration-500">
              About
            </h1>
          </Link>
          <Link to={"/login"}>
            <h1 className="h1 text-[20px] p-[5px] font-[400] hover:border-[black]  hover:border-b-[2px] hover:duration-500">
              Login
            </h1>
          </Link>
          <Link to={"/registration"}>
            <h1 className="text-[20px] font-[400] hover:border-[black]  hover:border-b-[2px] hover:duration-500">
              Sign Up
            </h1>
          </Link>
        </div>
        <div className="flex w-[30%] sm:w-[30%] justify-between items-center">
          <div className="w-[60%] bg-[whitesmoke] rounded-lg sm:hidden ">
            <input
              placeholder="What are you looking for?"
              className="w-[80%] text-[gray] h-[40px] rounded-lg pl-[10px] bg-[whitesmoke] outline-none"
              type="text"
            />
            <SearchIcon sx={{ width: "20%" }} />
          </div>
          <div className="w-[30%] sm:w-[100%] gap-[15px] flex">
            <FavoriteBorderIcon sx={{ width: "30px", height: "30px" }} />
            <ShoppingCartIcon sx={{ width: "30px", height: "30px" }} />
            <Link to={"all/profile"}>
              <PermIdentityIcon sx={{ width: "30px", height: "30px" }} />
            </Link>
          </div>
        </div>
      </div>
      <div className="p-[50px] sm:p-[10px]">
        <h1 className="text-[40px] font-[400] text-center">
          Log in to Exclusive
        </h1>
        <h1 className="text-[18px] font-[400] pt-[10px] text-center">
          Enter your details below
        </h1>
        <div className="p-[10px] w-[500px] m-[auto] mt-[20px] rounded-lg sm:w-[100%]">
          <form onSubmit={formik.handleSubmit}>
            <input
              name="userName"
              onChange={formik.handleChange}
              value={formik.values.userName}
              className="w-[80%] sm:w-[90%] text-[20px] text-[gray] mt-[10px] outline-none block m-[auto] h-[60px] border-[2px] rounded-lg pl-[10px]"
              placeholder="Email or phone number"
              type="text"
            />
            <input
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="w-[80%] sm:w-[90%] text-[20px] text-[gray] mt-[10px] outline-none block m-[auto] h-[60px] border-[2px] rounded-lg pl-[10px]"
              placeholder="Password"
              type="password"
            />
            <input
              value={"Log In"}
              className="w-[80%] cursor-pointer sm:w-[90%] text-[18px] font-[600] text-[white] block m-[auto] bg-[red] rounded-lg h-[60px] mt-[30px]"
              type="button"
            />
            <button
              type="submit"
              className="w-[80%] sm:w-[90%] text-[red] text-[18px] font-[600]  block m-[auto] bg-[transparent] border-[2px] rounded-lg h-[60px] mt-[10px]"
            >
              Forget Password?
            </button>
          </form>
        </div>
      </div>
      <div className="pl-[100px] justify-between pr-[100px] flex pt-[30px] pb-[30px] bg-[black]  sm:p-[10px] sm:flex-wrap">
        <div className="w-[20%] text-[white] sm:w-[100%] p-[10px]">
          <h1 className="text-[20px] font-[600]">Exclusive</h1>
          <h1 className="text-[18px] font-[600] pt-[10px]">Subscribe</h1>
          <h1 className="text-[17px] font-[400] pt-[10px]">
            Get 10% off your first order
          </h1>
          <div className="flex border-[2px] rounded-lg bg-[black] p-[10px] mt-[10px]">
            <input
              placeholder="Enter your email"
              className="w-[80%] rounded-lg bg-[black] outline-none text-[18px]"
              type="text"
            />
            <SendIcon />
          </div>
        </div>
        <div className="text-[white] w-[19%] sm:w-[100%] sm:p-[10px] ">
          <h1 className="text-[20px] font-[600]">Support</h1>
          <h1 className="text-[18px] font-[600] pt-[10px] text-[#c4c2c2]">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </h1>
          <h1 className="text-[17px] font-[600] pt-[10px] text-[#c4c2c2]">
            exclusive@gmail.com
          </h1>
          <h1 className="text-[16px] font-[400] text-[#c4c2c2]">
            +88015-88888-9999
          </h1>
        </div>
        <div className="text-[white] w-[19%] sm:w-[45%] sm:p-[10px]">
          <h1 className="text-[20px] font-[600]">Account</h1>
          <h1 className="text-[18px] font-[600] pt-[10px] text-[#c4c2c2]">
            My Account
          </h1>
          <h1 className="text-[17px] font-[600] pt-[10px] text-[#c4c2c2]">
            Cart
          </h1>
          <h1 className="text-[16px] font-[400] text-[#c4c2c2] pt-[10px]">
            Wishlist
          </h1>
          <h1 className="text-[16px] font-[400] text-[#c4c2c2] pt-[10px]">
            Shop
          </h1>
        </div>
        <div className="text-[white] w-[19%] sm:w-[45%] sm:p-[10px]">
          <h1 className="text-[20px] font-[600]">Quick Link</h1>
          <h1 className="text-[18px] font-[600] pt-[10px] text-[#c4c2c2]">
            Privacy Policy
          </h1>
          <h1 className="text-[17px] font-[600] pt-[10px] text-[#c4c2c2]">
            Terms Of Use
          </h1>
          <h1 className="text-[16px] font-[400] text-[#c4c2c2] pt-[10px]">
            FAQ
          </h1>
          <h1 className="text-[16px] font-[400] text-[#c4c2c2] pt-[10px]">
            Contact
          </h1>
        </div>
        <div className="text-[white] w-[15%] sm:w-[100%] p-[10px]">
          <h1 className="text-[20px] font-[600]">Social</h1>
          <div className="flex gap-[20px] mt-[10px]">
            <FacebookIcon sx={{ width: "30px", height: "30px" }} />
            <TwitterIcon sx={{ width: "30px", height: "30px" }} />
            <InstagramIcon sx={{ width: "30px", height: "30px" }} />
            <InstagramIcon sx={{ width: "30px", height: "30px" }} />
          </div>
        </div>
      </div>
      <div className="p-[20px] bg-[black] border-t-[1px] border-[gray]">
        <h1 className="text-[gray] text-center ">
          Copyright Rimel 2022. All right reserved
        </h1>
      </div>
    </div>
  );
};
export default Login;
