import './App.scss';

import { BrowserRouter as Router} from 'react-router-dom'
import DetailsPage from './shared/DetailsPage/DetailsPage';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <DetailsPage></DetailsPage>
      </header>
    </div>
    </Router>
  );
}

export default App;
