import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/notes";

function App() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        try {
            const response = await axios.get(API_URL);
            setNotes(response.data);
        } catch (error) {
            console.log("Error fetching notes:", error);
        } finally {
            setLoading(false);
        }
    };

    const addNote = async (e) => {
        e.preventDefault();

        if (!title.trim() || !content.trim()) {
            return;
        }

        try {
            const response = await axios.post(API_URL, {
                title,
                content
            });

            setNotes([response.data, ...notes]);

            setTitle("");
            setContent("");
        } catch (error) {
            console.log("Error creating note:", error);
        }
    };

    const deleteNote = async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`);

            setNotes(notes.filter((note) => note._id !== id));
        } catch (error) {
            console.log("Error deleting note:", error);
        }
    };

    return (
        <div className="app">
            <h1>Notes App</h1>

            <form onSubmit={addNote} className="note-form">
                <input
                    type="text"
                    placeholder="Note title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                    placeholder="Write your note..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />

                <button type="submit">
                    Add Note
                </button>
            </form>

            <div className="notes-container">
                <h2>Your Notes</h2>

                {loading ? (
                    <p>Loading notes...</p>
                ) : notes.length === 0 ? (
                    <p>No notes yet — add one above!</p>
                ) : (
                    notes.map((note) => (
                        <div className="note-card" key={note._id}>
                            <div>
                                <h3>{note.title}</h3>

                                <p>{note.content}</p>

                                <small>
                                    {new Date(note.createdAt).toLocaleString()}
                                </small>
                            </div>

                            <button
                                className="delete-button"
                                onClick={() => deleteNote(note._id)}
                            >
                                Delete
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default App;