const express = require('express')
const app = express();
const jsxViewEngine = require('jsx-view-engine');

app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsx', jsxViewEngine());


 
// ================ Middleware ================
//
app.use((req, res, next) => {
    console.log('Middleware: I run for all routes');
    next();
})
//near the top, around other app.use() calls
app.use(express.urlencoded({extended:false}));

// I - INDEX - dsiplays main index page
app.get('/', (req, res) => {
    res.render('Index');
});

// S - SHOW - 
app.get('/:numberOfBottles', (req, res) => {
    res.render('Show', {
        bottles: req.params.numberOfBottles
    });
})

app.listen(3000, () => {
    console.log('listen on port 3000')
});