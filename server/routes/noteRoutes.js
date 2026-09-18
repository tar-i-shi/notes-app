const express = require("express");
const Note = require("../models/Note");

const router = express.Router();

// POST /api/notes
router.post("/", async (req, res) => {
    try {
        const { title, content } = req.body;

        const note = new Note({
            title,
            content
        });

        const savedNote = await note.save();

        res.status(201).json(savedNote);
    } catch (err) {
        res.status(500).json({
            message: "Failed to create note",
            error: err.message
        });
    }
});

// GET /api/notes
router.get("/", async (req, res) => {
    try {
        const notes = await Note.find().sort({ createdAt: -1 });

        res.status(200).json(notes);
    } catch (err) {
        res.status(500).json({
            message: "Failed to fetch notes",
            error: err.message
        });
    }
});

// DELETE /api/notes/:id
router.delete("/:id", async (req, res) => {
    try {
        const note = await Note.findByIdAndDelete(req.params.id);

        if (!note) {
            return res.status(404).json({
                message: "Note not found"
            });
        }

        res.status(200).json({
            message: "Note deleted successfully"
        });
    } catch (err) {
        res.status(500).json({
            message: "Failed to delete note",
            error: err.message
        });
    }
});

module.exports = router;