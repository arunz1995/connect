import React from 'react'
import phone from './../Components/assets/phone.png'
import next from './../Components/assets/next.png'


const Otp = () => {
  return (
    <div className="Otp-container">
        <div className="Otp-left">
            < div className="Otp-lSection">
            <div className="Otp-header">
                <h1>ENTER OTP</h1>
            </div>
            <br/>
            <div className="Otp-input">
                <input className="underline" type="text" maxLength={1}/>
                <input className="underline" type="text" maxLength={1}/>
                <input className="underline" type="text" maxLength={1}/>
                <input className="underline" type="text" maxLength={1}/>
            
            </div>
            <br/>
            <div className="message-part">
                <div className="message-part-1">
                    <p>Didn't get OTP?</p>
                    </div>
                <div className="message-part-2">
                    <p>Resend OTP</p>
                    </div>
                    </div>
                    <br/>
                    <div className="next-Button">
                        <img src={next} alt=""/>
                    </div>

            </div>
            </div>
            <div className="Otp-right">
            <div className="Otp-rSection">
                <img src={phone} alt=""/>
            </div>
            <p2 className="right-para">We have sent OTP to your registered mobile number</p2>
                    
                    


    </div>

    </div>
  )
}

export default Otp