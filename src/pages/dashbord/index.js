import { Grid } from "@mui/material";
import { BsDashLg } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { LuDot } from "react-icons/lu";
import BoxIcon from "../components/BoxIcon";
import Image from "../image/image.png";
import imagethree from "../image/imagethree.png";
import ImageTwo from "../image/imagetwo.png";

const socialIcons = [
  {
    id: 1,
    socialName: "Google",
    count: 2,
  },
  {
    id: 2,
    socialName: "YouTube",
  },
  {
    id: 3,
    socialName: "Instagram",
    count: 2,
  },
  {
    id: 4,
    socialName: "Pinterest",
  },
  {
    id: 5,
    socialName: "Facebook",
    count: 2,
  },
  {
    id: 6,
    socialName: "Twiter",
  },
];

const loctionName = [
  {
    id: 1,
    name: "United States",
    number: "38.4",
    color: "aquamarine",
  },
  {
    id: 2,
    name: "canada",
    number: "8.1",
    color: "bisque",
  },
  {
    id: 3,
    name: "mexico",
    number: "23.8",
    color: "blue",
  },
  {
    id: 4,
    name: "other",
    number: "23.8",
    color: "black",
  },
];

export default function Dashbord() {
  return (
    <div className="">
      <div className="flex justify-between items-center w-full py-4">
        <div className="">
          <h6 className="text-[#28252675]">Overview</h6>
        </div>

        <div className="flex justify-center items-center">
          <h5 className="mr-2 text-[#28252675]">Today</h5>
          <IoIosArrowDown className="text-[#28252675]" />
        </div>
      </div>

      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <BoxIcon
            title="view"
            percent="11.02%"
            total="7,265"
            color="#00cfff26"
            reaacticon="up"
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <BoxIcon
            title="view"
            percent="11.02%"
            total="7,265"
            color="#005bff26"
            reaacticon="down"
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <BoxIcon
            title="view"
            percent="11.02%"
            total="7,265"
            reaacticon="up"
            color="#00cfff26"
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <BoxIcon
            title="view"
            percent="11.02%"
            total="7,265"
            color="#005bff26"
            reaacticon="down"
          />
        </Grid>
      </Grid>

      <div className="my-4">
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <div
              style={{
                backgroundColor: "#9cb2bf1c",
                padding: "20px",
                borderRadius: "0.5rem",
              }}
            >
              <div className="flex">
                <h5>Total Users</h5>
                <h5 className="text-[#00000091] mx-2">Total Projects</h5>
                <h5 className="text-[#00000091] mx-2">Operating Status</h5>
                <hr
                  className="w-[20px] rotate-90 border-2-[#0000004f] mt-[13px]"
                  style={{ border: "1px solid #0000004f" }}
                />

                <div className="flex justify-center items-center">
                  <LuDot size="25px" style={{ color: "black" }} />
                  <h5 className="text-[14px] text-[#00000091]">This Year</h5>
                </div>

                <div className="flex justify-center items-center">
                  <LuDot size="25px" style={{ color: "aqua" }} />
                  <h5 className="text-[14px] text-[#00000091]">Last Year</h5>
                </div>
              </div>

              <div className="mt-2 h-[212px]">
                <img
                  src={Image}
                  width="100%"
                  style={{
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    height: "100%",
                  }}
                />
              </div>
            </div>
          </Grid>

          <Grid item xs={12} md={4}>
            <div
              style={{
                backgroundColor: "#9cb2bf1c",
                padding: "20px",
                borderRadius: "0.5rem",
              }}
            >
              <h5>Traffic by Website</h5>

              {socialIcons.map((item, index) => (
                <div key={index} className="flex justify-between mr-3 my-3">
                  <div className="text-[#00000091] text-[15px]">
                    {item.socialName}
                  </div>

                  {item.count === 2 ? (
                    <div className="flex justify-center items-start">
                      <BsDashLg />
                      <BsDashLg className="text-[#00000091]" />
                      <BsDashLg className="text-[##0000002b]" />
                    </div>
                  ) : (
                    <div className="flex justify-center items-start">
                      <BsDashLg />
                      <BsDashLg className="text-[#00000091]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
      </div>

      <div className="my-4">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <div
              style={{
                backgroundColor: "#9cb2bf1c",
                padding: "20px",
                borderRadius: "0.5rem",
              }}
            >
              <h5>Traffic by Device</h5>

              <div className="mt-2 h-[212px]">
                <img
                  src={ImageTwo}
                  width="100%"
                  style={{
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    height: "100%",
                  }}
                />
              </div>
            </div>
          </Grid>

          <Grid item xs={12} md={6}>
            <div
              style={{
                backgroundColor: "#9cb2bf1c",
                padding: "20px",
                borderRadius: "0.5rem",
              }}
            >
              <h5>Traffic by Loction</h5>
              <Grid container>
                <Grid item xs={12} md={5}>
                  <div className="mt-2 h-[212px]">
                    <img
                      src={imagethree}
                      width="100%"
                      style={{
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        height: "100%",
                      }}
                    />
                  </div>
                </Grid>

                <Grid item xs={12} md={7}>
                  <div className="mt-8">
                    {loctionName.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center mb-4 "
                      >
                        <div className="flex justify-center items-center">
                          <LuDot
                            size="25px"
                            style={{ color: `${item.color}` }}
                          />
                          <h5 className="text-[#00000091]">{item.name}</h5>
                        </div>

                        <h5 className="text-[#00000091]">{item.number}%</h5>
                      </div>
                    ))}
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
