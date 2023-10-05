import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import mongoose from "mongoose";
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

const contactlistSchema = mongoose.Schema({
        title : String,
        text: String
})
const marieInfo = mongoose.model("Infos",contactlistSchema);

app.get("/",(req,res)=>{
    res.render("home.ejs");
})
app.get("/contact",(req,res)=>{
    res.render("contact.ejs");
})
app.post("/contact",(req,res)=>{
    res.render("contact.ejs");
    // const infoitem = new marieInfo({
    //     title: req.body.title,
    //     text: req.body.text
    // })
    // marieInfo.insertMany(infoitem)
    //     .then(result =>{
    //         console.log(result);
    //     })
    //     .catch(err =>{
    //         console.log(err);
    //     })
})
app.get("/painting",(req,res)=>{
    res.render("painting.ejs");
})
app.get("/about",(req,res)=>{
    res.render("about.ejs");
})
app.get("/digital",(req,res)=>{
    res.send("this baby is under construction!")
})
app.listen(3000,()=>{
    console.log("Server started on port 3000");
})