import React from 'react'

const Content = () => {
  return (
  <>
  <div className='menu-card'>
        <img src={require("../images/egg1.jpg")} alt='Egg Dishes' className='h-full rounded mb-20 shadow'/>
        <div className='center-card'>
          <h2 className='text-2xl mb-2'>Egg Sandwich</h2>
          <p className='mb-2'>Crispy,Delicious,Nutritious</p>
          <span>$16</span>
        </div>
    </div>
    <div className='menu-card'>
        <img src={require("../images/egg2.jpg")} alt='Egg Dishes' className='h-full rounded mb-20 shadow'/>
        <div className='center-card'>
          <h2 className='text-2xl mb-2'>Egg Salad</h2>
          <p className='mb-2'>Crispy,Delicious,Nutritious</p>
          <span>$20</span>
        </div>
    </div>
  </>
    
  )
}

export default Content
