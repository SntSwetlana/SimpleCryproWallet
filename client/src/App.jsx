import { Navbar, Welcome, Loader, Transactions, Services} from "./components";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div className="min-h-screen">
        <div className='gradient-bg-welcome'>
            <Navbar />
            <Welcome />
        </div>
        <Services />
        <Transactions />
        <Footer />
    </div>
  )
}

export default App
