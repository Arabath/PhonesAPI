import express from "express";
import morgan from "morgan";
// import phoneRoutes from "../routes/phone.routes";

const app = express()

//Enviar json a través de formulario
app.use(express.json())

//Para solicitud de obj entrantes
app.use(express.urlencoded({ extended: false }))

app.use(morgan('dev'))

// app.use( '/api/v1/phones', phoneRoutes )

app.use('/api/v1', (req, res, next) => {
    res.status(200).json({ message: "Respuesta al navegador" })
})

export default app;

