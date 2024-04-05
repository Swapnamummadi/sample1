import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { IoLanguage } from "react-icons/io5";

const Footer = () => {
  return (
    <Fragment>
      <div className="footer">
          <div className="footer1section">
            
              <div>Questions? Call <Link className="link">-800-919-1694</Link></div>
            
          </div>

          <div className="footer2section">
            <ul className="FooterSectiongrid">
            
              <li>
              <Link>FAQ</Link>
              </li>
              <li>
              <Link>Help Centre</Link>
              </li>
              <li>
              <Link> Account</Link>
              </li>
              <li>
              <Link>Media Centre</Link>
              </li>
              <li>
              <Link>investor Relations</Link>
              </li>
              <li>
              <Link> Jobs</Link>
              </li>
              <li>
              <Link> Ways to Watch</Link>
              </li>
              <li><Link>Terms of Use</Link></li>
              <li><Link>Privacy</Link></li>
              <li><Link>Cookie Preference</Link></li>
              <li><Link>Corporate Information</Link></li>
              <li><Link>Contact Us</Link></li>
              <li><Link>Speed Test</Link></li>
              <li><Link>Legal Notice</Link></li>
              <li><Link>Only on Netflix</Link></li>


            </ul>
          </div>

          <div id='language'>
                    <span className='lanSymb'><IoLanguage  /></span>
                    <select className='selectLang'>
                    <option label='English'/>
                    <option label='Hindi'/>
                    </select>
                </div>
                
          <div id="last">Netflix India</div>
        </div>
        
       
     
    </Fragment>
  );
};

export default Footer;
