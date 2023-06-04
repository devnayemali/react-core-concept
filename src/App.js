import './App.css';


const number = 4444;

const developer = {
  name : 'Md Nayem Ali',
  job : 'Full Stack Developer',
  location : 'Mirpur DHOS',
  company : 'BDves'
};

const develoerCSS = {
  color: 'green',
  padding: '10px',
  backgroundColor: 'black',
  margin: '10px'
};


function App() {
  return (
    <div className="App">
      <div className="container">
         
         <Person name='Md Nayem Ali' job='Full Stack Developer' />
         <Person name='Shagor Ali' job='React Next Js Developer' />
         <Person name='Parvaj Kahn' job='WordPress Developer' />
         <Person name='Tajmiz Islam' job='Backend Developer' />

         
      </div>
    </div>
  );
}


function Person(props) {
  return (
    <div className='person'>
      <h4>person name == {props.name}</h4>
      <p>person job == {props.job}</p>
    </div>
  );
}


export default App;
