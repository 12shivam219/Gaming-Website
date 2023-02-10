import React from 'react'
import './style.css'
function Footer() {
    return (
    <>
            <footer className="footer">
                <div className="foot">
                    <div className="foot_head">
                        <h1 className="foot_head_h1">Tripo Games</h1>
                    </div>
                    <div className="foot_para">
                        <p>An Immersive Gaming Experience</p>
                    </div>
                </div>
                <hr className="bg-black w-3/4 m-auto h-0.5"/>
                    <div className="foot_flex">
                        <div className="foot_down">
                            <div className="foot_down_first f">
                                <div className="foot_down_first_h1 h1">
                                    <h1>Contact</h1>
                                </div>
                                <ul>
                                    <li>Info@mysite.com</li>
                                    <li>Tel: 123-456-7890</li>
                                    <li>500 Terry Francois St</li>
                                    <li>San Francisco, CA 94158</li>
                                </ul>
                            </div>
                            <div className="foot_down_second f">
                                <div className="foot_down_second_h1 h1">
                                    <h1> Navigation</h1>
                                </div>
                                <ul>
                                    <li>Games</li>
                                    <li>Carrers</li>
                                    <li>About</li>
                                    <li>Contact</li>
                                    <li>Privacy Policy</li>
                                    <li>Terms & Conditions</li>
                                </ul>
                            </div>
                            <div className="foot_down_third f">
                                <div className="foot_down_third_h1 h1">
                                    <h1>Social</h1>
                                </div>
                                <ul>
                                    <li>Discord</li>
                                    <li>Twitch</li>
                                    <li>Facebook</li>
                                    <li>Youtube</li>
                                    <li>Twitter</li>
                                    <li>Linkedin</li>
                                </ul>
                            </div>
                            <div className="foot_down_fourth f">
                                <div className="foot_down_fourth_h1 h1">
                                    <h1>Find Us On</h1>
                                </div>
                                <div className="foot_down_fourth_img">
                                    <a href="http://apple.com" target="_blank"><img src="/photos/Apple.png" alt="apple Store" /></a>
                                    <a href="http://play.google.com" target="_blank"><img src="/photos/Google.png"
                                        alt="play Store" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="bg-black w-3/4 m-auto h-0.5"/>
                        <div className="last">
                            <p>© 2035 by Tripo. Powered and secured by <a href="http://wix.com">Wix</a> </p>
                        </div>
                    </footer>
                </>
                );
}

export default Footer