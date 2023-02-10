import React from 'react'
import BigCards from '../../myComponents/BigCards/BigCards';
import Card from '../../myComponents/Cards/Card';
import Form from '../../myComponents/Forms/Form';


import "./style.css";

function Intro() {

  return (
    <>
      <section className="section1">
        <div className="flex flex-col justify-center w-full h-full">
          <div className="">
            <h1 className="text-5xl font-extrabold pl-16 font-serif text-gray-700 leading-normal">Made to Be Played</h1>
            <p className="text-4xl pl-16">The Very Best in Mobile Gaming</p>
          </div>
          <div className="pl-16 pt-10">
            <a href="http://play.google.com" target="_blank"><img src="./assets/Google.png" className="inline-block w-44"
              alt="play Store" /></a>
            <a href="http://apple.com" target="_blank"><img src="./assets/Apple.png" className="inline-block w-44 pl-5"
              alt="apple Store" /></a>
          </div>
        </div>
      </section>

      <section className="section2 w-full h-full bg-transparent">
        <div className="cards w-11/12 flex-wrap h-full flex justify-between m-auto -translate-y-36">
          <Card />
          <div className="relative overflow-hidden cursor-pointer rounded-2xl
           bg-gradient-to-br from-amber-400 to-amber-400" id="card4">
            <div className="in text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-2xl font-bold">Explore Our Games</h1>
              <span className="text-4xl">&#8595;</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section3 block w-full h-full">
        <div className="sect3  m-auto text-center">
          <div className="leading-9 ">
            <h1 className="text-2xl font-medium">About Tripo</h1>
          </div>
          <div className="block mx-auto my-6">
            <p className="text-4xl font-semibold font-serif">Your Source for Mobile Entertainment</p>
          </div>
          <div className="block my-7 mx-auto">
            <p className="text-2xl">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click
              “Edit Text” or double click me to add your own content and make changes to the font. I’m a great
              place for you to tell a story and let your users know a little more about you.</p>
          </div>
          <div
            className="sect3-btn inline-block p-4 mt-2.5 mb-12 border-2 border-solid rounded-xl bg-red-600 cursor-pointer">
            <button className="text-white text-xl font-semibold">Learn More</button>
          </div>
          <div className="sect3-img flex flex-col w-full h-full rounded-2xl relative">
            <div className="sect3-img-bot">
            </div>
          </div>
        </div>
      </section>


      <section className="section4 w-full h-full block">
        <div className="sect4">
          <div>
            <h1 className="text-4xl font-bold font-serif">Our Games</h1>
          </div>

          <div className="pt-5">
            <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a
              story and let your users know a little more about you.</p>
          </div>
        </div>
      </section>

      <section className="section5">
        <div className="all_card">
          <BigCards />
        </div>
      </section>

      <section className="section6">
        <div className="left-content">
          <div className="in">
            <h1 className='text-2xl text-white font-bold'>Join Our Team</h1>
            <div className="my-3">
              <p className='in-p'>It takes the world's best talent to change the game.</p>
            </div>
            <div className="my-5">
              <button>Explore Courses</button>
            </div>
          </div>
        </div>

        <div className="right-content">
          <img src="./assets/fixed1.png" alt="" className='w-full h-full' />
        </div>
      </section>

      <section className="section7">
        <Form/>
        <div className="short_form">
          <form action="" className='leading-loose form'>
            <div className="">
              <h1 className='text-2xl text-white font-bold'>
                Subscribe to Our Newsletter
              </h1>
            </div>
            <div className="sh-in">
              <label htmlFor="email" className='block text-2xl text-white'>Email <span>*</span></label>
              <input type="email" name="Email" id="email" className='w-60 h-14 rounded-xl p-2.5 outline-none'/>
                <button>Join</button>
            </div>
          </form>
        </div>
      </section>

    </>
  )
}

export default Intro