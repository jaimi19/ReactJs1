import React, { useEffect, useState } from 'react'

export default function CRUD_Operation() {
  const [name, setName] = useState("");
  const [password, setPass] = useState("");
  const [arr, setArr] = useState([]);
  const [edit,setEdit] = useState(null);

  // Function to update localStorage
  useEffect(() => {
    localStorage.setItem('Data', JSON.stringify(arr))
  }, [arr]);

  const handleForm = (e) => {
    e.preventDefault();
    if (edit !== null) {
      const updatedArr = [...arr];
      updatedArr[edit] = { name, password };
      setArr(updatedArr);
      setEdit(null);
    } else {
      setArr([...arr, { name, password }]);
    }
    setName("");
    setPass("");
  }

  const handleDelete = (index) => {
    setArr(arr.filter((_, i) => i !== index))
  }

  const handleEdit = (index) => {
    setName(arr[index].name);
    setPass(arr[index].password);
    setEdit(index);
  };
  return (
    <div>
      <form onSubmit={handleForm}>
        <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
        <br /><br />
        <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPass(e.target.value)} />
        <br /><br />
        <button type="submit">{edit !== null ? "Update" : "Submit"}</button>
      </form>
      <table border={1}>
        <tr>
          <th>Sr No.</th>
          <th>Name</th>
          <th>Password</th>
          <th>Actions</th>
        </tr>
        {arr.map((ele, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{ele.name}</td>
            <td>{ele.password}</td>
            <td>
              <button onClick={()=>handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  )
}