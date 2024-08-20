import React from 'react';
import image1 from "./assets/cat1.png"
import Navbar from './components/Navbar/Navbar'
import  Card  from "@/components/ui/card"

const App = () => {
  
  return (
    <>
   <Navbar
    name="Home"
    social1="About"
    social2="ContactUs"
   />
    <div className='flex flex-wrap justify-center mt-5'>
    <Card 
        image={image1} 
        title="Cat 1" 
        description="This is a description of Cat 1." 
      />
     </div>
    </>
  );
};

export default App;
