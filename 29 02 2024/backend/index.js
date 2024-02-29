const express =require('express')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


const app = express()

const client_id ="1d7e34b17413d5b7aa0f"
const client_secret ="be6a65e421ae7970b353c02d229d081b8142e2fb"


app.get('/', (req, res) => {
    res.send('this is home route')
}) 

app.get('/login-with-github', (req, res) => {
    res.sendFile(__dirname +"/index.html")
})

app.get('/auth/github', async(req, res) => {
    const code =req.query.code
   const response=await fetch('https://github.com/login/oauth/access_token',{
        method:"POST",
        headers:{
            'Content-type': 'application/json',
            'Accept': 'application/json'
        },
        body:JSON.stringify({
            client_id,
            client_secret,
            code
        })
    })
    .then((res) =>res.json())
    .catch((err) =>console.log(err))


    console.log(response)
    const access_token =response.access_token
    const user_data =await fetch('https://api.github.com/user',{
        headers:{
            'Authorization': `Bearer ${access_token}`
        }
    }).then((res) =>res.json())
    .catch((err) =>console.log(err))

    console.log(user_data)
    res.send('github callback route page'+code)
})


app.listen(4000, () =>{
    console.log(`ser is running on http://localhost:4000`)
})