import { useState } from 'react'
import Hero1BtnContainer from './Hero1BtnContainer'
import Hero1Text from './Hero1Text'
import { tabsData } from './data'

const Hero1 = () => {
  // const [tabs, setTabs] = useState(tabsData)

  const [currentItem, setCurrentItem] = useState(0)

  return (
    <>
      <Hero1BtnContainer
        tabs={tabsData}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <Hero1Text tabs={tabsData} currentItem={currentItem} />
    </>
  )
}
export default Hero1
