const express = require('express');
const router = express.Router();
const verify = require('./verifyToken');

const Note = require('../models/Note');

///// GET ALL NOTES /////
router.get('/', verify, async (req, res) => {
  try {
    const note = await Note.find();
    res.json(notes);
  } catch (err) {
    res.status(200).json({ message: err });
  }
});

///// GET A SPECIFIC NOTE /////
router.get('/:noteId', verify, async (req, res) => {
  // TEST: console.log(req.params.noteId)

  try {
    const note = await Note.findById(req.params.noteId);
    res.json(note);
  } catch (err) {
    res.status(200).json({ message: err });
  }
});

///// SUBMIT A NOTE /////
router.post('/', async (req, res) => {
  const note = new Note({
    title: req.body.title,
    description: req.body.description
  });

  try {
    const savedNote = await note.save();
    res.json(savedNote);
  } catch (err) {
    res.status(200).json({ message: err });
  }
  /* ALTERNATIVE (remember to remove async above): 
  post.save()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(200).json({ message: err });
    });
    */
});

///// DELETE A NOTE /////
router.delete('/noteId', verify, async (req, res) => {
  try {
    const removedNote = await Note.remove({ _id: req.params.noteId });
    res.json(removedNote);
  } catch (err) {
    res.status(200).json({ message: err });
  }
});

///// UPDATE A NOTE /////
router.patch('/:noteId', verify, async (req, res) => {
  try {
    const updatedNote = await Note.updateOne(
      { _id: req.params.noteId },
      {
        $set: {
          title: req.body.title,
          description: req.body.description
        }
      }
    );
    res.json(updatedNote);
  } catch (err) {
    res.status(200).json({ message: err });
  }
});

module.exports = router;
