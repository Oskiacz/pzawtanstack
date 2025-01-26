const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const bcrypt = require('bcrypt');
const saltRounds = 10;

app.use(cors);
app.use(bodyParser);

app.get('/', (req, res) => {
  res.status(200).send("hi")
});

app.post('/users/register', (req, res) => {
  console.log(req.body);
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    console.log(hash);
  })
  res.statusCode(200);
  res.send("good");
})

app.get('/images/:id', (req, res) => {
  const id = req.params.id;
  const images = ['https://static.wikia.nocookie.net/familyguy/images/a/aa/FamilyGuy_Single_PeterDrink_R7.jpg/revision/latest/top-crop/width/200/height/150?cb=20230815202349',
    'https://static.wikia.nocookie.net/familyguy/images/1/1b/FamilyGuy_Single_MegMakeup_R7.jpg/revision/latest/top-crop/width/200/height/150?cb=20200526171840',
    'https://static.wikia.nocookie.net/familyguy/images/9/90/FamilyGuy_Single_StewieBackpack_R7.jpg/revision/latest/top-crop/width/200/height/150?cb=20200526171841',
    'https://static.wikia.nocookie.net/familyguy/images/7/7c/FamilyGuy_Single_LoisPose_R7.jpg/revision/latest/top-crop/width/200/height/150?cb=20231118212131',
    'https://static.wikia.nocookie.net/familyguy/images/c/c2/FamilyGuy_Single_BrianWriter_R7.jpg/revision/latest/top-crop/width/200/height/150?cb=20230807152447',
    'https://static.wikia.nocookie.net/familyguy/images/e/ee/FamilyGuy_Single_ChrisText_R7.jpg/revision/latest/top-crop/width/200/height/150?cb=20230815202356',
    'https://static.wikia.nocookie.net/familyguy/images/1/1f/Quagmire.PNG/revision/latest/top-crop/width/200/height/150?cb=20221004124745',
    'https://static.wikia.nocookie.net/familyguy/images/9/9c/190px-Joe_Swanson.png/revision/latest?cb=20100326012234',
    'https://static.wikia.nocookie.net/familyguy/images/1/1f/Cleveland.png/revision/latest?cb=20100121115548' 
  ]
  res.send(images[id]);
})

app.listen(8080);
