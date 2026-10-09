const express = require('express');
const app= express();

//Definimos el puerto como variable de entorno
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) =>{
    res.send(`
        <h1>HOLA PRECIOSA, ♥ TE AMO MUCHISIMO ♥♥♥</h1>
        <p>Esto es una aplicacion que estoy haciendo y simplemente pense en ti amor</p>
        <p>Eres la mejor novia del mundo Odette ♥♥</p>
        <p>Corre en el puerto ${PORT}</p> 
        `);
});

app.listen(PORT, ()=>{
    console.log('Nuestra aplicacion esta funcionando ♥')
});