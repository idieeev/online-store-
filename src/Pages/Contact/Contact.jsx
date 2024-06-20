import React from "react";

import image1 from "../../assets/icons-phone.svg";
import image2 from "../../assets/icons-mail.svg";

const Contact = () => {
  return (
    <div>
      <div className="pl-[100px] pr-[100px] pt-[50px] pb-[150px] sm:p-[10px]">
        <h1 className="text-[20px] font-[500]">
          <span className="text-[20px] text-[gray]">Home / </span>
          Contact
        </h1>
        <div className="flex justify-between items-center mt-[50px] sm:flex-wrap sm:mt-[10px]">
          <div className="p-[20px] shadow-xl rounded-lg w-[30%] shadow-[#a0a0a0] sm:w-[100%] sm:shadow-sm">
            <div className="border-b-[2px] border-[#717171] pt-[10px] pb-[30px]">
              <div className="flex items-center gap-[20px]">
                <img src={image1} alt="" />
                <h1 className="text-[25px] font-[400]">Call To Us</h1>
              </div>
              <h1 className="text-[18px] pt-[10px]">
                We are available 24/7, 7 days a week.
              </h1>
              <h1 className="text-[18px] pt-[10px]">Phone: +8801611112222</h1>
            </div>
            <div className="border-b-[2px] pt-[10px] pb-[10px] mt-[30px]">
              <div className="flex items-center gap-[20px]">
                <img src={image2} alt="" />
                <h1 className="text-[25px] font-[400]">Write To US</h1>
              </div>
              <h1 className="text-[18px] pt-[20px]">
                Fill out our form and we will contact you within 24 hours.
              </h1>
              <h1 className="text-[18px] pt-[10px]">
                Emails: customer@exclusive.com
              </h1>
              <h1 className="text-[18px] pt-[10px]">
                Emails: support@exclusive.com
              </h1>
            </div>
          </div>
          <div className="w-[65%] rounded-lg p-[20px] shadow-xl sm:w-[100%] sm:mt-[20px]">
            <div className="flex justify-between items-center">
              <input
                placeholder="Name"
                className="w-[31%] text-[20px] border-[#959595] text-[gray] pl-[10px] rounded-lg h-[55px] border-[2px] bg-[transparent] outline-none"
                type="text"
              />
              <input
                placeholder="Email"
                className="w-[31%] text-[20px] border-[#959595] text-[gray] pl-[10px] rounded-lg h-[55px] border-[2px] bg-[transparent] outline-none"
                type="text"
              />
              <input
                placeholder="Phone"
                className="w-[31%] text-[20px] border-[#959595] text-[gray] pl-[10px] rounded-lg h-[55px] border-[2px] bg-[transparent] outline-none"
                type="text"
              />
            </div>
            <div className="mt-[30px]">
              <textarea
                placeholder="Your Massage"
                className="w-[100%] bg-[transparent] h-[30vh] border-[#959595] rounded-lg text-[20px] text-[gray] outline-none p-[10px] border-[2px]"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="mt-[30px] mb-[30px]">
              <button className="bg-red-500 hover:bg-red-700 text-[white] w-[200px] h-[55px] text-[18px] rounded-md sm:ml-[140px]  ml-[567px]">
                Send Massage
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
