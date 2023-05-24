import React from 'react'
import { SocialIcon } from 'react-social-icons'

const Headers = () => {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      {/*left side*/}
      <div className="flex flex-row items-center">
        <SocialIcon
          url="http://github.com/abezzi"
          fgColor="gray"
          bgColor="transparent"
        />
      </div>

      {/*right side*/}
      <div className="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Contact me</p>
      </div>
    </header>
  )
}

export default Headers
