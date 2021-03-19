 /*importando os módulos!!! */

const Planet = require('./planet') /* declarando assim ele procura no diretório atual 'src' */
const solarSystem = require('./solar_system') /* declarando assim ele procura no diretório atual 'src' */
const moment = require('moment') /*o require ja considera o node_module como diretório padrão!! */

const earth = new Planet("Terra", 50100000)
earth.rotate()

solarSystem.planets.push(earth)
solarSystem.planets.push(new Planet("Marte", 1448155555))
solarSystem.planets.push(new Planet("Mercúrio", 74800000))
solarSystem.planets.push(new Planet("Saturnop", 7270055555))

console.log(solarSystem)

console.log(moment().format("HH:mm:ss"))