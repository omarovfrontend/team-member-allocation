import './App.css';
import Employees from './components/Employees/Employees';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Employees />
      <Footer />
    </div>
  );
}

export default App;
