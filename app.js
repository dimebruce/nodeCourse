// Importando el servidor http que viene por defecto por node
const http = require('http')

// Levantando el servidor
const server = http.createServer((req, res) => {
    res.end('respuesta a la solicitud V.2')
})
// Creando el puerto 
const port = 3000; 
server.listen(port, () => {

    console.log('escuchando solicitudes desde el puerto')
})