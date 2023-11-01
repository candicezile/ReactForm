import React, {useState} from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [idnumber, setIdNumber] = useState('');
  const [emailaddress, setEmailAddress] = useState('');
  const [homeaddress, setHomeAddress] = useState('');
  const [description, setDescription] = useState('');
  const [display, setDisplay] = useState('');



  const displayVariable = (e) => {
    e.preventDefault();
const formData = {name, surname, idnumber, homeaddress, description};
setDisplay(name, surname, idnumber, homeaddress, description);
localStorage.setItem('formData', JSON.stringify(formData));
console.log('Form data saved:', formData);
  }

  return (
    
    <div className="App">
    <header className="App-header">
    <form className="react-form">
      <div className="App">
        <h1>React Form</h1>

        <div className="form">
          <label className="input">Name</label><br></br>
          <input id="t-input" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </div><br></br>

        <div className="form">
          <label className="input">Surname</label><br></br>
          <input id="t-input" type="text" value={surname} onChange={(e) => setSurname(e.target.value)}/>
        </div><br></br>

        <div className="form">
          <label className="input">IdNumber</label><br></br>
          <input id="t-input" type="number" value={idnumber} onChange={(e) => setIdNumber(e.target.value)}/>
        </div><br></br>

       

        <div className="form">
          <label className="input">EmailAddress</label><br></br>
          <input id="t-input" type="email" value={emailaddress} onChange={(e) => setEmailAddress(e.target.value)}/>
        </div><br></br>

        <div className="form">
          <label className="input">HomeAddress</label><br></br>
          <input id="t-input" type="email" value={homeaddress} onChange={(e) => setHomeAddress(e.target.value)}/>
        </div><br></br>

        <div className="form">
          <label className="input">Description</label><br></br>
          <textarea id="t-input" type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
        </div><br></br>

        <button type="submit" className='button' onClick={displayVariable}>Submit</button>
      </div>
    </form>
    </header>
    </div>
  );
}

export default App;