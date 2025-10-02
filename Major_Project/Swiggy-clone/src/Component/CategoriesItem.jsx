import React, { useState } from 'react'
import { CatogoriesCard } from './CatogoriesCard'

export const CategoriesItem = ({manuItem}) => {
    const [isOpen,setOpen] =useState(true)
    
  return (
    <div className="w-[800px] mx-auto my-4">
          <div className="flex justify-between items-center">
            <p className="text-[16px] font-[600] text-[#02060ceb]">
              {manuItem?.title}
            </p>
            <button
              className="text-2xl font-bold"
              onClick={() => setOpen(!isOpen)}
            >
              {isOpen ? "⌄" : "⌃"}
            </button>
            
          </div>
          <div className="w-full h-2 bg-gray-200"></div>
    
          {isOpen && (
            <div className="mt-4">
              {manuItem?.itemCards?.map((Item) => (
                <CatogoriesCard
                  key={Item?.card?.info?.id}
                  cardInfo={Item?.card?.info}
                />
              ))}
            </div>
          )}
        </div>
  )
}
