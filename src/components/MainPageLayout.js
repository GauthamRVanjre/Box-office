import React from 'react'
import Navs from './Navs'
import Title from './Title'

const MainPageLayout = ({children}) => {
  return (
    <div>
        <Title title="Box Office App" subtitle="Areyou looking for an movie or actor?" />
        <Navs/>

        {children}
    </div>
  )
}

export default MainPageLayout
