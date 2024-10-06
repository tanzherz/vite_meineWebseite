import { useState } from 'react'
import Hero1BtnContainer from './Hero1BtnContainer'
import Hero1Text from './Hero1Text'

const tabsData = [
  {
    id: 1,
    tab: 'vision',
    description: [
      'Es wird verstärkt bewusst nachhaltige Mode konsumiert, der Begriff Fast Fashion ist raus aus dem Trend',
      'Die Marken übernehmen Verantwortung für den Ressourcen-Verbrauch wie Wasser, Energie auf der Produktions- und Verarbeitungsebene.',
      'Die Marken besitzen ein Abfallsystem innerhalb der ganzen Lieferkette',
      'Die Menschen in den Fabriken erhalten einen existgenzsichernden Lohn.',
    ],
  },
  {
    id: 2,
    tab: 'gegenwart',
    description: [
      'Parallel-Trends, auf der einen Seite Nachhaltigkeitstrend und auf der anderen Seite Ultra-Fast-Fashion-Trend',
      'Die Menschen konsumieren hauptsächlich FastFashion, viele ohne es zu wissen, wie z.B. H&M, Zara, weil die Mode trendig ist und der Preis klein',
      'Die nachhaltige Mode gilt heutzutage eher als teuer',
      'In bezug auf Nachhaltigkeit versagt der freie Markt und daher tritt die Europäische Richtlinie in Kraft und die Textilindustrie wird in Zukunst,bereits in 2030 eher kontrolliert,',
    ],
  },
  {
    id: 3,
    tab: 'ziel',
    description: [
      'Eine Plattform, die den Konsumenten spielerisch zum nachhaltigen Kauf bewegt, unteranderm mit Einsatz der KI',
      ' Information über Nachhaltigkeitssiegel',
      'Den Regulierungstrend nutzen',
    ],
  },
]

const Hero1 = () => {
  const [tabs, setTabs] = useState(tabsData)

  const [currentItem, setCurrentItem] = useState(0)

  console.log(tabs)
  return (
    <>
      <Hero1BtnContainer
        tabs={tabs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <Hero1Text tabs={tabs} currentItem={currentItem} />
    </>
  )
}
export default Hero1
