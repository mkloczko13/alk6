var functions = require('./function');
// functions.sayHello();
// functions.add(3, 2);

const express = require("express");
const port = 3000;
const app = express();
//ustawienie, ze moja aplikacja musi korzystac z silnika hbs
app.set("view engine", 'hbs')
//gdy uzytkownik wchodzi na stronę
app.get('/', function (req, res) {
    res.render('index', {
    pageTitle: "Lekcja01"
    })
    })
app.get('/about', function (req, res){
res.send("My site")
})
app.listen(port, (err) => {
if (err) {
return console.log("coś poszło nie tak...:", err)
}
console.log("serwer działa na porcie", port)
})

const path = require('path')
app.use('/assets', express.static(path.join(__dirname, "./assets")));

app.use('/js', express.static(path.join(__dirname, "./js")));