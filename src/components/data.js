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

export const siegel = [
  BlauerEngel,
  Ecolabel,
  Gots,
  IvnBest,
  Knopf,
  Knopf2,
  Cradle,
]

import SommerShirt from '../assets/t-shirt_Sommer.jpg'
import KatzenShirt from '../assets/t-shirt_Katze_farbenfroh.jpg'
import HilfigerShirt from '../assets/t-shirt_Hilfiger.png'
import HMShirt from '../assets/t-shirt_H&M.png'
import NikeShirt from '../assets/t-shirt_Nike.png'
import ZaraShirt from '../assets/t-shirt_Zara.png'
import KatzeFahrad from '../assets/t-shirt_Katze_Fahrrad.jpg'
import GrauShirt from '../assets/t-shirt_Grau.jpg'

export const data = [
  {
    id: 1,
    text: 'Ich liebe den Sommer, Logo-Stil',
    mode: 'eigene Mode',
    bild: SommerShirt,
    siegel: [Knopf2, Gots],
  },
  {
    id: 2,
    text: 'Grau',
    mode: 'eigene Mode',
    bild: GrauShirt,
    siegel: [Cradle],
  },
  {
    id: 3,
    text: 'Eine Katze auf dem Fahrrad, Vektorillustration',
    mode: 'eigene Mode',
    bild: KatzenShirt,
    siegel: [Knopf2, Gots],
  },
  {
    id: 4,
    text: 'Eine detaillierte Vektorillustration einer katze, feine Linien, dramatisches Licht, symmetrisch,hyperrealistisch',
    mode: 'eigene Mode',
    bild: KatzeFahrad,
    siegel: [Knopf2, Gots],
  },
  {
    id: 5,
    text: '',
    mode: 'Tommy Hilfiger',
    bild: HilfigerShirt,
    siegel: [Gots, Ecolabel],
  },
  {
    id: 6,
    text: '',
    mode: 'H&M',
    bild: HMShirt,
    siegel: [''],
  },
  {
    id: 7,
    text: '',
    mode: 'Zara',
    bild: ZaraShirt,
    siegel: [''],
  },
]
