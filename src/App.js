import {Routes, Route} from 'react-router-dom';
import { Login } from './components/Login';
import { UserContextProvider } from './context/UserContext';
import { ProtectedRoute} from './components/ProtectedRoute'
import PostDetail from './pages/PostDetail';
import PostForm from './pages/PostForm';
import PostGallery from './pages/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/Navbar';
import { AuthProvider } from './context/authContext';



function App() {
  return (
  <UserContextProvider>
    <AuthProvider>
  <div className='text-light'>    
   
    <Navbar/>
    <div className='container p-4'>
    <Routes>      
      {/* <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/> */}
      <Route path="/login" element={<Login/>}/>
      <Route path="/logout" element={<Login/>}/>
      <Route path="/posts/:id" element={<PostDetail/>}/>
      <Route path="/upload" element={<PostForm/>}/>
      <Route path="/" element={<PostGallery/>}/>    
      
    </Routes>
    </div>
    </div>
    </AuthProvider>
    </UserContextProvider>
  );
}

export default App;
