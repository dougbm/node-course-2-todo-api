// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // deleteMany
  db.collection('Users').deleteMany({name: 'Douglas'}).then((result) => {
    console.log('DELETE-MANY', result);
  });

  // deleteById
  db.collection('Users').deleteOne({_id: new ObjectID('596e505045ef5a284f98552a')}).then((result) => {
    console.log('DELETE-ONE', result);
  });

  // findOneAndDelete
  db.collection('Users').findOneAndDelete({name: 'Jane'}).then((result) => {
    console.log('FIND-ONE-AND-DELETE', result);
  });

  // db.close();
});
