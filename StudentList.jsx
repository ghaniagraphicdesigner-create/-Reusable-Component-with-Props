function StudentList() {
  // 1. Array of student objects
  const students = [
    { id: 1, name: "Ali", score: 85 },
    { id: 2, name: "Sara", score: 42 },
    { id: 3, name: "Usman", score: 65 },
    { id: 4, name: "Ayesha", score: 38 },
  ];

  return (
    <div style={{ margin: "20px 0" }}>
      <h2>Student Results</h2>
      <ul>
        {/* 2. .map() method for list rendering */}
        {students.map((student) => (
          <li key={student.id} style={{ marginBottom: "8px" }}>
            <strong>{student.name}</strong> - Score: {student.score} | Status:{" "}
            {/* 3. Conditional rendering for Pass/Fail */}
            {student.score >= 50 ? (
              <span style={{ color: "green", fontWeight: "bold" }}>Pass</span>
            ) : (
              <span style={{ color: "red", fontWeight: "bold" }}>Fail</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
