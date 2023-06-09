import './App.css';
import { Countries } from './component/Country/Countries';
import { Pactice01 } from './component/Pactice01';
import { Pactice02 } from './component/Pactice02';
import { Pactice03 } from './component/Pactice03';
import { Pactice04 } from './component/Pactice04';



function App() {

  return (
    <div className="App">
      <div className="container">
        <Countries> </Countries>
        <Pactice04></Pactice04>
        <Pactice03> </Pactice03>
        <Pactice02> </Pactice02>
        <Pactice01> </Pactice01>
      </div>
    </div>
  );
}

export default App;
