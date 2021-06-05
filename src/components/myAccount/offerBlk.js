/** @format */

import React from "react";
import copy from "../../assets/images/icons/copyCode.png";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

class OfferBlk extends React.Component {
  constructor(props) {
    super(props);
    this.textContent = null;
    this.state = {
      copied1: false,
      copied2: false,
      value: "bdh",
    };
    // this.addNotification = this.addNotification.bind(this);
  }

  // addNotification = (event) => {
  //   event.preventDefault();
  //   const notification = this.notificationSystem.current;
  //   notification.addNotification({
  //     message: "Notification message",
  //     level: "success",
  //     position: "top",
  //   });
  // };
  createNotification = (type) => {
    return () => {
      switch (type) {
        case "info":
          NotificationManager.info("Info message");
          break;
        case "success":
          NotificationManager.success("Code Copied", "Success !!!");
          break;
        case "warning":
          NotificationManager.warning(
            "Warning message",
            "Close after 3000ms",
            3000
          );
          break;
        case "error":
          NotificationManager.error("Error message", "Click me!", 5000, () => {
            alert("callback");
          });
          break;
      }
    };
  };
  copyToClipboard1 = async (e) => {
    window.getSelection().removeAllRanges();
    var range = document.createRange();
    range.selectNode(this.textContent);
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    this.setState({ copied1: true });
  };
  copyToClipboard2 = async (e) => {
    window.getSelection().removeAllRanges();
    var range = document.createRange();
    range.selectNode(this.textContent);
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    this.setState({ copied2: true });
  };
  // style = {
  //   NotificationItem: {
  //     // Override the notification item
  //     DefaultStyle: {
  //       // Applied to every notification, regardless of the notification level
  //       margin: "10px 5px 2px 1px",
  //     },

