const express = require('express');
const router = express.Router();
const multer = require('multer');

const { Work } = require('../models/Work');

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/test');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== '.mp4') {
      return cb(res.status(400).end('only jpg, png, mp4 is allowed'), false);
    }
    cb(null, true);
  },
});

var upload = multer({ storage: storage }).single('file');

router.post('/uploadfiles', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.json({
      success: true,
    });
  });
});

router.get('/getWorks', (req, res) => {
  Work.find().exec((err, works) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, works });
  });
});

router.post('/uploadWork', (req, res) => {
  const work = new Work(req.body);

  work.save((err, work) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

module.exports = router;
