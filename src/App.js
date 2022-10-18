import './App.css';
import { Navbar } from './component/Navbar';
import { Home } from './modules/Home';
import './App.css';

export const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Home />
      </div>
    </div>
  );
};
