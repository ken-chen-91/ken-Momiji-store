// import fetch from ''
import React, {useState, useEffect} from 'react'
// import Client from 'shopify-buy'

import Context from '../../context/StoreContext'

const ContextProvider = ({ children }) => {

    return (
        <Context.Provider>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider