const Planet = require('./planet')
const convertion = require('./convertion')

import Spaceship from "./spaceship"
import armament from "./armaments"
import {laserDefenses, steelDefenses} from "./defenses"

const SPACESHIP = new Spaceship("Esparta", "Samuel el", armament.laser, laserDefenses)

let planets = [
  new Planet("Mercúrio", 0.39),
  new Planet("Vênus", 0.72),
  new Planet("Terra", 1),
  new Planet("Marte", 1.52),
  new Planet("Júpier", 5.2),
  new Planet("Saturno", 9.53),
  new Planet("Urano", 19.1),
  new Planet("Netuno", 30)
]

planets.forEach(planet => {
  let distanceFromSun = convertion.convertAUtoKM(planet.distToSum).toFixed(2) /*o toFixed transforma o número em string */
  console.log(`${planet.name} - ${planet.distToSum}AU - ${distanceFromSun}km`)
  
})

console.log(SPACESHIP)