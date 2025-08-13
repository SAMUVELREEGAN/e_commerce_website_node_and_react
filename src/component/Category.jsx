import React, { useContext } from 'react'
import { MyContext } from '../api/MyContext'
import CategoryItem from './CategoryItem'

const Category = () => {
    const {categoires} = useContext(MyContext)
  return (
    <div>
        {
            categoires.map((e,index)=> (
                <div key={index}>
                    <CategoryItem product_name={e.cat_name}/>
                </div>
            ))
        }
    </div>
  )
}

export default Category