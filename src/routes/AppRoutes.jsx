import { Routes, Route } from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../views/home'
import About from '../views/About'
import Services from '../views/Services'
import Contact from '../views/Contact'

export default function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}
