import { Link } from "@mui/material";
import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { LuDot } from "react-icons/lu";

const pathName = [
  {
    id: 1,
    name: "OverView",
  },
  {
    id: 2,
    name: "Banner",
  },
  {
    id: 3,
    name: "Blog",
  },
  {
    id: 4,
    name: "Projects",
  },
];

export default function Acoordions() {
  const [subShow, setSubShow] = useState(false);

  return (
    <div className="">
      <div className="flex items-center justify-between pl-3 mb-3">
        <h5 className="text-[#28252675]">Favorities</h5>
        <h5 className="text-[#28252629] ml-3 ">Recenty</h5>
      </div>

      {pathName.map((item, index) => (
        <div key={index} className="flex justify-start mb-2 pl-1 items-center">
          <LuDot size="25px" style={{ color: "#28252629" }} />
          <h6 className="text-[14px] text-[#00000091]">{item.name}</h6>
        </div>
      ))}

      <div className="flex items-center justify-between pl-3 my-3">
        <h5 className="text-[#28252675]">Dashboard</h5>
      </div>

      <div
        onClick={() => setSubShow(!subShow)}
        className=" ml-auto px-3 flex items-center mb-3"
      >
        <span
          className={`${
            subShow === true
              ? "rotate-90 transition-all mr-2 ml-[-8px]"
              : "mr-2 ml-[-8px]"
          }`}
        >
          <BiChevronRight className="text-[#28252675]" size="28px" />
        </span>

        <FaUserCircle
          className="ml-[-7px] mr-3  text-[#28252675]"
          size="18px"
        />

        <h6 className="text-[#28252675] text-[15px]">User</h6>
      </div>

      {subShow ? (
        <>
          <Link href="/">
            {pathName.map((item, index) => (
              <div
                key={index}
                className="flex justify-start mb-2 pl-4 items-center"
              >
                <LuDot size="25px" style={{ color: "#28252629" }} />
                <h6 className=" text-[14px] text-[#00000091]">{item.name}</h6>
              </div>
            ))}
          </Link>
        </>
      ) : null}

      {pathName.map((item, index) => (
        <div key={index} className="flex justify-start mb-2 pl-1 items-center">
          <LuDot size="25px" style={{ color: "#28252629" }} />
          <h6 className="text-[14px] text-[#00000091]">{item.name}</h6>
        </div>
      ))}
    </div>
  );
}
