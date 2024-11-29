import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


import Login from '../pages/login/login';
import Dashboard from '../pages/dashboard/dashboard';
import Users from '../pages/users/users';

import { UserProvider } from '../context/userContext';

function App() {

  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
    

        </Routes>
      </Router>
      {/* {token ? null : <Login />} */}
    </UserProvider>

  );
}

export default App;
