import { useState } from "react";
import axios from "axios";

function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/messages", { user_input: input });
    setResponse(res.data.ai_response);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>EternalPease 💀</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask us anything about EternalPease..."
        ></textarea>
        <button type="submit">Ask!</button>
      </form>
      {response && (
        <div style={{ marginTop: "1rem", padding: "1rem", background: "#eee" }}>
          <strong>Chatbot Response:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default App;
