import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "../lotties/77-im-thirsty.json";

class ControlledLottie extends Component {
  state = {
    isStopped: false,
    isPaused: false
  };

  render() {
    const buttonStyle = {
      display: "inline-block",
      margin: "10px auto",
      marginRight: "10px",
      border: "none",
      color: "white",
      backgroundColor: "#647DFF",
      borderRadius: "2px",
      fontSize: "15px"
    };

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    const { isStopped, isPaused } = this.state;
    return (
      <div className="controlled">
        <h1>Lottie Bebida Controlada</h1>
        <p>Usando el state para controlar el lottie</p>
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
          isStopped={isStopped}
          isPaused={isPaused}
        />
        <button
          style={buttonStyle}
          onClick={() => this.setState({ isStopped: true })}
        >
          Stop
        </button>
        <button
          style={buttonStyle}
          onClick={() => this.setState({ isStopped: false, isPaused: false })}
        >
          Play
        </button>
        <button
          style={buttonStyle}
          onClick={() => this.setState({ isPaused: !this.state.isPaused })}
        >
          Pause
        </button>
      </div>
    );
  }
}

export default ControlledLottie;
