
import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Form from './Form'
import FormRef from './FormRef'
import FormState from './FormState'

const App = () => {
  return (
    <div>
        <nav>
            <Link to='/form' id='form-link'>Form</Link>
            <Link to='/form-ref' id='form-ref-link'>Form-Ref</Link>
            <Link to='/form-state' id='form-state-link'>Form-State</Link>
        </nav>
        <Routes>
            <Route path='/form' element={<Form/>}/>
            <Route path='/form-ref' element={<FormRef/>}/>
            <Route path='/form-state' element={<FormState/>}/>
        </Routes>
    </div>
  )
}

export default App