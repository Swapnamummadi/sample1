import React, { Fragment, useEffect } from "react";
import "./Regester.css";
import RegesterHeaders from "./RegesterHeaders";
import FooterForRegistration from "./FooterForRegistration";
import { Link } from "react-router-dom";


const RegisterSetUp = () => {

  useEffect(()=>{
    document.title="Netflix"
})
  return (
    <Fragment>
      {/* https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png */}

      <div className="RegesterSetUpStep1">

      <RegesterHeaders />

        <div style={{backgroundColor:'#f3f3f3',height:'1.5px'}}>
        </div>

        <div className="RegestrationSetupBody">
          <div className="SettingAccountHeader">
            <div className="SettingSectionImages">
              <span className="ImageInsertion">
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png" />
              </span>
              <div className="steps"><span>STEP 1 OF 3</span></div>
              <div className="SettingAccountHeadingPart1">
                <h1>Finish setting up your account</h1>
              </div>
              <div className="SettingAccountPara">
                <p>
                  Netflix is personalised for you. Create a password to watch on
                  any device at any time.
                </p>
              </div>
              <div className="SettingToNextButton">
                <Link to='/signup/regform'>
            <button type="button" className="NextButton">
              Next
            </button>
          </Link>

          </div>
            </div>
          </div>

          
        </div>
      </div>
      <div style={{backgroundColor:'#f3f3f3', height:'1.5px'}}></div>
      <FooterForRegistration/>
    </Fragment>
  );
};

export default RegisterSetUp;
