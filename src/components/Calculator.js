import React from "react";
import BoilVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";
import { convert, toCelcius, toFarenheit } from "./lib/converter";

export default class Calculator extends React.Component {
  state = {
    temperature: "",
    scale: "c",
  };

  handleChange = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale,
    });
  };
  render() {
    const { temperature, scale } = this.state;
    const celsius =
      scale === "f" ? convert(temperature, toCelcius) : temperature;
    const farenheit =
      scale === "f" ? convert(temperature, toFarenheit) : temperature;
    return (
      <>
        <br />
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleChange}
        />
        <br />
        <TemperatureInput 
            scale="f"
            temperature={farenheit}
            onTemperatureChange={this.handleChange}
        />
        {/* <BoilVerdict celcius={parseFloat(temperature)}/> */}
      </>
    );
  }
}
