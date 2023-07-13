import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

import './SocialMedia.scss';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://www.twitter.com/' target='_blank' rel="noopener noreferrer"><BsTwitter /></a>
    </div>
    <div>
      <a href='https://facebook.com/' target='_blank' rel="noopener noreferrer"><FaFacebookF /></a>
    </div>
    <div>
      <a href='https://www.instagram.com/' target='_blank' rel="noopener noreferrer"><BsInstagram /></a>
    </div>
  </div>
);

export default SocialMedia;

/*
const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <BsTwitter />
        </div>
        <div>
            <FaFacebookF />
        </div>
        <div>
            <BsInstagram />
        </div>
    </div>
  )
}

export default SocialMedia;

*/
