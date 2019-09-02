const express = require('express')
const app = express()
const path = require('path')
const request = require('request')

//serving files
app.use(express.static(path.join(__dirname, '../dist')))
app.use(express.static(path.join(__dirname, '../node_modules')))

/*
app.get("/sanity", function(req, res){
    res.send("ok")
})
*/

app.get('/recipe/:ingredient', function(req, res) {
    const search = req.params.ingredient

    request(`https://recipes-goodness.herokuapp.com/recipes/${search}`, function(error, response, body) {
        data = JSON.parse(body)
        const recipes =[]
        let snapshot = data.results.filter(d => d.strCategory || d.ingredients === search)
        snapshot.forEach(r => {
            let results = {
                dish: r.title,
                pic: r.thumbnail,
                link: r.href,
                ingredients: [r.ingredients]
            }
            recipes.push(results)          
        }) 
        res.send(recipes)
    })  
})


const port = 8080
app.listen(port, function () {
    console.log(`Node server created at port ${port}`)
})