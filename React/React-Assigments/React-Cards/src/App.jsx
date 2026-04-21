import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import CardList from './components/cards'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="container2">
        <CardList />
      </div>
      <Footer />
    </div>
  )
}

export default App
