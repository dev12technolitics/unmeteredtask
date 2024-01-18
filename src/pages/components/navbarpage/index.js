import { TextField } from "@mui/material";
import { ImBrightnessContrast } from "react-icons/im";
import { IoMdNotifications, IoMdTimer } from "react-icons/io";
import { IoStarHalfSharp } from "react-icons/io5";
import { MdOutlineComputer } from "react-icons/md";

export default function Navbarpage() {
  return (
    <div className="flex w-full py-2 ml-[173px] justify-between items-center">
      <div className="flex justify-between items-center">
        <MdOutlineComputer size="20px" style={{ color: "black" }} />
        <IoStarHalfSharp
          className="ml-3"
          size="20px"
          style={{ color: "black" }}
        />
        <h6 className="text-[#28252675] ml-4 text-[13px]">Dashboard</h6>
        <span className="px-3 text-black">/</span>
        <h6 className="text-[#28252629] text-[13px]">Defualt</h6>
      </div>

      <div className="mr-2 flex justify-between items-center">
        <TextField variant="outlined" placeholder="Search..." size="small" />

        <ImBrightnessContrast
          className="mx-2"
          size="20px"
          style={{ color: "black" }}
        />
        <IoMdNotifications
          className="mx-2"
          size="20px"
          style={{ color: "black" }}
        />
        <IoMdTimer className="mx-2" size="20px" style={{ color: "black" }} />
        <MdOutlineComputer
          className="mx-2"
          size="20px"
          style={{ color: "black" }}
        />
      </div>
    </div>
  );
}
