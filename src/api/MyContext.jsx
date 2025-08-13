import React, { useState } from 'react'
import { createContext } from 'react'
import {categories} from '../json/categories';


export const MyContext = createContext();

export const MyProvider = ({children}) => {

    const [categoires , setCategories] = useState()
    
  return (
   <MyContext.Provider value={{categoires}}>{children}</MyContext.Provider>
  )
}

