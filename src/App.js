import './App.css';
import Navbar from './components/Navbar.js';
import Titles from './components/Titles.js';
import Grid from './components/Grid.js';
import { CATEGORIES } from './data.js';
import { useState } from 'react';

function App() {

  const [title,change]=useState(CATEGORIES[0].label);

  return (
    <div className="min-h-screen flex-col flex bg-bgDark2">
      <Navbar></Navbar>
      <div className="bg-bgDark2">
        <Titles title={title} change={change}></Titles>
        <Grid title={title}></Grid>
      </div>
    </div>
  );
}

export default App;
