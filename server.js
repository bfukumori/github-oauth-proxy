import express, { json } from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors());
app.use(json());

app.get('/getAccessToken', async (req, res) => {
  const code = req.query.code;
  await fetch(
    `https://github.com/login/oauth/access_token?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&code=${code}
  `,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
    }
  )
    .then((response) => response.json())
    .then((data) => res.json(data));
});

app.get('/getUserData', async (req, res) => {
  const header = req.get('Authorization');
  console.log(header);
  await fetch('https://api.github.com/user', {
    method: 'GET',
    headers: {
      Authorization: header,
    },
  })
    .then((response) => response.json())
    .then((data) => res.json(data));
});

const port = 4000;

app.listen(port, () => console.log(`Proxy server running on port ${port}`));
