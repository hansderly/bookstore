import { Routes, Route } from 'react-router-dom';

import { Book, Category } from './pages';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/books" element={<Book />} />
      <Route path="/category" element={<Category />} />
    </Routes>
  );
}

export default App;
