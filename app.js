import express from "express"; 

const app = express();

app.post("/users",(req,res) =>
{
    res.send("Pruebaaa");    
});

export default app;
