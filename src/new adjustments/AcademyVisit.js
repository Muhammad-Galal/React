import React from "react";
import "../Css/AcademyVisit.css";
const AcademyVisit = () => {
  return (
    <div>
      <p class="text-center my-5">Right aligned text on all viewport sizes.</p>
     
      <div class="container">
  <div class="row">
    <div class="col-12">
    <img
              className="academy-visit mx-auto d-block "
              src="/images/Academy-Visit-1.png"
              alt=""
            ></img>
    </div>


    
  
  </div>


  <div class="row">
    <div class="col-12 text-center">
    <p className=" adjust">Academy Visit</p>
    <button type="button" class="btn ">600 EGP</button>
    </div>


    
  
  </div>


  <div class="row">
    <div class="col-12 text-center">
    <p className=" adjust">Academy Visit</p>
    <button type="button" class="btn ">600 EGP</button>
    </div>


    
  
  </div>






</div>



    </div>
  );
};

export default AcademyVisit;