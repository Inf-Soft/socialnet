import express from 'express';

const app = express();
app.use(express.json());

const port = process.env.PORT || 4000;

const messageExpressServer: string = `Server running in port: ${port}`;

app.get('/', (_req, res) => {
  res.send(messageExpressServer);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(messageExpressServer, port);
});
