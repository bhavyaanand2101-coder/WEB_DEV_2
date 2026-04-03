import { useState } from "react";
import Header from "./Components/Header";
import StudentTable from "./Components/StudentTable";
import AddStudentForm from "./Components/AddStudentForm";
import "./App.css";

export default function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Aman", score: 78 },
    { id: 2, name: "Riya", score: 45 },
    { id: 3, name: "Karan", score: 90 },
    { id: 4, name: "Neha", score: 68 },
  ]);

  // Add Student
  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name,
      score: Number(score),
    };
    setStudents([...students, newStudent]);
  };

  // Update Score
  const updateScore = (id, newScore) => {
    const updated = students.map((s) =>
      s.id === id ? { ...s, score: Number(newScore) } : s
    );
    setStudents(updated);
  };

  // Stats
  const total = students.length;
  const passed = students.filter((s) => s.score >= 40).length;
  const avg =
    students.reduce((acc, s) => acc + s.score, 0) / total || 0;

  return (
    <div className="container">
      <Header />

      <AddStudentForm addStudent={addStudent} />

      {/* Stats */}
      <div className="stats">
        <div className="card">
          <h3>Total</h3>
          <p>{total}</p>
        </div>

        <div className="card">
          <h3>Passed</h3>
          <p>{passed}</p>
        </div>

        <div className="card">
          <h3>Avg Score</h3>
          <p>{Math.round(avg)}</p>
        </div>
      </div>

      <StudentTable
        students={students}
        updateScore={updateScore}
      />
    </div>
  );
}