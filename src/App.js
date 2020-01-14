import React from 'react';
import logo from './logo.svg';
import './App.css';
import DragSort from './drag_sort/drag_sort'

function App() {

  const list=[
    {
      id:0,
      title:'Item1'
    },
    {
      id:1,
      title:'Item2'
    },
    {
      id:2,
      title:'Item3'
    },
    {
      id:3,
      title:'Item4'
    },
    {
      id:4,
      title:'Item5'
    },
    {
      id:5,
      title:'Item6'
    },
    {
      id:6,
      title:'Item7'
    },
    {
      id:7,
      title:'Item8'
    }
  ]
  return (
    <DragSort
    list={list}
    />
  );
}

export default App;
