import './App.css' ;
import Navbar from './navbar';
import PicturesDisplay from './displayPict';
import DashBoard from './dashboard';
import {useState} from 'react'
function Application() {
  const [open, setOpen]=useState(false);
  function close(){
    setOpen(open=>!open);
  }
  return (
    <div className="App">
      <Navbar />
      {open && <DashBoard close={close}/>} 
    <section className='section'><PicturesDisplay/></section> 
    </div>
    
  );
}

export default Application;
