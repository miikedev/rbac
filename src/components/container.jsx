import React from 'react'

const Container = ({children,size}) => {
    const sizeClass = `w-[100%] h-[100vh] mx-auto px-4 sm:px-6 md:px-8 ${size ==='sm'? 'sm:max-w-[300px]' : size ==='md'? 'md:max-w-[800px]' : size ==='lg'? 'lg:max-w-[1240px]' : ''}`
  return (
    <div className={sizeClass}>
        {children}
    </div>
  )
}

export default Container