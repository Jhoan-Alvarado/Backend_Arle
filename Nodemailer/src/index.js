const express = require ('express')
const app = express();
const path = require ('path')

app.use (express.urlencoded({extended:false}))
app.use (require ('./routes/index.js'))

app.use (express.static (path.join(__dirname, 'public')));


app.listen (3000, ()=>{
    console.log('Server Run');
})