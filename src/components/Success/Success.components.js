

import React, { useEffect, useState } from 'react'
import { successImage } from '../../constants/CommonConstants'
import './Success.css'
import { useNavigate } from 'react-router-dom';

const SuccessBody = () => {
  const history = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      if (countdown === 1) {
        history('/');
      } else {
        setCountdown(countdown - 1);
      }
    }, 1000); 
    return () => clearTimeout(redirectTimer);
  }, [countdown, history]);
  return (
    <div className='successConatiner' >
      <img src={successImage}/>
      <p  className='successMessageHeading'>Success Submitted</p>
      <p  className='congratulations'>Congratulations</p>
      <p className='successMessageBody'>Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates</p>
      <p className='redirect'>You will be redirected in {countdown} seconds...</p>
    </div>
  )
}

export default SuccessBody
