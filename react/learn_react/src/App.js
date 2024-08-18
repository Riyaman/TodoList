import './App.css';
import Navbar from './Navbar';
import Contact from './Contact';
// import Utils from './data';

function App() {
  return (
    <div className="App">
      <Navbar title="MyContacts"/>
      <Contact 
      img="cat1.png"
      name="Rushali"
      no="(212) 555-2345"
      email="rushalibos@gmail.com"
      />
      <Contact
       img="cat2.png"
       name="Divya"
       no="(212) 544-2345"
       email="divyamehra@gmail.com"
      />
      <Contact
       img="cat3.png"
       name="Sonam"
       no="(212) 577-2345"
       email="sonamkour@gmail.com"
      />
      {/* <Utils/> */}
    </div>
  );
}

export default App;
