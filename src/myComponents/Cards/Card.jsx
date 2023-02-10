import React from 'react'
function Card() {


    let obj = [
        {
            id: "card1",
            h1: "Kipon",
            span: "Casual-Free",
            image: "./assets/card2.jpg"
        },
        {
            id: "card2",
            h1: "Robotrix",
            span: "RPG-Free",
            image: "./assets/card1.jpg"
        },
        {
            id: "card3",
            h1: "Treasure Box",
            span: "Adventure-Free",
            image: "./assets/card3.jpg"
        }
    ]

    return (
        <>
            {
                obj.map((i, index) => {
                    return (
                        <div className="card" key={index} id={i.id}>
                            <img src={i.image} className="rounded-2xl h-full card-style" alt="not load" />
                            <div className="absolute bottom-12 left-10 con">
                                <h1 className="text-xl font-bold text-white">{i.h1}</h1>
                                <span className="text-xl text-white">{i.span}</span>
                            </div>
                        </div>
                    )
                })
            }

        </>
    )
}

export default Card