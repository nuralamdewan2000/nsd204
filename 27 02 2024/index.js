const ws =require('ws');

const wss =new ws.WebSocketServer({port: 4000});


// wss.on('connection' ,(soket) =>{
//     console.log('new client connected');

//     soket.onmessage =(event) =>{
//         console.log(event.data);
//         soket.send("hello from server")
//     }
// })

// run this on browser console
// const soket =new WebSocket("ws://localhost:4000")
// soket.onopen = () =>soket.send("hgghi")
// soket.onmessage = (event) => console.log(event.data)

wss.on('connection' ,(soket) =>{
    console.log('new client connected');
    soket.send("hello from server")

    soket.onmessage =(event) =>{
        console.log(event.data);

        if(event.data==='hi'){
            soket.send("Hello!")
        }else if(event.data==='bye'){
            soket.send("bye bye!")
        }else{
            soket.send(event.data)
        }
       
    }

    soket.onclose =() =>{
        console.log('client disconnected')
    }
})