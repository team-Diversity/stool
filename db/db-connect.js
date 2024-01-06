// const readline = require('readline');
// const mongoose = require('mongoose');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Enter port number: ', (port_number) => {
//     console.log(`Connecting to MongoDB on port ${port_number}...`);
//     const url = "mongodb://localhost:" + port_number + "/stooldb";
//     mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
//         .then(() => {
//             console.log('Connected successfully to server');
//             // r1.close();

//             // Define a schema
//             const Schema = mongoose.Schema;
//             const TestSchema = new Schema({
//               name: String
//             });

//             // Compile model from schema
//             const Test = mongoose.model('Test', TestSchema );

//             // Create an instance of model
//             const testdata = new Test({ name: 'test2' });

//             // Save the new model instance
//             testdata.save()
//                 .then(() => {
//                     console.log('Data saved successfully');
//                     rl.close();
//                 })
//                 .catch(err => {
//                     console.error('Error saving data: ', err);
//                     rl.close();
//                 });

//         })
//         .catch(err => {
//             console.log('Something went wrong, try again');
//             rl.close();
//         });
// });


const readline = require('readline');
const mongoose = require('mongoose');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let db;

rl.question('Enter port number: ', (port_number) => {
    console.log(`Connecting to MongoDB on port ${port_number}...`);
    const url = "mongodb://localhost:" + port_number + "/stooldb";
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Connected successfully to server');
            db = mongoose.connection;
            rl.close();
            
        })
        .catch(err => {
            console.log('Something went wrong, try again');
            rl.close();
        });
});

module.exports = db;