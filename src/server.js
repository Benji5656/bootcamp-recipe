const express = require('express')
const app = express()
const path = require('path')
const request = require('request')

//serving files
app.use(express.static(path.join(__dirname, '../dist')))
app.use(express.static(path.join(__dirname, '../node_modules')))


app.get('/', function(req, res) {
    res.send("welcome welcome welcome")
})


const port = 3000
app.listen(port, function () {
    console.log(`Node server created at port ${port}`)
})