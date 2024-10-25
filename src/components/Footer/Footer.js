import React from 'react'
import "./Footer.css"
import { IoCall } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-section'>
      <div>
        <img src="https://codiqa.bold-themes.com/social/wp-content/uploads/sites/4/2020/02/Logo-Footer.png" alt="" />
        <p>Objectively integrate enterprise wide strategic<br/> theme areas with functionalized infrastructures. <br/>Interactively productize premium mobile <br/>technologies.</p>
        <h4><IoCall style={{ color: '#df6981' }} /> +442347667</h4>
        <h4><AiOutlineGlobal style={{ color: '#df6981' }}/>supprt.codiqa.com</h4>
        <h4><MdEmail style={{ color: '#df6981' }}/>support@codiqa.com</h4>
      </div>
        <div className='footer-content'>
            <h3>Applications</h3>
            <a href="/">Our Products</a>
            <a href="/">News & Updates</a>
            <a href="/">Try for free</a>
            <a href="/">Features</a>
            <a href="/">Pricelist</a>
        </div>
        <div className='footer-content'>
            <h3>Codiqa</h3>
            <a href="/">About us</a>
            <a href="/">Contact us</a>
            <a href="/">Locations</a>
            <a href="/">Jobs@Codiqa</a>
            <a href="/">Blog</a>
        </div>
        <div>
            <h3>Connect</h3>
            <FaFacebookF style={{ color: '#df6981',padding: '0px 12px 12px 0px' }}/>
            <FaTwitter  style={{ color: '#df6981',padding: '12px' }}/>
            <FaLinkedinIn  style={{ color: '#df6981',padding: '12px' }}/>
            <FaInstagram  style={{ color: '#df6981',padding: '12px' }}/>
            <p>Keep up to date with latest news and<br/> update about Codiqa, simply subscribe<br/> with your email address.</p>
            <input type="text" placeholder='Email address' />
        </div>
      </div>
      <div className='footer-bottom'>
        <h4>Copyright 2019. Bold Themes. All rights reserved.</h4>
      </div>
      <div className='footer-links'>
        <a href="/"> Home</a>
        <a href="/">About us</a>
        <a href="/">Help</a>
        <a href="/">Privacy</a>
        <a href="/">Terms</a>
        <a href="/">Careers</a>
        <a href="/">Shop</a>
      </div>
    </div>
  )
}

export default Footer
