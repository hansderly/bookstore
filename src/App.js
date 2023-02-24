import { Routes, Route } from 'react-router-dom';

import { Book, Category } from './pages';
import { Layout } from './components';

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Book />} />
          <Route path="/books" element={<Book />} />
          <Route path="/category" element={<Category />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
