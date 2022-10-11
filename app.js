// imports
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 3000


// Static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

//Set Template Views
app.use(expressLayouts)
app.set('view engine', 'ejs')

app.get('', (req, res) => {
    res.render('index', {text: 'Home'})
})

app.get('/about-us', (req, res) => {
    res.render('about', {text: 'About Us'})
})

app.get('/services', (req, res) => {
    res.render('services', {text: 'Services'})
})

app.get('/management-and-staff', (req, res) => {
    res.render('staff', {text: 'Management & Staff'})
})

app.get('/gallery', (req, res) => {
    res.render('gallery', {text: 'Gallery'})
})

app.get('/contact-us', (req, res) => {
    res.render('contact', {text: 'Contact Us'})
})

// Listen on port 3000
app.listen(port, () => console.info('Listening to port ' + port))