const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const flash = require('connect-flash')

const app = express()
const port = 3000


app.engine('handlebars', exphbs ({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true}))
app.use(flash())

app.get('/', (req, res) => {
  res.render('index')
})
app.post('/', (req,res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Express is listen on localhost${port}`)
})