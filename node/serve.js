const express = require("express")
const app = express()
const port = 4546

//configuración mensaje de entrada y ruta 
app.get("/",(req,res)=>{
    res.send("hola")
})
// configurando puerto 
app.listen(port,()=>{
    console.log("testando")
    
})