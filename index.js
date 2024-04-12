require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/instagram' , (req,res) => {
    res.send('Omkale_18')
})

app.get('/login', (req,res) => {
    res.send('<h1> plz send at chai aur code')
})

app.get('/youtube', (req, res) => {
  res.send('<h2>Chai aur code </h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

//hence we have created a server