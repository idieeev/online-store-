import React from "react";

const Profile = () => {
  return (
    <div>
      <div className="pl-[100px] pr-[100px] pt-[50px] pb-[50px] sm:p-[10px]">
        <h1 className="text-[20px] font-[500]">
          <span className="text-[20px] text-[gray]">Home / </span>
          Contact
        </h1>
        <div className="flex justify-between items-center sm:flex-wrap">
          <div className="w-[25%] p-[10px] sm:w-[100%] sm:p-[10px]">
            <h1 className="text-[20px] font-[600] pt-[10px]">
              Manage My Account
            </h1>
            <h1 className="pl-[20px] cursor-pointer hover:text-[#4f4e4e] text-[18px] pt-[10px] font-[500] text-[gray]">
              My Profile
            </h1>
            <h1 className="pl-[20px] cursor-pointer hover:text-[#4f4e4e] text-[18px] pt-[10px] font-[500] text-[gray]">
              Address Book
            </h1>
            <h1 className="pl-[20px] cursor-pointer hover:text-[#4f4e4e] text-[18px] pt-[10px] font-[500] text-[gray]">
              My Payment Options
            </h1>
            <h1 className="text-[20px] font-[600] pt-[10px]">My Orders</h1>
            <h1 className="pl-[20px] cursor-pointer text-[18px] hover:text-[#4f4e4e] pt-[10px] font-[500] text-[gray]">
              My Returns
            </h1>
            <h1 className="pl-[20px] cursor-pointer hover:text-[#4f4e4e] text-[18px] pt-[10px] font-[500] text-[gray]">
              My Cancellations
            </h1>
            <h1 className="text-[20px] font-[600] pt-[10px]">My WishList</h1>
          </div>
          <div className="w-[69%] p-[20px] sm:w-[100%]">
            <h1 className="text-[20px] font-[500] text-red-500">Profile</h1>
            <div className="flex justify-between flex-wrap gap-[20px] mt-[10px]">
              <div className="w-[46%] sm:w-[100%]">
                <fieldset className="text-[gray] text-[20px] border-[gray] border-[2px] rounded-md pl-[10px]">
                  <legend>First name</legend>
                  <input
                    className="bg-[transparent] text-[gray] text-[20px] outline-none w-[100%] h-[40px]"
                    type="text"
                  />
                </fieldset>
              </div>
              <div className="w-[46%] sm:w-[100%]">
                <fieldset className="text-[gray] text-[20px] border-[gray] border-[2px] rounded-md pl-[10px]">
                  <legend>Last name</legend>
                  <input
                    className="bg-[transparent] text-[gray] text-[20px] outline-none w-[100%] h-[40px]"
                    type="text"
                  />
                </fieldset>
              </div>
              <div className="w-[46%] sm:w-[100%]">
                <fieldset className="text-[gray] text-[20px] border-[gray] border-[2px] rounded-md pl-[10px]">
                  <legend>Email address</legend>
                  <input
                    className="bg-[transparent] text-[gray] text-[20px] outline-none w-[100%] h-[40px]"
                    type="text"
                  />
                </fieldset>
              </div>
              <div className="w-[46%] sm:w-[100%]">
                <fieldset className="text-[gray] text-[20px] border-[gray] border-[2px] rounded-md pl-[10px]">
                  <legend>Street address</legend>
                  <input
                    className="bg-[transparent] text-[gray] text-[20px] outline-none w-[100%] h-[40px]"
                    type="text"
                  />
                </fieldset>
              </div>
            </div>
            <div className="mt-[20px]">
              <h1 className="text-[20px] font-[500] ">Password Changes</h1>
              <div className="flex justify-between flex-wrap gap-[20px] mt-[10px]">
                <div className="w-[100%]">
                  <input
                    placeholder="Current passwod"
                    className="bg-[transparent] border-[2px] pl-[10px] border-[#8b8b8b] rounded-md h-[60px] text-[gray] text-[20px] outline-none w-[100%] "
                    type="text"
                  />
                </div>
                <div className="w-[46%] sm:w-[100%]">
                  <input
                    placeholder="New passwod"
                    className="bg-[transparent] border-[2px] pl-[10px] border-[#8b8b8b] rounded-md h-[60px] text-[gray] text-[20px] outline-none w-[100%] "
                    type="text"
                  />
                </div>
                <div className="w-[46%] sm:w-[100%]">
                  <input
                    placeholder="Confirm new passwod"
                    className="bg-[transparent] border-[2px] pl-[10px] border-[#8b8b8b] rounded-md h-[60px] text-[gray] text-[20px] outline-none w-[100%] "
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="flex mt-[20px] mb-[20px] gap-[20px]">
              <button className="text-[18px] sm:ml-[10px] ml-[400px] rounded-md w-[200px] h-[50px] hover:bg-[#d3d1d1] hover:duration-500">
                Cancel
              </button>
              <button className="w-[200px] h-[50px] hover:bg-red-600 rounded-md bg-red-500 text-[18px] text-[white]">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
