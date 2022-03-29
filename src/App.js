import React, { Component } from "react";
import "./App.css";
import { setData } from "./store/action";
import { connect } from "react-redux";

class App extends Component {
  constructor() {
    super();
    this.state = {
      clickSvg: "",
    };
  }

  componentDidMount = () => {
    fetch("./api/mockFetch").then((res) => {
      this.props.dispatch(setData(res));
      console.log(setData(res));
    });
  };
  handleSvg = (item) => {
    console.log("item",item);
    this.setState({ clickSvg: item });
  };

  render() {
    const svgData = this.props.apiResponse;

    return (
      <div className="App">
        {svgData &&
          svgData.images.map((item, key) => {
            var randomItem =
              svgData &&
              svgData.images[Math.floor(Math.random() * svgData.images.length)];
            const colorCode = randomItem.svg.props.children.props.fill;
            return (
              <div
                onClick={() => this.handleSvg(colorCode)}
                className="App-logo"
                key={key}
              >
                {!(this.state.clickSvg === colorCode) ? (
                  <span>{randomItem.svg}</span>
                ) : (
                  <span className="fill-color">{colorCode}</span>
                )}
              </div>
            );

            // const colorCode= item.svg.props.children.props.fill;
            // return (
            //   <div onClick={()=>this.handleSvg(colorCode)} className="App-logo" key={key}>
            //     {!(this.state.clickSvg === colorCode) ? <span>{item.svg}</span> : <span className="fill-color">{colorCode}</span> }
            //   </div>
            // );
          })}
      </div>
    );
  }
}
const mapStateToProps = function (state) {
  return {
    apiResponse: state.apiResponse,
  };
};
export default connect(mapStateToProps)(App);
