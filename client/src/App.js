import { useState } from "react";
import axios from "axios";
import "./app.css";

function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/messages", {
        user_input: input,
      });
      setResponse(res.data.ai_response);
    } catch (err) {
      setResponse("Oops! Something went wrong.");
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">EternalPease 💀</h1>
      <form className="chat-form" onSubmit={handleSubmit}>
        <textarea
          className="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask us anything about EternalPease..."
          rows={5}
        />
        <button className="chat-button" type="submit">
          Ask!
        </button>
      </form>
      {response && (
        <div className="chat-response">
          <strong>Chatbot Response:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default App;
