/** @format */
import React from "react";
import tobelike from "../../assets/images/icons/tobelike.svg";
import likeVV from "../../assets/images/icons/likeimg.svg";
const imagesPath = {
  minus: tobelike,
  plus: likeVV,
};
class Like extends React.Component {
  constructor() {
    super();
    this.state = { open: true };
  }

  toggle = () => this.setState((state) => ({ open: !state.open }));
  getImageName = () => (this.state.open ? "plus" : "minus");

  //   renderClass = (scale) => {
  //     if (scale === null) return "";
  //     if (scale === true) return "circle-scale-up";
  //     if (scale === false) return "circle-scale-down";
  //   };

  render() {
    const imageName = this.getImageName();
    return (
      <div className='body likeWrap'>
        <div className={this.state.open ? "faded" : "like-slide-right"}>
          {/* <h2>🤟 Click on the circle to toggle animations 🤟</h2> */}
          {/* <div
            id='circle'
            className={"circle-button " + this.renderClass(this.state.scale)}
            onClick={() => this.toggle()}></div>
          <img src={tobelike} alt='empty' /> */}
          {/* <img
            style={{ maxWidth: "50px" }}
            src={imagesPath[imageName]}
            onClick={this.toggle}
            className='like-img'
          /> */}
          <img
            style={{ maxWidth: "50px" }}
            src={likeVV}
            // onClick={this.toggle}
          />
        </div>
        <img
          style={{ maxWidth: "50px" }}
          src={tobelike}
          onClick={this.toggle}
          // onClick={this.toggle}
          className='like-img'
        />
      </div>
    );
  }
}

export default Like;
