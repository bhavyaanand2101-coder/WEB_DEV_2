
// We use 'destructuring' { name, roll, course } to get values directly
function StudentCard({ name, roll, course }) {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px', borderRadius: '8px' }}>
      <h2>Student Details</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Roll No:</strong> {roll}</p>
      <p><strong>Course:</strong> {course}</p>
    </div>
  );
}

export default StudentCard;