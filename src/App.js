import './App.css';
import Add from './components/Add';
import Students from './components/Students';
import Sub from './components/Sub';
import UserListing from './components/UserListing';

function App() {
 var student1 = {
  name : "Shravya",
  age : 23,
  roll_no : 1234,
  city : "Mumbai"
 }

  return (
    <>
    <UserListing />
      <Students data={student1} />
      <Students data={{name : "Shravya", age : 18,roll_no : 23,city : "Dombivli"}} />
      <h1>Hello world</h1>
      <h1>Welcome to react app</h1>
      <h2>{9 * 5}</h2>
      <Add x={50} y={60} />
      <Sub x={500} y={400} />
    </>
  );
}

export default App;