import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

BoxIcon.propTypes = {
  title: PropTypes.string,
  total: PropTypes.number,
  percent: PropTypes.number,
  color: PropTypes.number,
  reaacticon: PropTypes.string,
};

export default function BoxIcon({ title, percent, total, color, reaacticon }) {
  return (
    <div
      style={{
        backgroundColor: `${color}`,
        padding: "20px",
        borderRadius: "0.5rem",
      }}
    >
      <Typography variant="subtitle2" className="text-[#00000091]">
        {title}
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <h1 className="text-2xl">{total}</h1>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h6 className="text-[#00000091]">{percent}</h6>

          {reaacticon === "down" ? <FaArrowTrendUp /> : <FaArrowTrendDown />}
        </Box>
      </Box>
    </div>
  );
}
