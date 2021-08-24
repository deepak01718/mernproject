const mongoose = require('mongoose');

const myDB = process.env.URL;
 
// connecting database to server
mongoose.connect(myDB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then( () => {
    console.log(`connection successful to database`);  
}).catch( (err) => console.log(`no connection`));