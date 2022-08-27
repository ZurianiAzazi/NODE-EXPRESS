// import express package so that it can be used to create express app
const { response } = require('express')
let express = require('express')

// create express app
let app = express()

// create first end point
app.get("/", (request, response)=>{
    console.log("in get request function")
    let msg = {
        "message": "Request is success",
        "requestType": "GET"
    }
    response.json(msg)

    })

    app.post("/",(request, response)=>{
    console.log("in post request function")
    let msg = {
        "message": "Request is success",
        "requestType": "POST"
    }
    response.json(msg)
})

app.get("/get/friends", (req, res)=>{
    res.json({
        data:"list of friends",
        requestType:"GET"
    })
})

    const PORT =4111
    app.listen(PORT, ()=>{
        console.log("Listening to port: " + PORT)
    })
