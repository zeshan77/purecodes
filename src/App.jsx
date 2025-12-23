import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './layouts/MainLayout'

import Home from './pages/Home'
import About from './pages/About'
import Tools from './pages/Tools'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home /> } />
          <Route path="about" element={<About />} />
          <Route path="tools" element={<Tools />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
