import React, { useState, useEffect } from 'react';
import './style.css';
import MainApp from './MainApp';
import StatCard from './StatCard';
import SideCard from './SideCard';
import AvatarCard from './AvatarCard';
import Header from './Header';
import { Box, ThemeProvider } from '@mui/system';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EntryModal from './EntryModal';
import { Routes, Route, Link } from 'react-router-dom';

import { RouteTransitionProvider } from 'react-route-transition';

import { createGlobalState } from 'react-hooks-global-state';

const initialState = {
  avatar_name: undefined,
  location: undefined,
  avatar_health: 80,
  
};
const { useGlobalState } = createGlobalState(initialState);

const userAuth = false;

// const Counter = () => {
//   const [avatar_name, setAVName] = useGlobalState('avatar_name');
//   return (
//     <div>
//       <span>Counter: {count}</span>
//       {/* update state by passing callback function */}
//       <button onClick={() => setCount((v) => v + 1)}>+1</button>
//       {/* update state by passing new value */}
//       <button onClick={() => setCount(count - 1)}>-1</button>
//     </div>
//   );
// };

export default function App() {
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      index++;
      console.log(index, articles[index % articles.length]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <Routes>
      <Route path="/" element={<MainApp props={{index}}/>} />
      <Route path="modal" element={<EntryModal />} />
    </Routes>
  );
}
