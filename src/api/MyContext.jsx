import React, { useState } from 'react'
import { createContext } from 'react'
import {categories as defaultcategories} from '../json/categories';


export const MyContext = createContext();

export const MyProvider = ({children}) => {

    const [categoires , setCategories] = useState(defaultcategories)
    
  return (
   <MyContext.Provider value={{categoires}}>{children}</MyContext.Provider>
  )
}

