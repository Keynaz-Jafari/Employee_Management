import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


import Login from '../pages/login/login';
import Dashboard from '../pages/dashboard/dashboard';
import Users from '../pages/users/users';
import CreateUser from '../pages/createUser/createUser';

import { UserProvider } from '../context/userContext';
import EditUser from '../pages/editUser/editUser';
 

function App() {

  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/createuser" element={<CreateUser />} />
          <Route path="/edituser/:id" element={<EditUser />} />
          
    

        </Routes>
      </Router>
    </UserProvider>

  );
}

export default App;
