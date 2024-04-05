import React, { Fragment } from 'react';
import './Footer.css'
import { IoLanguage } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Fragment>

            <div className="CommonFooterContainer">
                <div className="footerSection1">
                    <div>Questions? Call <Link>000-800-919-1694</Link></div>
                </div>
                <div className="FooterSection2">

                    <ul className="FooterSectionFlex">

                        <li><Link>FAQ</Link></li>
                        <li>
                            <Link>Help Centre</Link>
                        </li>
                        <li>
                            <Link>Terms of Use</Link>
                        </li>
                        <li>
                            <Link>Privacy</Link>
                        </li>
                        <li>
                            <Link>Cookie Preferences</Link>
                        </li>
                        <li>
                            <Link>Corporate Information</Link>
                        </li>
                    </ul>
                </div>

                <div className="footerSection3">
                <div id='Footerlanguage'>
                    <span className='lanSymb1'><IoLanguage  /></span>
                    <select className='selectLang'>
                    <option label='English'/>
                    <option label='Hindi'/>
                    </select>
                </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Footer;