import './App.css';
import RoutesComp from './RoutesComp';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './reduxsaga/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <RoutesComp />
        </Router>
      </Provider>

    </div>
  );
}

export default App;

