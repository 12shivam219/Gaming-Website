import React from 'react'
import Footer from './myComponents/Footer/Footer'
import Header from './myComponents/Header/Header'


    const CommonContainer = ({children}) => {
        return (
            <>
                <Header />
                {children}
                <Footer/>
            </>
        )
    }

    export default CommonContainer