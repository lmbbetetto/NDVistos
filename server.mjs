import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3001;

let pageVisits = {};

app.use(bodyParser.json());
app.use(cors());

app.get('/visits/:page_tag', (req, res) => {
  const { page_tag } = req.params;
  const visits = pageVisits[page_tag] || 0;
  res.json({ page_tag, visits });
});

app.post('/visits/:page_tag', (req, res) => {
  const { page_tag } = req.params;
  pageVisits[page_tag] = (pageVisits[page_tag] || 0) + 1;
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
