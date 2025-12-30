import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/common/Layout"
import HomePage from "./pages/home/HomePage"
import AboutPage from "./pages/about/AboutPage"
import ServicesPage from "./pages/services/ServicesPage"
import GalleryPage from "./pages/gallery/GalleryPage"
import BlogPage from "./pages/blog/BlogPage"
import BlogDetailPage from "./pages/blog/BlogDetailPage"
import ContactPage from "./pages/contact/ContactPage"
import "./styles/global.css"
import ScrollToTop from "./components/common/ScrollToTop"

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
