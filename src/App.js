import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route ,Navigate } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Blog from './components/Blog';
import Post from './components/Post';
import Nav from './components/Nav';
import Nopage from './components/Nopage';


const token = localStorage.getItem('token') || false

function Protected({ children }) {
  if (!token) {
    return <Navigate to="/login" replace />
  }
  return children
}

function App() {
  return (
    // <div>
    //   <Nav/>
    //  <Blog/>
    //  {/* <Post/> */}
    //  {/* <Register/>
    //  <Login/> */}
    // </div>
<BrowserRouter>
      <Routes>
      <Route
            path="/"
            element={
              <Protected >
                <Blog />
              </Protected>
            }
          />
          <Route
            path="/post"
            element={
              <Protected >
                <Post />
              </Protected>
            }
          />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Nopage />} />
        {/* <Route path="/" element={<PrivateRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="post" element={<Post />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
