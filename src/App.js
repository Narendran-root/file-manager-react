import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import FileUpload from './components/FileUpload';
import AddItem from './components/AddItem';
import ItemList from './components/ItemList';
import ItemDetail from './components/ItemDetail';
import styles from './style.module.css';

const App = () => {
  return (
    <Router>
      <nav className={styles.nav}>
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
          File Upload
        </NavLink>
        <NavLink to="/array" className={({ isActive }) => (isActive ? 'active' : '')}>
          Array Management
        </NavLink>
        <NavLink to="/list" className={({ isActive }) => (isActive ? 'active' : '')}>
          List
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<FileUpload />} />
        <Route path="/array" element={<AddItem />} />
        <Route path="/list" element={<ItemList />} />
        <Route path="/item/:id" element={<ItemDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
