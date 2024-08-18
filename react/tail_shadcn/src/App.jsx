import React from 'react';
import Card from './components/card/card';
import image1 from './assets/cat1.png'
import image2 from './assets/cat2.png'
import image3 from './assets/cat3.png'
import { Button } from './components/ui/button';
import Navbar from './components/Navbar/Navbar'
const App = () => {
  return (
    <div>
    <Navbar 
    name="Janhavi Ganorakr"
    social1="Github"
    social2="Linkdin"
    />
    <div className='container flex flex-wrap justify-center '>
    <Card image={image1} title="Cat1" description="This is the img" tags={['sleepy', 'adorable', 'curious']}/>
    <Card image={image2} title="Cat2" description="This is the img" tags={['sleepy', 'adorable', 'curious']}/>
    <Card image={image3} title="Cat3" description="This is the img cat2" tags={['sleepy', 'adorable', 'curious']}/>
    </div>
    <Button>Sumbtm</Button>
    </div>
  );
};

export default App;
