import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import DogGame from './pages/DogGame';
import ProtectedRoute from './components/ProtectedRoute';
import './index.css';
import './normalize.css';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/doggame"
        element={
          <ProtectedRoute>
            <DogGame />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
