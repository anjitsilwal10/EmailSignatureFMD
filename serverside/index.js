const express = require('express');
const https = require('https');
const app = express();
const cors = require('cors');
const PORT = 3000;
const fs = require('fs');
const path = require('path');
const origin = "https://es.multidynamic.com.au"

const certificate = fs.readFileSync('/etc/letsencrypt/live/es.multidynamic.com.au/fullchain.pem', 'utf8');
const privateKey = fs.readFileSync('/etc/letsencrypt/live/es.multidynamic.com.au/privkey.pem', 'utf8');

// SSL certificate options
const options = {
    key: privateKey,
    cert: certificate
};

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
    //origin: 'https://es.multidynamic.com.au:4000',
    origin: origin,
    methods: ['GET', 'POST', 'DELETE']
}));


app.get('/', (req, res) => {
    res.status(200).json({
        msg: "working"
    });
});
/* uploadin the image in the uploads folder */
app.post('/upload', upload.single('image'), (req, res) => {
    console.log(req.file);
    res.send('file uploaded successfully')
})

// app.post('/upload', upload.single('image'), async (req, res) => {
//     try {
//         const originalFilePath = req.file.path; // The original path of the uploaded file
//         const originalFileName = req.file.originalname; // Original file name
//         const resizedTempPath = path.join('uploads', `temp_${originalFileName}`); // Temporary path for the resized image

//         // Get image metadata to determine if resizing is needed
//         const metadata = await sharp(originalFilePath).metadata();

//         if (metadata.width > 130 || metadata.height > 130) {
//             // Resize the image to 130x130 and save to a temporary path
//             await sharp(originalFilePath)
//                 .resize(130, 130, {
//                     fit: 'cover', 
//                 })
//                 .jpeg({ quality: 100 }) 
//                 .toFile(resizedTempPath); 

//             // Replace the original file with the resized image
//             await fs.promises.rename(resizedTempPath, path.join('uploads', originalFileName));

//             res.status(200).json({
//                 message: 'File uploaded and resized successfully',
//                 filePath: `/uploads/${originalFileName}`, // Path to the resized image
//             });
//         } else {
//             res.status(200).json({
//                 message: 'File uploaded, no resizing required',
//                 filePath: `/uploads/${originalFileName}`, // Path to the original image (no resizing needed)
//             });
//         }
//     } catch (err) {
//         console.error('Error handling image upload:', err);
//         res.status(500).json({
//             message: 'Error occurred while processing the image',
//             error: err.message, // Provide error message in response
//         });
//     }
// });




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

// DELETE endpoint to remove an image from the "uploads" directory
app.delete('/dele/:imagePath', (req, res) => {
    const { imagePath } = req.params; // Extract the image path from the URL
    const fullPath = path.join(__dirname, 'uploads', imagePath); // Create the full path

    // Check if the file exists before trying to delete it
    if (!fs.existsSync(fullPath)) {
        return res.status(404).send('File not found'); // If not, return a 404 error
    }

    // Try to delete the file
    fs.unlink(fullPath, (err) => {
        if (err) {
            console.error('Error deleting file:', err); // Log errors if any
            return res.status(500).send('Error deleting file'); // Return a 500 status code for server errors
        }

        res.send('File deleted successfully'); // Success message on successful deletion
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


        const imagesMarkup = imageFiles.map(file => {
            // const imagePath = `https://es.multidynamic.com.au:3000/uploads/${file}`; // Path to the image
            const imagePath = `https://es.multidynamic.com.au:3000/uploads/${file}`;
            return { imagePath, fileName: file };
        });

        // Send the HTML markup as the response
        res.send(imagesMarkup);
    });
});


// app.listen(PORT, () => {
//     console.log(`server running on port ${PORT}`);
// });

// Create HTTPS server
const server = https.createServer(options, app);

server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});