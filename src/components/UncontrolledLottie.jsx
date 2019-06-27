import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "../lotties/arepastronauta.json";

class UncontrolledLottie extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    return (
      <div>
        <h1>Arepastronauta</h1>
        <p>Flota en el espacio libre de manipulacion en un loop espacial.</p>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    );
  }
}

export default UncontrolledLottie;
