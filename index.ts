import express from 'express';
import multer from 'multer';

const upload = multer();
const app = express();
var formed: any = {};
app.post('/post', upload.none(), (req:any, res:any) => {
  const body = req.body;

  console.log(body.from);

  return res.status(200).send();
});

app.listen(80, () => console.log('SMTP Server app listening on port 80.'));
