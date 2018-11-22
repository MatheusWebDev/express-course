const PORT = 3000;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set Static path
app.use(express.static(__dirname + '/public'));

app.get('/users', (req, res) => {
   let users = [
      {
         first_name: "John",
         last_name: "Doe",
         age: 34,
         gender: "male"
      },
      {
         first_name: "Tom",
         last_name: "Jackson",
         age: 32,
         gender: "male"
      },
      {
         first_name: "Jane",
         last_name: "Doe",
         age: 21,
         gender: "female"
      }
   ];

   res.json(users);
});

app.listen(PORT, () => {
   console.log(`APP rodando na porta ${PORT}`);
});