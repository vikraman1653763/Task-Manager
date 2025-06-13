import React from 'react'
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';

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
          </Routes>
        </Router>
  
    </div>
  )
}

export default App 
