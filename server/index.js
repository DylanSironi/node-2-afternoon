const express = require('express');
const messagesController = require('./controllers/messages_controller');

const app = express();

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))


const messageUrl = "/api/messages";
app.post(messageUrl, messagesController.create);
app.get(messageUrl, messagesController.read);
app.put(`${messageUrl}/:id`, messagesController.update);
app.delete(`${messageUrl}/:id`, messagesController.delete);

app.listen(6455, () => console.log('Server running on 6455'))