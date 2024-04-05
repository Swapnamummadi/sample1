
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { LuCopyright } from 'react-icons/lu';
import './Ffooter.css';

const FooterforHome = () => {
    return (
        <div className='foocontainer'>
            <div className="footericons">
                <div className="facebook">
                    <FaFacebookF/>
                </div>
                <div className="insta"><FaInstagram/></div>
                <div className="twitter"><FaTwitter/></div>
                <div className="youtube"><FaYoutube/></div>
            </div>

            <div className="footerforsection2">
                <div className="lists">
                    <div className='list1'>Audio Description</div>
                    <div className='list1'>Investor Relations</div>
                    <div className='list1'>Legal Notices</div>
                    
                </div>
                <div className="lists1">
                    <div className='list1'>Help Centre</div>
                    <div className='list1'>Jobs</div>
                    <div className='list1'>Cookie Preferences</div>
                </div>

                <div className="lists">
                    <div className='list1'>Gift Cards</div>
                    <div className='list1'>Terms of Use</div>
                    <div className='list1'>Corporate Information</div>
                </div>

                <div className="lists">
                    <div className='list1'>Media Centre</div>
                    <div className='list1'>Privacy</div>
                    <div className='list1'>Contact Us</div>
                </div>

            </div>
            <div className='service'>Service Code</div>
            <div className='copyright'><LuCopyright/> @1997-2024 Netflix, Inc.</div>
        </div>
    );
};

export default FooterforHome;