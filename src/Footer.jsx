import React from 'react';
import './App.css';
import { SocialIcon } from 'react-social-icons';



function Footer(){

  return(

    <footer className="github">
      <div>
        <a id="git" class="btn btn-primary" href="https://github.com/MINA-sayed" role="button">
        <i class="bi bi-github"></i>
        </a>


       <a id="insta" class="btn btn-primary" href="https://www.instagram.com/menaboss13/" role="button">
        <i class="bi bi-instagram"></i>
      </a>


      <a id="meta" class="btn btn-primary" href="https://www.facebook.com/mena.boss.33" role="button">
        <i class="bi bi-meta"></i>
      </a>



      <a id="twitter" class="btn btn-primary" href="https://twitter.com/Minasayed8" role="button">
        <i class="bi bi-twitter"></i>
      </a>

      </div>
    </footer>
  )
}

export default Footer;