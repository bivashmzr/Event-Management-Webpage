import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `₹${value}`;
}

export default function RangeSlider({ value, setValue }) {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      {/* Price Text */}
      <div className="flex justify-between mb-2">
        <p className="font-bold text-[15px]">Price Range</p>

        <p className="text-[15px] font-medium">
          ₹{value[0]} - ₹{value[1]}
        </p>
      </div>

      {/* Slider */}
      <Slider
        getAriaLabel={() => "Price range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={0}
        max={5000}
        sx={{
          height: 7,
        }}
      />
    </Box>
  );
}
