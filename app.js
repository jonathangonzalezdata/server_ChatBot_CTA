require("dotenv").config();
const express = require('express');
const app= express();

//Definimos el puerto como variable de entorno
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) =>{
    res.send(`
        <h1>HOLA ESTE ES UN PROYECTO DE EXPRESS</h1>
        <p>Esto es una aplicacion que estoy haciendo</p>
        <p>Corre en el puerto ${PORT}</p> 
        `);
});

app.listen(PORT, ()=>{
    console.log(`Servidor: http://localhost:${PORT}`);
});