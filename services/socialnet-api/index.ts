import express from 'express';

const app = express();
app.use(express.json());

const port = process.env.PORT || 4000;

const messageExpressServer: string = `Server running in port: ${port}`;

app.get('/', (req, res) => {
  res.send(messageExpressServer);
});

app.listen(port, () => {
  console.log(messageExpressServer, port);
});
