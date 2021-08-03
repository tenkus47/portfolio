import Body from './components/Body'
import Midpage from './components/Midpage'
import Navbar from './components/Nav'
import ProjectList from './components/ProjectList'
import Sidebar from './components/Sidebar';
function App() {
  return (
    <div className="App" >
        
       <Sidebar/>
      <Navbar/>
       <Body/>
       <hr/>
       <h2 id='Speciality' className='text-center font-bold text-gray-600 text-4xl pt-20'>Speciality</h2>
       <Midpage/>
       <hr/>
       <h2 className='text-center font-bold text-black text-4xl pt-20' id='Projects'>Featured Work</h2>
       <ProjectList/>
    </div>
  );
}

export default App;
