
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';
import Home from "./component/Home";
import User from "./component/User";

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/:username" element={<User />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;
