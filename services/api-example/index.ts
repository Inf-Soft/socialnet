import express from 'express';

const app = express();
app.use(express.json());

const messageExpressServer: string = 'HOLA MUNDO';

app.get('/', (req, res) => {
  res.send(messageExpressServer);
});

app.listen(4000, () => {
  console.log(messageExpressServer);
});
