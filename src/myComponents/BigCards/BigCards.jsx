import React from "react";
import './style.css'

function BigCards() {
    let info1 = [
        {
            id: "card1",
            h1: "Kipon",
            span: "Casual-Free",
            image: "./assets/kipon.jpg",
            desc: `I'm a paragraph. Click here to add your own text and edit me. I’m a
            great place for you to tell a story and let your users know a little more about you.`,
            img_google: "./assets/Google.png",
            img_apple: "./assets/apple.png"
        },
        {
            id: "card2",
            h1: "Robotrix",
            span: "RPG-Free",
            image: "./assets/robotrix.jpg",
            desc: `I'm a paragraph. Click here to add your own text and edit me. I’m a
            great place for you to tell a story and let your users know a little more about you.`,
            img_google: "./assets/Google.png",
            img_apple: "./assets/apple.png"
        }
    ]

    let info2 = [
        {
            id: "card3",
            h1: "Treasure Box",
            span: "Adventure-Free",
            image: "./assets/card3.jpg",
            desc: `I'm a paragraph. Click here to add your own text and edit me. I’m a
            great place for you to tell a story and let your users know a little more about you.`,
            img_google: "./assets/Google.png",
            img_apple: "./assets/apple.png"
        }
    ]



    return (
        <>
            <div className="up-cards flex justify-between">
                {
                    info1.map((i, index) => {
                        return (
                            <div className="up-card shadow-2xl drop-shadow-2xl bg-white" key={i.id} >
                                <div className="p-10 card-in" id={i.id} >
                                    <div className="flex justify-between w-52 items-center">
                                        <img src={i.image} className="shrt-img" alt="not load" />
                                        <div className="">
                                            <h1 className="text-2xl font-bold">{i.h1}</h1>
                                            <span className="">{i.span}</span>
                                        </div>
                                    </div>
                                    <div className="text-justify my-7">
                                        <p className="">{i.desc}</p>
                                    </div>
                                    <div className="company-logo">
                                        <img src={i.img_apple} alt="" className="logo" />
                                        <img src={i.img_google} alt="" className="logo" />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="down-cards flex justify-between" >
                {
                    info2.map((i, index) => {
                        return (
                            <div className="up-card shadow-2xl" key={i.id} >
                                <div className="p-10 card-in" id={i.id} >
                                    <div className="flex justify-between w-64 items-center">
                                        <img src={i.image} className="shrt-img" alt="not load" />
                                        <div className="">
                                            <h1 className="text-2xl font-bold">{i.h1}</h1>
                                            <span className="">{i.span}</span>
                                        </div>
                                    </div>
                                    <div className="text-justify my-7">
                                        <p className="">{i.desc}</p>
                                    </div>
                                    <div className="company-logo">
                                        <img src={i.img_apple} alt="" className="logo" />
                                        <img src={i.img_google} alt="" className="logo" />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="right-img">

                </div>
            </div>
        </>
    )
}

export default BigCards