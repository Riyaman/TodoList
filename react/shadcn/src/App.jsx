import React from 'react';
import { Button } from './components/ui/button';
// import image from "./assets/cat11.png"
import Navbar from './components/Navbar/Navbar'
import { Card } from "@/components/ui/card"

const App = () => {
  
  return (
    <div className='flex flex-wrap justify-center'>
   <Navbar/>
    <Card 
        image={image1} 
        title="Cat 1" 
        description="This is a description of Cat 1." 
      />
     </div>
    
  );
};

export default App;
