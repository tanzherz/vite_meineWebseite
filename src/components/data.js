import Sommer from '../assets/Sommer.png'
import Freitag from '../assets/Freitag.png'
import Apfel from '../assets/Äpfel.png'

import Katze from '../assets/Katze1.jpg'
import Katze2 from '../assets/Katze3.jpg'
import Katze3 from '../assets/Katze4.jpg'

export const carousel = [Katze, Sommer, Katze2, Freitag, Katze3, Apfel]

import BlauerEngel from '../assets/Nachhaltigkeit/Der Blaue Engel.png'
import Ecolabel from '../assets/Nachhaltigkeit/EU Ecolabel.png'
import Gots from '../assets/Nachhaltigkeit/GOTS.png'
import IvnBest from '../assets/Nachhaltigkeit/IVN Best.png'
import Knopf from '../assets/Nachhaltigkeit/GrünerKnopf.png'
import Knopf2 from '../assets/Nachhaltigkeit/GrünerKnopf 2.0.png'
import Cradle from '../assets/Nachhaltigkeit/CreadleToCradle.png'
import PetFlasche from '../assets/Nachhaltigkeit/PetFlasche.png'
import Unbekannt from '../assets/Nachhaltigkeit/Unbekannt.png'

export const siegel = [
  BlauerEngel,
  Ecolabel,
  Gots,
  IvnBest,
  Knopf,
  Knopf2,
  Cradle,
  PetFlasche,
  Unbekannt,
]

import SommerShirt from '../assets/t-shirt_Sommer.jpg'
import KatzenShirt from '../assets/t-shirt_Katze_farbenfroh.jpg'
import HilfigerShirt from '../assets/t-shirt_Hilfiger.png'
import HMShirt from '../assets/t-shirt_H&M.png'
import NikeShirt from '../assets/t-shirt_Nike.png'
import ZaraShirt from '../assets/t-shirt_Zara.png'
import KatzeFahrad from '../assets/t-shirt_Katze_Fahrrad.jpg'
import GrauShirt from '../assets/t-shirt_Grau.jpg'

import Standard from '../assets/Hallo_grün.jpg'
import Fragezeichen from '../assets/User/Fragezeichen.jpg'
import Secret from '../assets/User/Secret Escapes.png'
import Tommy from '../assets/User/TommyHilfiger.png'
import Zara from '../assets/User/Zara.png'

export const data = [
  {
    id: 1,
    text: 'Ich liebe den Sommer, Logo-Stil',
    mode: 'eigene Mode',
    title: 'Sommer',
    bild: SommerShirt,
    siegel: [Knopf2, Gots],
    image: Standard,
  },
  {
    id: 2,
    text: '',
    mode: 'secret escapes',
    title: '50 shades of gray',
    bild: GrauShirt,
    siegel: [Cradle],
    image: Secret,
  },
  {
    id: 3,
    text: 'Eine Katze auf dem Fahrrad, Vektorillustration',
    mode: 'eigene Mode',
    title: 'Süße Träume',
    bild: KatzeFahrad,
    siegel: [Knopf2, Gots],
    image: Standard,
  },
  {
    id: 4,
    text: 'Eine detaillierte Vektorillustration einer Katze, feine Linien, dramatisches Licht, symmetrisch,hyperrealistisch',
    mode: 'eigene Mode',
    title: 'Katze',
    bild: KatzenShirt,
    siegel: [Knopf2, Gots],
    image: Standard,
  },
  {
    id: 5,
    text: '',
    mode: 'Tommy Hilfiger',
    title: 'bequemes longsleeve',
    bild: HilfigerShirt,
    siegel: [Gots, Ecolabel],
    image: Tommy,
  },
  {
    id: 6,
    text: '',
    mode: 'Kannst Du erraten welche Marke es ist?',
    title: 'einfach weißes T-Shirt',
    bild: HMShirt,
    siegel: [PetFlasche],
    image: Fragezeichen,
  },
  {
    id: 7,
    text: '',
    mode: 'Zara',
    title: 'Oversized T-Shirt',
    bild: ZaraShirt,
    siegel: [Unbekannt],
    image: Zara,
  },
]
export const tabsData = [
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