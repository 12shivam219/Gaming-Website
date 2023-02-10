import React, { useState } from 'react'
import './style.css'

export default function Header(props) {

    const [show,setShow] = useState(true);

    window.addEventListener('wheel', function (e) {
        if (e.deltaY < 0) {
            document.getElementById("start").classList.add("first_show")
            document.getElementById("start").classList.remove("first_remove")
        }

        else if (e.deltaY > 0) {
            document.getElementById("start").classList.remove("first_show")
            document.getElementById("start").classList.add("first_remove")
        }

    })

    let headerObj = {
        "heading": "Tripo Games"
      }
    
      let nav_li = {
        "li1": "Home",
        "li2": "Games",
        "li3": "Carrers",
        "li4": "About",
        "li5": "Contact"
      }
    
      let ol_li = {
        "ol1": "Kipon",
        "ol2": "Robotrix",
        "ol3": "Treasure Box"
      }

    return (
        <>
            <header className="first_show" id="start">
                <div className="head flex justify-between bg-transparent w-11/12 m-auto">
                    <div className="nav_head">
                        <h1 className="nav_head_h1 text-white text-2xl font-mono pt-2 pb-2.5">{headerObj.heading}</h1>
                    </div>
                    <div className={show?"nav":"nav_new"} id="nav">
                        <ul className="nav_ul" id="nav_ul">
                            <li className="" id="ul_li1">{nav_li.li1}</li>
                            <li className="" id="ul_li" >{nav_li.li2}
                                <ol className="ol_hide ol_show">
                                    <li className="ol_li my-1.5 cursor-pointer"><a href="kipon.html">{ol_li.ol1}</a></li>
                                    <li className="ol_li my-1.5 cursor-pointer"><a href="#">{ol_li.ol2}</a></li>
                                    <li className="ol_li mt-1.5 cursor-pointer"><a href="#">{ol_li.ol3}</a> </li>
                                </ol>
                            </li>
                            <li className="li">{nav_li.li3}</li>
                            <li className="li">{nav_li.li4}</li>
                            <li className="li" id="ls_li">{nav_li.li5}</li>
                        </ul>
                    </div>
                    <div className={show ? "nav_short":"new_short"} onClick={()=> {
                        setShow(!show);
                    }}>
                        <div className="nav_child1" id="nav_child1"></div>
                        <div className="nav_child2" id="nav_child2"></div>
                        <div className="nav_child3" id="nav_child3"></div>
                    </div>
                </div>
            </header>
        </>
    );
}
