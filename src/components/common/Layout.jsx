import Header from "../common/Header/Header"
import Footer from "../common/footer/Footer"

function Layout({ children }) {
  return (
    <div className="app">
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
