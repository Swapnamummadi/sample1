
import React, { Fragment } from 'react';
import './FooterForRegistration.css'
import { Link } from 'react-router-dom';

const FooterForRegistration = () => {
    return (
        <Fragment>
            
        <div className="commonRegestrationFooterContainer">
            <div className="RegestrationFooterSection1">
                <div>Questions? Call <Link>000-800-919-1694</Link></div>
            </div>
            <div className="RegestrationFooterSection2">

                <ul className="RegestrationfooterSectionFlex">

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

            <div className="RegestrationFooterSection3">
            <div id='Regestrationfooterlanguage'>
                <span className='RegestrationlanSymb2'><i class="fa-solid fa-globe"></i></span>
                <select className='RegestrationselectLang2'>
                <option label='English'/>
                <option label='Hindi'/>
                </select>
            </div>
            </div>
        </div>
    </Fragment>
    );
};

export default FooterForRegistration;

{/* <i class="fa-solid fa-globe"></i> */}