const express = require('express')

const app = express()
app.use(express.static("public"))

const http = require('http').Server(app)

const serverSocket = require('socket.io')(http)

const host = "http://localhost"

http.listen(8080, () => {
  console.log('Servidor iniciado. Abra o navegador em ' + host)
})

function receiveUserConnection(socket) {
  socket.on('disconnect', () => console.log('Cliente desconectado: ' + socket.nickname))
  socket.on('chat msg', (msg) => encaminhaMsgsUsuarios(socket, msg))
  socket.on('status', (msg) => encaminhaMsgStatus(socket, msg))
}

function encaminhaMsgStatus(socket, msg) {
  socket.broadcast.emit('status', msg)
}

function encaminhaMsgsUsuarios(socket, msg) {
  serverSocket.emit('chat msg', `${socket.nickname} diz: ${msg}`)
}

serverSocket.on('connect', receiveUserConnection)