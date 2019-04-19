var express = require('express')
var app = express()
var port = process.env.PORT || 8080
var items = {}

function createItems (item) {
  var id = Object.keys(items).length
  items[id] = item
}

createItems({
  name: 'm416',
  title: 'M416',
  image: '/416.png',
  videoLink: 'https://www.youtube.com/embed/iNTU7bqCZDI',
  summary: 'Compared to the other 5.56mm assault rifles, in its unmodified state the M416 is fairly similar to the others besides its slightly faster rate of fire compared to the SCAR-L, however its strong points are the fact that it can accept the most modifications of any of the assault rifles, accepting muzzle, magazine, stock, lower and upper rail attachments, as well has having exceptional stability, only bested by the AUG. A fully modified M416 is therefore highly sought after as its very low recoil allows for controllable fully automatic fire, even with a 4x ACOG Scope attached.',
  reference: 'https://pubg.gamepedia.com/M416'
})
createItems({
  name: 'akm',
  title: 'AKM',
  image: '/akm.png',
  videoLink: 'https://www.youtube.com/embed/LRkm89mWXvo',
  summary: 'The AKM is an assault rifle type weapon in BATTLEGROUNDS. The AKM is an improved version of the original AK-47, featuring improvements and refinements in manufacturing and materials to create a modernized version of one of the most recognizable firearms in the world. Especially popular with freedom fighters, insurgents and guerrilla forces, in BATTLEGROUNDS its stopping power makes it popular for close quarters combat.',
  reference: 'https://pubg.gamepedia.com/AKM'
})
createItems({
  name: 'scar',
  title: 'SCAR-L',
  image: '/scar.png',
  videoLink: 'https://www.youtube.com/embed/ZZnyaLkUtNs',
  summary: 'The SCAR-L is the light variant of the FN SCAR, a gas-operated short-stroke gas piston automated rifle chambered to a variety of cartridges. It was originally developed by FN Herstal for the United States Special Operations Command (SOCOM) as an entry to the SCAR Competition, a competition to find the new service rifle for SOCOM. As of 2015, the SCAR family of rifles is in service in over 20 countries. In BATTLEGROUNDS, it proves to be a well rounded rifle with a quieter muzzle report and good stability.',
  reference: 'https://pubg.gamepedia.com/SCAR-L'
})

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', function (request, response) {
  response.render('pages/homepage', {
    weapons: items
  })
})

app.get('/m416', function (request, response) {
  response.render('pages/products', {
    weapons: items,
    items: items[0]
  })
})

app.get('/akm', function (request, response) {
  response.render('pages/products', {
    weapons: items,
    items: items[1]
  })
})

app.get('/scar', function (request, response) {
  response.render('pages/products', {
    weapons: items,
    items: items[2]
  })
})

app.listen(port)
