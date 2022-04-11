import { useState } from "react";
import "./Form.css" 
const Form = (props) => {
    const[name,setName] = useState('');
    const[date,setDate] = useState('');
    const[contact_no,setContact] = useState('');

    const onNameChangeHandler = (e) => {
        e.preventDefault();
        setName(e.target.value)
    }

    const onDateChangeHandler = (e) => {
        e.preventDefault();

        setDate(e.target.value)
    }

    const onContChangeHandler = (e) => {
        e.preventDefault();

        setContact(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        props.onSub({
            id: Math.floor(Math.random() * 10000),
            name:name,
            date: date,
            contact_no: contact_no
        })

        setName('');
        setDate('');
        setContact('');
    }
    return ( 
        <div className="card">
            <div className="container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name"  >Name</label>
                <input type="text" id="name" name="name" onChange={onNameChangeHandler} placeholder="Enter Name"/>

                <label htmlFor="bday">Birthday</label>
                <input type="date" id="bday" name="bday" onChange={onDateChangeHandler} placeholder="Enter Bday"/>

                <label htmlFor="contact">Contact No</label>
                <input type="text" id="contact" name="contact" onChange={onContChangeHandler} placeholder="Enter contact Number"/>
               
                <button> Add Bday</button>
            </form>
            </div>
        </div>
     );
}
 
export default Form;