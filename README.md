# 99bottles-express

In terminal =>===

npm install react react-dom jsx-view-engine --save

In server.js =>

const jsxViewEngine = require('jsx-view-engine');

app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsx', jsxViewEngine());
