import React from "react";
import Slider from "@mui/material/Slider";
import { Stack, Typography } from "@mui/material";
export default function SliderComponent({
  defaultValue,
  min,
  max,
  step,
  onChange,
  value,
  label,
  amount,
  unit,
}) {
  return (
    <>
      <Stack gap={1}>
        <Typography variant="subtitle2">{label}</Typography>
        <Typography variant="h5">
          {" "}
          {unit}
          {amount}
        </Typography>
      </Stack>
      <Slider
        defaultValue={defaultValue}
        min={min}
        max={max}
        aria-label="Default"
        valueLabelDisplay="auto"
        marks
        step={step}
        onChange={onChange}
        value={value}
      />
      <Stack direction="row" justifyContent="space-between">
        <Typography color="text.secondary">
          {unit}
          {min}
        </Typography>
        <Typography color="text.secondary">
          {unit}
          {max}
        </Typography>
      </Stack>
    </>
  );
}
