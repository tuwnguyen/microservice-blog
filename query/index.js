const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const posts = {};

const handleEvent = (type, data) => {
  if (type === 'PostCreated') {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  }
  if (type === 'CommentCreated') {
    const { id, content, postId, status } = data;
    const post = posts[postId];
    post.comments.push({ id, content, status });
  }

  if (type === 'CommentUpdated') {
    const { id, content, postId, status } = data;
    const post = posts[postId];
    const comment = post.comments.find((c) => c.id === id);
    comment.status = status;
    comment.content = content;
  }
};

app.post('/events', (req, res) => {
  console.log('Received Event', req.body.type);
  const { type, data } = req.body;
  handleEvent(type, data);
  res.send({});
});

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.listen(4002, async () => {
  console.log('listening on 4002');
  try {
    const res = await axios.get('http://event-bus-srv:4005/events');

    for (let event of res.data) {
      console.log('Processing event:', event);
      handleEvent(event.type, event.data);
    }
  } catch (error) {
    console.log(error.message);
  }
});
