import React, {useState} from 'react'
import './signInStyle.css'
import ButtonEncrypt from './ButtonEncrypt';
import styles from "./bubble.module.css";
import axios from 'axios';
import ButtonEncryptSignIn from './ButtonEncryptSignIn';
import { useLocation, useNavigate } from "react-router-dom";

function SignInTerminal() {

  const [email, setEmail] = useState('');
  const [showEmail, setShowEmail] = useState(false);
  const[password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate();
  const location = useLocation();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setShowEmail(true);
    }
  };

  const handlePasswordKeyDown = (e) => {
    if (e.key === 'Enter') {
      setShowPassword(true);
    }
  };

  const submitData = () => {
    axios.post("http://10.20.93.11:3898/login", {
        username: email,
        password: password
    })
    .then((res) => {
        console.log(res)
        const from = location.state?.from?.pathname || '/';
        navigate(from);
    })
    .catch((error) => {
        console.log(error)
    })
  }


  return (
    <section id='fullScreen'>
        <div className="terminal-window">
        <div className="top-bar">
            <div className="button red"></div>
            <div className="button yellow"></div>
            <div className="button green"></div>
        </div>
        <div className="content">
            {/* Your terminal content goes here */}
            <div id='titleText' className="grid h-screen place-content-center">
            <BubbleText />
            </div>
            <p>Hey there! We're excited to link</p>
        </div>

        <div id='emailInput' className='row'>
            <div id='emailPrec' className='col-4'>Could you please provide</div>
            <div id='emailText' className='col-3'>your email?</div>
        </div>

            {showEmail ? (
            <>
                <div id='inputEmail' className='row'>
                    <div className='col-1'>
                        <img className='ticked' src={require('../../assets/tick.png')} />
                    </div>
                    <div id='userEmail' className='col-4'>{email}</div>
                </div>

                <div className='row'>
                <div className='col-4' id='preName'>Awesome, please provide</div>
                <div className='col-3' id='userName'>your password?</div>
                </div>

                {
                    showPassword ? (
                        <div>
                            <div id='processComplete'>Great. Good to GO!!</div>
                            <div onClick={submitData} id='encryptButton'>
                                <ButtonEncryptSignIn />
                            </div>
                        </div>
                    ) : 
                    (
                        <div id='inputName' className='row'>
                        <div className='col-1'>   
                            <img id='arrow' src={require('../../assets/right-arrow-2.png')} />
                        </div>
                        <div className='col-1'>
                            <img id='tildeIcon' src={require('../../assets/tilde-3.png')} />
                        </div>
                        <div id='enterPassword' className='col-8'>Enter Password:
                            <input 
                                type="text" 
                                id="emailNameField" 
                                onChange={(e) => setPassword(e.target.value)}
                                onKeyDown={handlePasswordKeyDown}
                                autoFocus // Focuses on the input field by default
                            />
                        </div>
                        </div>
                    )
                }
            </>
        ) : (
            <div id='inputEmail' className='row'>
            <div className='col-1'>   
                <img id='arrow' src={require('../../assets/right-arrow-2.png')} />
            </div>
            <div className='col-1'>
                <img id='tildeIcon' src={require('../../assets/tilde-3.png')} />
            </div>
            <div id='enterEmail' className='col-8'>Enter Email:
                <input 
                type="text" 
                id="emailInputField" 
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus // Focuses on the input field by default
                />
            </div>
            </div>
        )}

        </div>
    </section>
  )
}

const BubbleText = () => {
    return (
      <h2 className="text-center text-xl font-thin text-indigo-300">
        {"CourseMap".split("").map((child, idx) => (
          <span className={styles.hoverText} key={idx}>
            {child}
          </span>
        ))}
      </h2>
    );
  };

function moveCursor(e) {
    const input = e.target;
    const cursorPosition = input.selectionStart;
    const value = input.value;
  
    // Move cursor ahead if the length of the email input is not reached
    if (cursorPosition < value.length) {
      input.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
    }
  }

export default SignInTerminal