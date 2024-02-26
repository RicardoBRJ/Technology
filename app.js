const express =require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const { default: mongoose, mongo } = require('mongoose');
const Usuarios = require('./models/user')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

const mongo_uri = 'mongodb://localhost:27017/server'


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

mongoose.connect(mongo_uri, function (err) {
  if (err){
    throw err;
  }else{
    console.log(`conexion exitosa ${mongo_uri}`)
  }
})




app.post('/register', (req, res)=>{
  const {nombre,apellido,fecha,email} = req.body
  const user = new Usuarios({nombre,apellido,fecha,email});

  user.save(err=>{
    if(err){
      console.log(err)
      res.status(500).send('error al registrar usuario')
    }else{
      res.status(200).send('Usuario registrado')
    }
  })
})


app.listen(4000, ()=>{
  console.log('server iniciado');
});

module.exports = app;






