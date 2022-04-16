import React from 'react';
// Iconos redes
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// 
import '../style/Footer.css'

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <TwitterIcon/>
            <InstagramIcon/>
            <FacebookIcon/>
            <LinkedInIcon/>
        </div>
            <p>&copy; Copyright 2022</p>

    </div>
  )
}

export default Footer