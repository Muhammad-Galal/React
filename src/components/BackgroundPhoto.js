import React from "react";
import "../Css/Background.css";
const BackgroundPhoto = () => {
  return (
    <div>
      <div class="my-2 text-center main-div">
        <img
          className="background-image "
          src="/images/Background.png"
          alt=""
        ></img>
        <p class=" title">Mahmoud Fady Academy</p>
        <p class="text">Book your session now and get </p>
        <p class="offer">100 EGP OFF </p>
        <p class="timer-2"> HRS : MINS : SEC </p>
      </div>
    </div>
  );
};

export default BackgroundPhoto;
