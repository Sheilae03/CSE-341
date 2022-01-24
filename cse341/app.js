const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expresshbs = require('express-handlebars');

const app = express();

app.engine('handlebars', expresshbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'handlebars'}));
app.set('view engine', 'handlebars');
app.set('views','views');

const adminRoutes = require('./routes.admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
 
app.use('/admin',adminRoutes.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404');
});



app.listen(4001);