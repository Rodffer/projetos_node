import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.json({ message: 'TS' });
});

app.listen(3333, () => {
  console.log('Servidor iniciado! 🧸');
});
