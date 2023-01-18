import React from "react";
import BoilVerdict from "./BoilingVerdict";
import { convert, toCelsius, toFarenheit } from "./lib/converter";
import TemperatureInput from "./TemperatureInput";

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
      scale === 'f' ? convert(temperature, toCelsius) : temperature;
    const farenheit =
      scale === 'c' ? convert(temperature, toFarenheit) : temperature;
    return (
      <>
        <br />
        <TemperatureInput
          scale='c'
          temperature={celsius}
          onTemperatureChange={this.handleChange}
        />
        <br />
        <TemperatureInput 
            scale='f'
            temperature={farenheit}
            onTemperatureChange={this.handleChange}
        />
        <BoilVerdict celsius={parseFloat(celsius)}/>
      </>
    );
  }
}
