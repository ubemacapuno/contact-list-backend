const mongoose = require('mongoose')
const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config() //env used to run on ports other than localhost

const HitlistModel = require("./models/hitlist") //This gets the models from the hitlist file

const port = process.env.PORT || 3001

//Middlewares
app.use(express.json()); //JSON is being parsed 
app.use(cors())

 //enter mongo atlas string here
mongoose.connect(
    'mongodb+srv://hitlistuser01:8k8EIOa1G1yPM1cT@cluster0.v7qodwc.mongodb.net/hitlist?retryWrites=true&w=majority', //manually added the mongodb user password, and the database name "/hitlist"
    {useNewUrlParser: true}
);

app.post('/insert', async (req, res) => {
    const contactName = req.body.contactName
    const company = req.body.company
    const phone = req.body.phone
    const email = req.body.email
    const position = req.body.position
    const fact = req.body.fact
    const additional = req.body.additional
    const hitlist = new HitlistModel({
        contactName: contactName, 
        contactCompany: company,
        contactPhone: phone,
        contactEmail: email,
        contactPosition: position,
        contactFact: fact,
        contactAdditional: additional,
    })//start passing your models here
    try {
        await hitlist.save()
        res.send("inserted data")
    } catch(err){
        console.log(err)
    }
})

app.get('/read', async (req, res) => {//have mongoose READ data from our database
    HitlistModel.find({},(err, result)=> {//leaving empty object {} will grab EVERYTHING from the database.
        if (err) {
            res.send(err)
        }
        res.send(result)
    })      
})

app.put('/update', async (req, res) => {
    const newAdditionalInfo = req.body.newAdditionalInfo //Update aditional info
    const id = req.body.id

    try {
        await HitlistModel.findById(id, (err, updatedAdditional) =>{
            updatedAdditional.contactAdditional = newAdditionalInfo
            updatedAdditional.save()
            res.send("Updated additional info")
        })
    }   catch(err){
        console.log(err)
    }
})

app.delete("/delete/:id", async (req,res) => {//pass value of "id" on the URL to use the delete request
    const id = req.params.id 
    await HitlistModel.findByIdAndRemove(id).exec() //findByIdAndRemove is a mongoose method to delete whole IDs!!
    res.send('Deleted contact')
})

app.listen(port, () =>{ //allow to run on either host port or localhost 3001
    console.log(`Server running on ${port}`)
});