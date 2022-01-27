import React from 'react';
const User = ({name, empId, onChildChange, onSubmitChange}) => {
  const handleChange = (e) => {
    onChildChange(e.target.name, e.target.value);
  }

  const handleSubmit = (e) => {
    onSubmitChange();
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Basic Form</legend>
        Name : <input type="text" name="name" onChange={handleChange} value={name}/><br/>
        Empt Id : <input type="text" name="empId" onChange={handleChange} value={empId}/><br/>
        <input type="submit" name="submit" value="Submit"   />
      </fieldset>
    </form>
  )
}

export default User;