import React from 'react'
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';

import ManageUsers from './pages/Admin/ManageUsers';
import CreateTasks from './pages/Admin/CreateTasks';
import Dashboard from './pages/Admin/Dashboard';
import ManageTasks from './pages/Admin/ManageTasks';

import UserDashboard from './pages/User/UserDashboard';
import Mytask from './pages/User/Mytask';
import ViewTaskDetails from './pages/User/ViewTaskDetails';


import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            {/* Admin */}
            <Route element={<PrivateRoute allowedRoles={['admin']}/>}>
              <Route path='/admin/dashboard' element={<Dashboard/>}/>
              <Route path='/admin/tasks' element={<ManageTasks/>}/>
              <Route path='/admin/create-task' element={<CreateTasks/>}/>
              <Route path='/admin/users' element={<ManageUsers/>}/>
            </Route>

            {/* Admin */}
            <Route element={<PrivateRoute allowedRoles={['admin']}/>}>
              <Route path='/user/dashboard' element={<UserDashboard/>}/>
              <Route path='/user/tasks' element={<Mytask/>}/>
              <Route path='/user/task-details' element={<ViewTaskDetails/>}/>
            </Route>

          </Routes>
        </Router>
  
    </div>
  )
}

export default App 
