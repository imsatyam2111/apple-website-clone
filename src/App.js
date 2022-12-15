import './App.css';
import { Navbar } from './component/Navbar';
import { Home } from './modules/Home';
import './App.css';
import { Footer } from './modules/Footer';

export const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Home />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
