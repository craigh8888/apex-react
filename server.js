// This controls Parcel + Server 
// to start PARCEL - run this in a seperated terminal: npx parcel src/index.html
// to start NODE Server - run this in a seperated terminal: node server.js
// This could change once properly integrated; plz check back for updates.

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const companion = require('@uppy/companion');

const app = express();

app.use(bodyParser.json())
app.use(session({ secret: 'some security money' }));


const cors = require('cors');


const path = require('path');
const multer = require('multer');


// const options = {
//     providerOptions: {
//         drive: {
//             key: 'Google_Drive_key',
//             secret: 'Google_Drive_secret',
//         },
//     },
//     server: {
//         host: 'localhost:8080',
//         protocol: 'http',
//         // this must match the path you specify
//         path: '/companion',
//     },
//     filePath: '/path/to/folder',
// }

// const { app: companionApp } = companion.app(options)

// app.use('/companion', companionApp)




const storage = multer.diskStorage({
    destination: `${__dirname}/uploads/`,
    filename: (req, file, cb) => {
        const fileName = `${Date.now()}${path.extname(file.originalname)}`;
        cb(null, fileName);
    }
})

const uploadImage = multer({ storage }).single('photo');

app.use(cors());
app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.post('/image', uploadImage, (req, res) => {
    console.log(req.file);
    if (req.file) return res.json({ msg: 'good job uploading the image' });

    res.send('Image Upload Failed');
});


const port = process.env.PORT || 8080;
const server = app.listen(port)
companion.socket(server)


app.get('/ping', function (req, res) {
    return res.send('pong');
});


// app.get('*', function (req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// app.listen(port, () => {
//     console.log('listening on port port');
// });


