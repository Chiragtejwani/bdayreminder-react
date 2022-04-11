import './App.css';
import { useState } from 'react';
import Form from './Components/Form/Form';
import List from './Components/List/List';
import Header from './Components/Header/Header';
function App() {
//   const Items = [
//     {
//       id: 1,  
//       name: "Suraj Shah",
//         date: "24-08-1999",
//         contact_no: "907987897"
//     },
//     {
//         id:2,
//         name: "Mansi Singh",
//         date: "24-08-2000",
//         contact_no: "997987890"
//     },
//     {
//         id:3,
//         name: "Rahul Deevan",
//         date: "22-06-1998",
//         contact_no: "907987897"
//     },
//     {
//         id:4,
//         name: "Rakesh Gupta",
//         date: "15-01-2001",
//         contact_no: "899785697"
//     },

// ]

const [Items,setItems] = useState(
[
{
    id: 1,  
    name: "Suraj Shah",
    date: "24-08-1999",
    contact_no: "907987897"
},
{
    id:2,
    name: "Mansi Singh",
    date: "24-08-2000",
    contact_no: "997987890"
},
{
    id:3,
    name: "Rahul Deevan",
    date: "22-06-1998",
    contact_no: "907987897"
},
{
    id:4,
    name: "Rakesh Gupta",
    date: "15-01-2001",
    contact_no: "899785697"
},])
return (
    <div>
      <Header/>
      <div className="App">
        <List Items = {Items}/>
        <Form Items = {Items} setItems = {setItems} />
      </div>
    </div>
  );
}

export default App;
