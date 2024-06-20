import React, { useEffect, useState } from "react";
import hqd from "../../assets/hqd1.svg";
import hgr from "../../assets/hgr.svg";
import zvezda from "../../assets/zvezda.svg";
import moshin from "../../assets/iconmoshin.svg";
import strelka from "../../assets/strelka.svg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";



import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductById,reduceProduct } from "../../counters/counter";

const Card = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [cnt, setCnt] = useState(0);
  const byId = useSelector(state => state.product.products);
  let imageApi = "http://65.108.148.136:8072/images/";
  console.log(byId);

  useEffect(() => {
    dispatch(getProductById(id));
  }, []);


  const handleClick = () => {
    dispatch(reduceProduct(id))
  }
  // const handleClick2 = () => {
  //   byId.quantity -= 1;
  // };
  return (
    <div>
      <div className="pl-[100px] pr-[100px] pt-[40px] pb-[40px]">
        <h1 className="text-[20px] font-[400]">
          <span className="text-[gray]">Account / Gaming / </span> Havic HV G-92
          Gamepad View Cart
        </h1>
        <div className="justify-between flex items-center h-[70vh] mt-[20px]">
          <div className="w-[18%] h-[100%]">
            {byId.images?.map((el) => (
              <img
                className="mt-[10px] w-[100%] rounded-md"
                src={`${imageApi}${el.images}`}
                alt="picture"
              />
            ))}
          </div>
          <div className="w-[47%]  rounded-lg h-[100%] bg-[whitesmoke]">
            <img
              src={`${imageApi}${byId?.images}`}
              className="w-[100%] object-cover mix-blend-multiply rounded-md mt-[80px] "
              alt="picture"
            />
          </div>
          <div className="w-[30%]">
            <h1 className="text-[28px] font-[400]">{byId.productName}</h1>
            <div className="mt-[10px]">
              <img src={zvezda} alt="" />
            </div>
            <h1 className="pt-[10px] text-[30px] font-[600]">${byId.price}</h1>
            <h1 className="pt-[10px] text-[17px] text-[gray] pb-[10px] border-[black] border-b-[1.5px]">
              {byId.description}
            </h1>
            <div className="flex gap-[20px] mt-[20px] items-center">
              <h1 className="text-[20px]">Colours:</h1>
              <div
                className="w-[20px] h-[20px] rounded-full border-[1px] border-[black]"
                style={{ backgroundColor: byId.color }}
              ></div>
            </div>
            <div className="flex items-center gap-[20px] mt-[10px]">
              <h1 className="text-[20px]">Size:</h1>
              <div className="rounded-md w-[50px] hover:bg-[red] hover:transition-[3s] hover:text-[white] h-[40px] border-[2px] text-center pt-[2.5px] text-[18px]">
                xs
              </div>
              <div className="rounded-md w-[50px] hover:bg-[red] hover:transition-[3s] hover:text-[white] h-[40px] border-[2px] text-center pt-[2.5px] text-[18px]">
                S
              </div>
              <div className="rounded-md w-[50px] hover:bg-[red] hover:transition-[3s] hover:text-[white] h-[40px] border-[2px] text-center pt-[2.5px] text-[18px]">
                M
              </div>
              <div className="rounded-md w-[50px] hover:bg-[red] hover:transition-[3s] hover:text-[white] h-[40px] border-[2px] text-center pt-[2.5px] text-[18px]">
                L
              </div>
              <div className="rounded-md hover:bg-[red] hover:transition-[3s] hover:text-[white] w-[50px] h-[40px] border-[2px] text-center pt-[2.5px] text-[18px]">
                XL
              </div>
            </div>
            <div className="flex justify-between items-center mt-[10px]">
              <div className="border-[1px] w-[37%] border-[black] h-[50px] rounded-md">
                <button
                  // onClick={() => handleClick2()}
                  className="w-[30%] h-[100%]  text-[25px] border-r-[1px] hover:bg-[#bebebe] border-[black] "
                >
                  -
                </button>
                <button className="w-[40%] text-[25px]">{byId.quantity}</button>
                <button
                  onClick={() => handleClick()}
                  className="w-[30%] text-[25px] text-[black] border-l-[1px] border-[black] hover:bg-[#bebebe]   h-[100%]"
                >
                  +
                </button>
              </div>
              <button className="w-[40%] h-[50px] bg-[red] hover:bg-red-600 rounded-md text-[white] text-[18px]">
                Buy Now
              </button>
              <button className="w-[20%] border-[1px]  hover:bg-[#bebebe]  h-[50px] border-[black] rounded-md text-[20px]">
                <FavoriteIcon
                  sx={{ width: "28px", height: "28px", color: "gray" }}
                />
              </button>
            </div>
            <div className="border h-[150px] mt-[20px] border-[black] rounded-md">
              <div className="h-[50%] flex justify-between items-center p-[20px] border-b border-[black]">
                <div className="w-[20%]">
                  <img className="w-[80%]" src={moshin} alt="" />
                </div>
                <div className="w-[77%]">
                  <h1 className="text-[20px] font-[500]">Free Delivery</h1>
                  <h1 className="pt-[0px] text-[gray]">
                    Enter your postal code for Delivery Availability
                  </h1>
                </div>
              </div>
              <div className="h-[50%] flex justify-between items-center p-[20px]  border-[black]">
                <div className="w-[20%]">
                  <img className="w-[80%]" src={strelka} alt="" />
                </div>
                <div className="w-[77%]">
                  <h1 className="text-[20px] font-[500]">Return Delivery</h1>
                  <h1 className="pt-[0px] text-[gray]">
                    Free 30 Days Delivery Returns. Details
                  </h1>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;