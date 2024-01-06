const readline = require('readline');
const mongoose = require('mongoose');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter port number: ', (port_number) => {
    console.log(`Connecting to MongoDB on port ${port_number}...`);
    const url = "mongodb://localhost:" + port_number + "/stooldb";
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Connected successfully to server');
            rl.close();
        })
        .catch(err => {
            console.log('Something went wrong, try again');
            rl.close();
        });
});