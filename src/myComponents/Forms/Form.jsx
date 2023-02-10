import React from 'react'
import './style.css'
function Form() {
    return (
        <>
            <div className="Big-form">
                <div className="my-2">
                    <div className="">
                        <h1 className='h1'>Get in Touch</h1>
                    </div>
                    <div className="my-6">
                        <p className='text-2xl text-black'>I'm a paragraph. Click here to add your own text and edit me.</p>
                    </div>
                </div>
                <div className="">
                    <form action="" className='w-full h-full'>
                        <div className="flex">
                            <div className="leading-loose">
                                <label htmlFor="fname" className='text-2xl text-white'>First Name <span>*</span></label>
                                <input type="text" name="fname" id="fname" required className='w-44 h-16 rounded-xl'/>
                            </div>
                            <div className="leading-loose">
                                <label htmlFor="lname" className='text-2xl text-white'>Last Name <span>*</span></label>
                                <input type="text" name="lname" id="lname" required className='w-44 h-16 rounded-xl'/>
                            </div>
                        </div>
                        <div className="my-6">
                            <label htmlFor="email" className='text-2xl block text-white'>Email <span>*</span></label>
                            <input type="email" name="email" id="email" required className='w-full h-16 rounded-xl my-2.5'/>
                        </div>
                        <div className="">
                            <label htmlFor="msg" className='text-white text-2xl'>Leave us a message...</label>
                            <textarea name="msg" id="msg" cols="50" rows="5" className='w-full mt-2.5 mb-6 rounded-xl'></textarea>
                        </div>
                        <div className="bg-black w-full p-5 rounded-xl text-center">
                            <button className="text-white">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form