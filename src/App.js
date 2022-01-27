import React,  {useState} from "react";
import "./style.css";
import User from "./User";

export default function App() {
  const [name, setName] = useState('')
  const [empId, setEmpId] = useState('')
  const [submitList, setSubmitList] = useState({});
  
  const handleParentChange = (key, val) => {
    if (key === 'name') {
      setName(val);
    } else {
      setEmpId(val);
    }
  }

  const handleParentSubmit = () => {
    setSubmitList({
      name: name,
      empId: empId
    })
  }

  return (
    <div>
      <User name={name} empId={empId} onChildChange={handleParentChange} onSubmitChange={handleParentSubmit} />
      {
      (("name" in submitList)) &&
        <h1>{submitList.name} : {submitList.empId}</h1>
      }
    </div>
  );
}
