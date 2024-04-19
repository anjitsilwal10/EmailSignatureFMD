const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const multer = require('multer');

/* multer setup for original fliename */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });
/* cors setup */
app.use(cors({
    origin: 'http://localhost:4000',
    methods: ['GET', 'POST']
}));

/* uploadin the image in the uploads folder */
app.post('/upload', upload.single('image'), (req, res) => {
    console.log(req.file);
    res.send('file uploaded successfully')
})

    /
    app.get('/uploads/:filename', (req, res) => {
        const { filename } = req.params;
        const filePath = path.join(__dirname, 'uploads', filename);


        fs.exists(filePath, (exists) => {
            if (exists) {
                // Stream the file to the client
                const fileStream = fs.createReadStream(filePath);
                fileStream.pipe(res);
            } else {
                // File not found
                res.status(404).send('File not found.');
            }
        });
    });

app.get('/uploads', (req, res) => {
    const directoryPath = path.join(__dirname, 'uploads');

    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        const imageFiles = files.filter(file => {
            return ['.jpg', '.jpeg', '.png', '.gif'].includes(path.extname(file).toLowerCase());
        });

        // Generate HTML markup for each image
        // const imagesMarkup = imageFiles.map(file => {
        //     const imagePath = `http://localhost:3000/uploads/${file}`; // Path to the image
        //     return `<img src="${imagePath}" alt="${file}" width="820px" height="150px" />`;
        // }).join('\n');
        const imagesMarkup = imageFiles.map(file => {
            const imagePath = `http://localhost:3000/uploads/${file}`; // Path to the image
            return { imagePath, fileName: file };
        });

        // Send the HTML markup as the response
        res.send(imagesMarkup);
    });
});



app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});