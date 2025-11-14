import React, { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Prvi task" },
    { id: 2, text: "Drugi task" },
  ]);

  const [editingId, setEditingId] = useState(null);

  return (
    <div>
      <h1>Mini Edit Demo</h1>

      {tasks.map((t) => (
        <div key={t.id}>
          {editingId === t.id ? (
            <input />
          ) : (
            <>
              <span>{t.text}</span>
              <button onClick={() => setEditingId(t.id)}>Edit</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
