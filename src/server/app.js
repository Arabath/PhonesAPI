const express = require('express')
const morgan = require('morgan')
const phoneRoutes = require('../routes/phone.routes')

const app = express()

//Enviar json a través de formulario
app.use(express.json())

//Para solicitud de obj entrantes
app.use(express.urlencoded({extended: false}))

app.use(morgan('dev'))

app.use( '/api/v1/phones', phoneRoutes )

app.use('/api/v1', (__, res)=> {
    res.status(200).json({message: "Respuesta al navegador"})
})

module.exports = app;


