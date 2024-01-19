const express=require("express");
const app=express();
const port=3000

app.get("/ping",(req,res)=>{
    res.send("Weirdy Foody");
})

app.listen(port, () => {
    console.log(`server is running on PORT: ${port}`);
});