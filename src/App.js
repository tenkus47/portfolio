import dot from 'dotenv'

import Body from './components/Body'
import Midpage from './components/Midpage'
import Navbar from './components/Nav'
import ProjectList from './components/ProjectList'
import Sidebar from './components/Sidebar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Contact from './components/Contact';
import Subscribe from './components/Subscribe';

dot.config();


function App() {
  
  return (
    <div className="App" >
          <Router>
      <Navbar/>
      <Switch>
<Route path='/portfolio' exact>
<Sidebar/>

       <Body/>
       <hr/>
       <h2 id='Speciality' className='text-center font-bold text-gray-600 text-4xl pt-20'>Speciality</h2>
       <Midpage/>
       <hr/>
       <h2 className='text-center font-bold text-black text-4xl pt-20' id='Projects'>Featured Work</h2>
       <ProjectList/>
</Route>
<Route path='/contact'>
<Contact/>
</Route>
<Route path='/subscribe'>
<Subscribe/>
</Route>


       </Switch>

       </Router>
    </div>
  );
}

export default App;
