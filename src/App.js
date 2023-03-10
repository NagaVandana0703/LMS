import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './reduxsaga/store';


const CVLayout = lazy(() => import('./CustomerView/CVLayout'));
const AVlayout = lazy(() => import('./AdminView/AVlayout'));
const LoginPage = lazy(() => import('./components/LoginPage'));
const AllBooks = lazy(() => import('./CustomerView/AllBooks'));
const IssueReqHistory = lazy(() => import('./CustomerView/IssueReqHistory'));
const IssuedBooks = lazy(() => import('./CustomerView/IssuedBooks'));
const OverDue = lazy(() => import('./CustomerView/OverDue'));
const OverDues = lazy(() => import('./AdminView/OverDues'));
const IssueRequests = lazy(() => import('./AdminView/IssueRequests'));
const AddBooks = lazy(() => import('./AdminView/AddBooks'));
const ManageCustomers = lazy(() => import('./AdminView/ManageCustomer'));
const ManageAdmins = lazy(() => import('./AdminView/ManageAdmins'));
const AddCategory = lazy(() => import('./AdminView/AddCategory'));
function App() {
  return (
      <Provider store={store}>    
          <Suspense fallback={<h2>LOADING...........</h2>}>
            <Routes>
              <Route exact path="/" element={<LoginPage />} />
              <Route path='/AllBooks' element={<CVLayout element={AllBooks} />} />
              <Route path='/IssueReqHistory' element={<CVLayout element={IssueReqHistory} />} />
              <Route path='/IssuedBooks' element={<CVLayout element={IssuedBooks} />} />
              <Route path='/OverDue' element={<CVLayout element={OverDue} />} />
              <Route path='/ManageAdmins' element={<AVlayout element={ManageAdmins} />} />
              <Route path='/ManageCustomers' element={<AVlayout element={ManageCustomers} />} />
              <Route path='/IssueRequests' element={<AVlayout element={IssueRequests} />} />
              <Route path='/Overdues' element={<AVlayout element={OverDues} />} />
              <Route path='/AddBooks' element={<AVlayout element={AddBooks} />} />
              <Route path='/AddCategory' element={<AVlayout element={AddCategory} />} />
            </Routes>
          </Suspense>
      </Provider>
  );
}

export default App;

