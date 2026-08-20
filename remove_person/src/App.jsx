import { useState } from "react";

function App() {
  const [people, setPeople] = useState([
    { id: 1, name: "Aram", salary: 300000, gender: "Male" },
    { id: 2, name: "Anna", salary: 400000, gender: "Female" },
    { id: 3, name: "Karen", salary: 350000, gender: "Male" },
    { id: 4, name: "Mariam", salary: 450000, gender: "Female" },
    { id: 5, name: "Gor", salary: 280000, gender: "Male" },
    { id: 6, name: "Ani", salary: 380000, gender: "Female" },
    { id: 7, name: "David", salary: 500000, gender: "Male" },
    { id: 8, name: "Lilit", salary: 420000, gender: "Female" },
    { id: 9, name: "Tigran", salary: 320000, gender: "Male" },
    { id: 10, name: "Sona", salary: 360000, gender: "Female" },
  ]);

  const deletePerson = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <div>
      <h1>People</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {people.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.salary}</td>
              <td>{person.gender}</td>
              <td>
                <button onClick={() => deletePerson(person.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;