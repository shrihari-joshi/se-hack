const express = require('express')
const router = express.Router()
const { uploadImage, uploadPdf } = require('../config/multerOptions')

router.post("/upload/images", uploadImage.single('product'), (req, res) => {
    try {
        res.json({
            success: true,
            image_url: `http://localhost:3500/images/${req.file.filename}`
        })
    } catch (err) {
        console.log(err.message);
        res.json({ message : 'Cannot add image'})
    }
});

router.post("/upload/pdfs", uploadPdf.single('product'), (req, res) => {
    try {
        res.json({
            success: true,
            pdf_url: `http://localhost:3500/pdfs/${req.file.filename}`
        })
    } catch(err) {
        console.log(err.message);
        res.json({ message : 'Cannot add pdf'})
    }
});

module.exports = router;