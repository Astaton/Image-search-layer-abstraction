const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 3000;

const app = express();

//parsers for url and cookies
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
//send style sheets
app.use('/static',express.static('public'));

//set view engine
app.set('view engine', 'pug');

//set routes
const mainRoutes = require('./routes');
const apiRoutes = require('./routes/api.js');
app.use('/home', mainRoutes);
app.use('/api', apiRoutes);

//redirect from root to home
app.get('/', (req, res)=>{
	res.redirect('/home');
});

//if not found direct to 404 error
app.use((req, res, next)=>{
	const err = new Error('Not Found');
	err.status  = 404;
	next(err);
});

app.use((err, req, res, next)=>{
	res.locals.error = err;
	res.status(err.status);
	res.render('error', err);
});

//start server 
app.listen(port, ()=>{
	console.log("starting app on port: "+port+"!!");
});