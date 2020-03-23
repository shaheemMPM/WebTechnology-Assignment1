const express     = require('express'),
      app         = express(),
      bodyParser  = require("body-parser")

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send("<h3>This is the root of case-switcher-api</h3> Checkout <br><strong>\\upper</strong> <br>and <br><strong>\\lower</strong> <br>endpoints (POST)")
})

app.post('/upper', (req, res) => {
  console.log(req.body)
  res.send(req.body)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`App started running on port : ${PORT}`)
})
