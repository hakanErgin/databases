const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const connectedModel = require('./program.js');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  connectedModel.load((err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.send(result);
    }
  });
})

app.get('/:id', (req, res) => {
  const id = req.params.id;
  connectedModel.read(id, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log('read by id successful');
      res.send(result);
    }
  })
});

app.post('/', (req, res) => {
  const description = req.body.description;
  const userId = req.body.id;
  connectedModel.create(description, userId, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('create successful');
      res.send(id + ' created');
    }
  })
});

app.patch('/', (req, res) => {
  const id = req.body.id;
  const description = req.body.description;
  connectedModel.update(id, description, (err, result) => {
    if (err) {
      console.error(err);
      // send a helpful error response!
    } else {
      console.log('update successful');
      res.send(id + ' updated');
    }
  })
});

app.delete('/', (req, res) => {
  const id = req.body.id;
  connectedModel.delete(id, (err, result) => {
    if (err) {
      console.error(err);
      // send a helpful error response!
    } else {
      console.log('delete successful');
      res.send(id + ' deleted');
    }
  })
});

app.post('/tagTodoItem', (req, res) => {
  const itemId = 'parse the id from the request';
  const tagId = 'parse the id from the request';
  connectedModel.tagTodoItem(itemId, tagId, (err, result) => {
    if (err) {
      console.error(err);
      // send a helpful error response!
    } else {
      console.log('tag successful');
      res.send(result);
    }
  })
});

app.delete('/untagTodoItem', (req, res) => {
  const itemId = 'parse the id from the request';
  const tagId = 'parse the id from the request';
  connectedModel.untagTodoItem(itemId, tagId, (err, result) => {
    if (err) {
      console.error(err);
      // send a helpful error response!
    } else {
      console.log('untag successful');
      res.send(result);
    }
  })
});

app.patch('/markCompleted', (req, res) => {
  const itemId = 'parse the id from the request';
  connectedModel.markCompleted(itemId, (err, result) => {
    if (err) {
      console.error(err);
      // send a helpful error response!
    } else {
      console.log('mark completed successful');
      res.send(result);
    }
  })
});

const port = 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
