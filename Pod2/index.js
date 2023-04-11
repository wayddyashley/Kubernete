const express = require('express') 
const app = express() 
const path = require('path') 
app.use(express.static(path.join(__dirname, 'public'))) 
app.set('port', 3001) 

app.get('/', (req, res) => {})

app.listen(app.get('port'), () => {
    console.log(`\nApp corriendo en el puerto ${app.get('port')}`)
})