  //     success: {
  //       // Applied only to the success notification item
  //       color: "red",
  //     },
  //   },
  // };
  initRef = (c) => (this.textContent = c);
  render() {
    const { copied1 } = this.state;
    const { copied2 } = this.state;
    return (
      <div className='n-readersOfferBlk'>
        <div className=' container'>
          <div className='n-readersOfferWrap'>
            <div className='n-offerSec1'>
              <p className='copy-code'>
                {" "}
                Use code &nbsp;
                <p
                  onClick={this.copyToClipboard1}
                  ref={this.initRef}
                  className='copy-code'>
                  KRAPRL10&nbsp;&nbsp;
                </p>
                {/* <input
                  className='copy-area'
                  ref={(input) => (this.input = input)}
                  value='KRAPRL10'
                /> */}
                and get 10% instant discount on lorem ipsum books
              </p>
              <div>
                {/* <button
                  onClick={this.copyToClipboard1}
                  className='n-offerCopyBtn'>
                  <img src={copy} alt='copy' />
                  Copy Code
                </button> */}
                <CopyToClipboard text='KRAPRL10'>
                  {/* <button>Copy to clipboard</button> */}
                  <button
                    onClick={this.createNotification("success")}
                    // onClick={this.copyToClipboard1}
                    className='n-offerCopyBtn btn btn-success'>
                    <img src={copy} alt='copy' />
                    Copy Code
                  </button>
                </CopyToClipboard>

                {/* {this.state.copySuccess ? (
                  <div style={{ color: "green" }}>Success!</div>
                ) : null} */}
              </div>
            </div>
            {/* <button id='button1' onclick={this.CopyToClipboard("div1")}>
              Click to copy
            </button> */}

            <div className='n-offerSec1'>
              <p className='copy-code'>
                {" "}
                Use code &nbsp;
                {/* <input
                  className='copy-area'
                  ref={(input) => (this.input = input)}
                  value='NEW40'
                /> */}
                <p
                  onClick={this.copyToClipboard2}
                  ref={this.initRef}
                  className='copy-code'>
                  NEW40&nbsp;&nbsp;
                </p>
                and get Upto 40% OFF on all products.
              </p>
              <div>
                <CopyToClipboard text='NEW40'>
                  {/* <button>Copy to clipboard</button> */}
                  <button
                    onClick={this.createNotification("success")}
                    // onClick={this.copyToClipboard1}
                    className='n-offerCopyBtn btn btn-success'>
                    <img src={copy} alt='copy' />
                    Copy Code
                  </button>
                </CopyToClipboard>
                {/* <button
                  onClick={() => this.copyToClipboard2()}
                  className='n-offerCopyBtn'>
                  <img src={copy} alt='copy' />
                  Copy Code
                </button> */}
                {/* {this.state.copySuccess ? (
                  <div style={{ color: "green" }}>Success!</div>
                ) : null} */}
              </div>
            </div>
            <div className='n-offerSec1'>
              <p className='copy-code'>
                {" "}
                Buy 1 and get 1 free on all horror books. Use code &nbsp;
                <p
                  onClick={this.copyToClipboard2}
                  ref={this.initRef}
                  className='copy-code'>
                  HORRORFREE
                </p>
                {/* <input
                  className='copy-area'
                  ref={(input) => (this.input = input)}
                  value='HORRORFREE'
                /> */}
              </p>
              <div>
                <CopyToClipboard text='HORRORFREE'>
                  {/* <button>Copy to clipboard</button> */}
                  <button
                    onClick={this.createNotification("success")}
                    // onClick={this.copyToClipboard1}
                    className='n-offerCopyBtn btn btn-success'>
                    <img src={copy} alt='copy' />
                    Copy Code
                  </button>
                </CopyToClipboard>
                {/* {this.state.copySuccess ? (
                  <div style={{ color: "green" }}>Success!</div>
                ) : null} */}
              </div>
            </div>
            <div className='n-offerSec1'>
              <p className='copy-code'>
                {" "}
                Get Upto 20% Off on order above 500₹.
              </p>
            </div>

            <div className='n-offerSec1'>
              <p className='copy-code'>
                {" "}
                Get Upto 20% Off on order above 500₹.
              </p>
            </div>
            <div className='n-offerSec1'>
              <p className='copy-code'>
                {" "}
                Buy 1 and get 1 free on all horror books. Use code &nbsp;
                <p
                  onClick={this.copyToClipboard2}
                  ref={this.initRef}
                  className='copy-code'>
                  HORRORFREE
                </p>
                {/* <input
                  className='copy-area'
                  ref={(input) => (this.input = input)}
                  value='HORRORFREE'
                /> */}
              </p>
              <div>
                {/* <button
                  onClick={() => this.copyToClipboard2()}
                  className='n-offerCopyBtn'>
                  <img src={copy} alt='copy' />
                  Copy Code
                </button> */}
                <CopyToClipboard text='HORRORFREE'>
                  {/* <button>Copy to clipboard</button> */}
                  <button
                    onClick={this.createNotification("success")}
                    // onClick={this.copyToClipboard1}
                    className='n-offerCopyBtn btn btn-success'>
                    <img src={copy} alt='copy' />
                    Copy Code
                  </button>
                </CopyToClipboard>
                {/* {this.state.copySuccess ? (
                  <div style={{ color: "green" }}>Success!</div>
                ) : null} */}
              </div>
            </div>

            <div className='n-offerSec1'>
              <div>
                <p className='copy-code'>
                  {" "}
                  Get Upto 20% Off on order above 500₹. Use code &nbsp;
                  {/* <input
                  className='copy-area'
                  ref={(input) => (this.input = input)}
                  value='KRAPRL10'
                /> */}
                  <p
                    onClick={this.copyToClipboard2}
                    ref={this.initRef}
                    className='copy-code'>
                    KRAPRL10
                  </p>
                </p>
              </div>
              <div>
                {/* <button
                  onClick={() => this.copyCodeToClipboard()}
                  className='n-offerCopyBtn'>
                  <img src={copy} alt='copy' />
                  Copy Code
                </button> */}
                <CopyToClipboard text='KRAPRL10'>
                  {/* <button>Copy to clipboard</button> */}
                  <button
                    onClick={this.createNotification("success")}
                    // onClick={this.copyToClipboard1}
                    className='n-offerCopyBtn btn btn-success'>
                    <img src={copy} alt='copy' />
                    Copy Code
                  </button>
                </CopyToClipboard>
                {/* {this.state.copySuccess ? (
                  <div style={{ color: "green" }}>Success!</div>
                ) : null} */}
              </div>
            </div>
          </div>
        </div>
        <NotificationContainer />
      </div>
    );
  }
}

export default OfferBlk;
