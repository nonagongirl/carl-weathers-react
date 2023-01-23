import React from "react";

export default function CarlPhotoResult(props) {
  let temp = props.temperature;
  console.log({ temp });

  if (temp < 0) {
    return (
      <img
        src="./media/carlshocked.gif"
        className="mx-auto d-block carlPic img-fluid"
        alt="carl weathers"
      />
    );
  } else if (temp < 5) {
    return (
      <img
        src="./media/carlcold.jpg"
        className="mx-auto d-block carlPic img-fluid"
        alt="carl weathers"
      />
    );
  } else if (temp < 10) {
    return (
      <img
        src="./media/carlmiffed.jpg"
        className="mx-auto d-block carlPic img-fluid"
        alt="carl weathers"
      />
    );
  } else if (temp < 13) {
    return (
      <img
        src="./media/carlsmile.jpg"
        className="mx-auto d-block carlPic img-fluid"
        alt="carl weathers"
      />
    );
  } else if (temp < 18) {
    return (
      <img
        src="./media/carlhappy1.jpg"
        className="mx-auto d-block carlPic img-fluid"
        alt="carl weathers"
      />
    );
  } else if (temp < 21) {
    return (
      <img
        src="./media/carlsmilegif.gif"
        className="mx-auto d-block carlPic img-fluid"
        alt="carl weathers"
      />
    );
  } else if (temp < 23) {
    return (
      <img
        src="./media/carlhappy2.jp"
        className="mx-auto d-block carlPic img-fluid"
        alt="carl weathers"
      />
    );
  } else if (temp < 26) {
    return (
      <img
        src="./media/carlhotbeach.jpg"
        className="mx-auto d-block carlPic img-fluid"
        alt="carl weathers"
      />
    );
  } else if (temp < 29) {
    return (
      <img
        src="./media/rockybeachhuggif.gif"
        className="mx-auto d-block carlPic img-fluid"
        alt="carl weathers"
      />
    );
  } else {
    return (
      <img
        src="./media/carlbbq.gif"
        className="mx-auto d-block carlPic img-fluid"
        alt="carl weathers"
      />
    );
  }
}
