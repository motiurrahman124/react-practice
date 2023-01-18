import React from "react";

const scaleNames = {
  c: "Celsius",
  f: "Farenheit",
};
export default function TemperatureInput({
  temperature,
  scale,
  onTemperatureChange,
}) {
  return (
    <fieldset>
      <legend>Enter Temperature in {scaleNames[scale]}</legend>
      <input
        type="text"
        value={temperature}
        onChange={(e) => onTemperatureChange(e, scale)}
      />
    </fieldset>
  );
}
