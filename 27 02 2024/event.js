const {EventEmitter} =require('events');



const Student =new EventEmitter();



Student.on('raise_hand', () =>{
    console.log('Student clicked')
})

Student.on('noise', (name) =>{
    console.log(`Mute student ${name}`)
})

Student.on('camera-on', () =>{
    console.log('turn video off')
})

// Student.emit('raise_hand')
// Student.emit('camera-on')
// Student.emit('noise','Nihal')

let player_health =100;

const Player =new EventEmitter();


Player.on('injuired' ,() =>{
    player_health -=25;
})


