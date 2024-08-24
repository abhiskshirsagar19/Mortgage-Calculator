import React from "react";
import SliderComponent from "./common/SliderComponent";
import { Stack } from "@mui/material";

export default function SliderSelect({ data, setData }) {
  const bank_limit = 10000;
  return (
    <>
      <Stack my={1.5}>
        <SliderComponent
          label="Home Value"
          defaultValue={data.homeValue}
          value={data.homeValue}
          min={1000}
          max={bank_limit}
          step={100}
          onChange={(e, value) =>
            setData({
              ...data,
              downPayment: value * 0.2,
              loanAmount: value * 0.8,
              homeValue: value,
            })
          }
          unit="$"
          amount={data.homeValue}
        />
        <SliderComponent
          label="Down Payment"
          defaultValue={data.downPayment}
          value={data.downPayment}
          min={0}
          max={data.homeValue}
          step={100}
          onChange={(e, value) => {
            setData({
              ...data,
              loanAmount: data.homeValue - value,
              downPayment: value,
            });
          }}
          unit="$"
          amount={data.downPayment}
        />
        <SliderComponent
          label="Loan Amount"
          min={0}
          max={data.homeValue}
          defaultValue={data.loanAmount}
          value={data.loanAmount}
          step={100}
          onChange={(e, value) =>
            setData({
              ...data,
              downPayment: data.homeValue - value,
              loanAmount: value,
            })
          }
          unit="$"
          amount={data.loanAmount}
        />
        <SliderComponent
          label="Interest Rate"
          min={2}
          max={18}
          defaultValue={data.interestRate}
          value={data.interestRate}
          step={0.5}
          onChange={(e, value) => setData({ ...data, interestRate: value })}
          unit="%"
          amount={data.interestRate}
        />
      </Stack>
      {/* <SliderComponent defaultValue={90} min={40} max={300} />
      <SliderComponent defaultValue={100} min={10} max={500} /> */}
    </>
  );
}
