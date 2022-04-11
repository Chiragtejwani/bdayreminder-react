import "./Form.css" 
const Form = ({Items,setItems}) => {

    return ( 
        <div className="card">
            <div className="container">
            <form >
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter Name"/>

                <label htmlFor="bday">Birthday</label>
                <input type="date" id="bday" name="bday" placeholder="Enter Bday"/>

                <label htmlFor="contact">Contact No</label>
                <input type="text" id="contact" name="contact" placeholder="Enter contact Number"/>
               
                <button type="submit" >Submit</button>
            </form>
            </div>
        </div>
     );
}
 
export default Form;