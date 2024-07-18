import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Home from './components/Home';
import Login from './components/Login';
import ProtectedRoute from './ProtectedRoute';
import Notfound from './components/NotFound';

import './App.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Notfound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
