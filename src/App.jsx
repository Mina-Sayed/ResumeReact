import React from 'react';
import './App.css';
import { SocialIcon } from 'react-social-icons';

function App() {
  
  return (
    
    <main>
    
    <h1 className="h1-ele">Mina Sayed</h1>
    <h2>Frontend Developer</h2>
    <div class="btn-group">

    <form action="https://mail.google.com/mail/u/0/#inbox">
    <button type="submit" id="mo2" className="bi bi-envelope-fill">Email</button>
    </form>

    <form action="https://www.linkedin.com/in/mina-sayed-074a7a150/">
     <button id="mo" className="bi bi-linkedin">LinkedIn</button>
    </form>
    
    </div>

    <h1 className="h1-about">
    About
    </h1>

    <p>
     I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
    </p>

    </main>
    
  );
}

export default App;

