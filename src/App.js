import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';
import RoutesComp from './RoutesComp';
import { BrowserRouter as Router } from 'react-router-dom';
import AllBooks from './CustomerView/AllBooks';
import IssueReqHistory from './CustomerView/IssueReqHistory';
import AddBooks from './AdminView/AddBooks';
import { Provider } from 'react-redux';
import store from './reduxsaga/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Router>
        <RoutesComp/>
      </Router> 
      </Provider>
      {/* <AddBooks/> */}
      {/* <IssueReqHistory/> */}
    </div>
  );
}

export default App;

