import { Routes, Route } from 'react-router-dom';

import { Book, Category } from './pages';
import { Navbar } from './components';

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/books" element={<Book />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </>
  );
}

export default App;
