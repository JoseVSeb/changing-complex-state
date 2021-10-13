import React, { useState } from "react";

function App() {
  const [name, setName] = useState({ fName: "", lName: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setName((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="container">
      <h1>
        Hello {name.fName} {name.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          value={name.fName}
        />
        <input
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          value={name.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
