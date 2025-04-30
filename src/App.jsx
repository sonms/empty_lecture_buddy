import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavigationGraph from '/home/user/empty-lecture-buddy/src/screens/navigation/components/NavigationGraph.jsx';
import BottomNavigation from '/home/user/empty-lecture-buddy/src/screens/navigation/components/BottomNavigation';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container" style={{ paddingBottom: '60px' }}>
        <NavigationGraph />
        <BottomNavigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
