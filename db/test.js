//This is just a test file to test the connection to the database in other js files

const db = require('./db-connect.js');
const mongoose = require('mongoose');

mongoose.connection.on('open', function (ref) {
    console.log('Connected to mongo server.');

    // Define a schema
    const Schema = mongoose.Schema;
    const TestSchema = new Schema({
    name: String
    });

    // Compile model from schema
    const Test = mongoose.model('Test', TestSchema );

    // Create an instance of model
    const testdata = new Test({ name: 'test1' });

    // Save the new model instance
    testdata.save()
        .then(() => {
            console.log('Data saved successfully');
        })
        .catch(err => {
            console.error('Error saving data: ', err);
        });
    
});

