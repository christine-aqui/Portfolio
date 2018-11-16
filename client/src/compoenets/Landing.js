import React, { Component } from "react";
import RocketGirl from "./image/rocket1.gif";
import { Animated } from "react-animated-css";

const style = {
  landing: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    margin: "auto"
  },
  textStyle: {
    // textAlign: "-webkit-center",
    textAlign: "center",
    color: "rgb(72,61,139)"
  },
  textHighLight: {
    color: "rgb(255,165,0)"
  }
};

class Landing extends Component {
  // isLoaded = false;
  componentDidMount() {
    this.isLoaded = true;
    // console.log()
  }

  render() {
    return (
      <div id="introPage" className="mw7 br3 pa2 mv2" style={style.landing}>
        <div className="landingtext animated fadeIn">
          <Animated
            animationIn="fadeInRight"
            isVisible={this.isLoaded}
            animationInDelay={500}
            style={style.textStyle}
          >
            <h1 className="f-subheadline">
              Christine <span style={style.textHighLight}> Aqui </span>
            </h1>
          </Animated>
          <Animated
            animationIn="fadeInLeft"
            isVisible={this.isLoaded}
            animationInDelay={1000}
            style={style.textStyle}
          >
            <h3 className="f2 lh-title"> Software Developer </h3>
          </Animated>
          <Animated animationIn="shake">
            <img id="loadImg" src={RocketGirl} alt="" />
          </Animated>
        </div>
      </div>
    );
  }
}
export default Landing;
