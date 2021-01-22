const express = require('express')

const app = express()
const path = require('path')
const port = process.env.PORT || 8080

app.use(express.static('dist'))
app.set('view engine', 'ejs')
app.set('views', 'dist/')
app.set({
  'Set-Cookie': 'HttpOnly;Secure;SameSite=none'
})

app.use('/js', express.static(__dirname + '/js'))
app.use('/css', express.static(__dirname + '/css'))
app.use('/fonts', express.static(__dirname + '/fonts'))
app.use('/img', express.static(__dirname + '/img'))
app.use('/static', express.static(__dirname + '/static'))

app.use( express.urlencoded({extended: true, limit: '500mb'}) )

app.route('/').get(function onRequest(req, res) {
	res.render('index.ejs')
});

app.route('/*').get(function onRequest(req, res) {
	res.render('index.ejs')
});

app.listen(port, function() {
	console.log(`Express is Running and Listening on port ${port}`);
});
