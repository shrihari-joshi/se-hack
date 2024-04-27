const multer = require('multer');
const path = require('path');

const imageStorage = multer.diskStorage({
    destination: './uploads/images',
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const pdfStorage = multer.diskStorage({
    destination: './uploads/pdfs',
    filename: (req, file, cb) => {
        cb(null, file.originalname); 
    }
});

const uploadImage = multer({ storage: imageStorage });
const uploadPdf = multer({ storage: pdfStorage });

module.exports = { uploadImage, uploadPdf };
