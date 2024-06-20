import React, { useEffect, useState } from "react";
import {
  getCard,
  deleteCart,
  clearCart,
  increase,
} from "../../counters/counter";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { IconButton } from "@mui/material";

const Korzina = () => {
  const dispatch = useDispatch();
  let imageApi = "http://65.108.148.136:8072/images/";
  const [avarages, setAvarages] = useState(0);
  const product = useSelector((state) => state.product.productsCart);
  console.log(product);

  useEffect(() => {
    dispatch(getCard());
  }, []);

  useEffect(() => {
    let total = 0;
    product?.forEach((el) => {
      total += el.product.price * el.quantity;
    });
    setAvarages(total);
    dispatch(getCard());
  }, [avarages]);

  return (
    <div>
      <div className="pl-[100px] pr-[100px] pt-[30px] pb-[30px] sm:p-[10px]">
        <h1 className="text-[20px]">
          <span className="text-[gray]">Home /</span> Cart
        </h1>
        <table className="w-[100%]">
          <thead className="h-[60px]">
            <tr>
              <th className=" text-[17px] text-[gray] text-center">Product</th>
              <th className=" text-[17px] text-[gray] text-center">Price</th>
              <th className=" text-[17px] text-[gray] text-center">Quantity</th>
              <th className=" text-[17px] text-[gray] text-center">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {product.map((elem) => {
              return (
                <tr className="bg-[whitesmoke] border shadow-xl  rounded-xl ">
                  <td className="w-[25%] h-[100px]">
                    <div className="flex w-[90%] m-[auto] items-center gap-[20px] p-[20px  ]">
                      <img
                        className="w-[70px] h-[70px] object-cover rounded-lg"
                        src={`${imageApi}${elem.product.image}`}
                        alt="picture"
                      />
                      <h1 className="text-[18px] sm:hidden">
                        {elem.product.productName}
                      </h1>
                    </div>
                  </td>
                  <td className="text-center text-[18px]">
                    ${elem.product.price}
                  </td>
                  <td>
                    <input
                      onClick={() => dispatch(increase(elem.id))}
                      className="w-[50px] outline-none block m-[auto] h-[50px] text-center border-[2px] rounded-md bg-[transparent text-[18px]"
                      value={elem.quantity}
                      type="number"
                    />
                  </td>
                  <td className="text-center text-[18px] font-[400]">
                    <h1>{(elem.product.price / 10) * elem.quantity}$</h1>
                  </td>
                  <td>
                    <IconButton onClick={() => dispatch(deleteCart(elem.id))}>
                      <HighlightOffIcon
                        sx={{ marginLeft: "00px", color: "red" }}
                      />
                    </IconButton>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex justify-between items-center pt-[10px] pb-[10px] mt-[20px] sm:flex-wrap">
          <Link to={"/all/product"}>
            <button className="border-[2px] text-[18px] sm:w-[150px] border-[black] w-[200px] h-[50px] rounded-[5px]">
              Return To Shop
            </button>
          </Link>
          <div className="flex gap-[30px] sm:flex-wrap sm:items-center">
            <button className="border-[2px] sm:block sm:m-[auto] sm:w-[150px]  text-[18px] border-[black] w-[200px] h-[50px] rounded-[5px]">
              Update Cart
            </button>
            <button
              onClick={() => dispatch(clearCart())}
              className="border-[2px] sm:block sm:m-[auto] sm:mt-[10px] text-[18px] border-[red] text-[red] w-[200px] h-[50px] rounded-[5px]"
            >
              Remove all
            </button>
          </div>
        </div>
        <div className="flex justify-between mt-[20px] sm:flex-wrap">
          <div className="flex gap-[30px] w-[38%] sm:w-[100%]">
            <button className="border-[2px] border-[black] text-[18px] w-[250px] h-[50px] rounded-[5px]">
              Coupon Code
            </button>
            <button className="border-[2px] border-[red] text-[18px] text-[red] w-[150px] h-[50px] rounded-[5px]">
              Apply
            </button>
          </div>
          <div className="w-[35%] border-[2px] border-[black] bg-[whitesmoke] rounded-md p-[20px] sm:w-[100%] sm:mt-[20px]">
            <h1 className="text-[20px] font-[500]">Cart Total</h1>
            <div className="flex justify-between items-center mt-[10px]">
              <h1 className="text-[18px] font-[500]">Subtotal:</h1>
              <h1 className="text-[18px] font-[500]">$1750</h1>
            </div>
            <div className="flex justify-between items-center border-b-[2px] pb-[15px] border-[black]">
              <h1 className="text-[18px] font-[500]">Shipping:</h1>
              <h1 className="text-[18px] font-[500]">free</h1>
            </div>
            <div className="flex justify-between items-center pt-[10px]">
              <h1 className="text-[20px] font-[500]">Total:</h1>
              <h1 className="text-[20px] font-[500]">{avarages/10}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Korzina;
