const express = require('express');
const {Server} = require('socket.io');
const http = require('http');

const app = express();

const httpServer = http.createServer(app)

app.get('/' ,(req,res) =>{
    res.send('Welcome')
})


httpServer.listen(4000)

const io =new Server(httpServer)

let count =0
io.on('connection' ,(socket) =>{
    console.log('client connected')
    count++
    console.log(`Total clients =${count}`)
    socket.emit('abc',"Hello from server")
    socket.emit('commands', 'Hands up')
    io.emit('online-count', count)


    socket.on('disconnect',() => {
        console.log('client disconnected')
        count--
        console.log(`Total clients =${count}`)
        socket.broadcast.emit('online-count', count)
    })
})

