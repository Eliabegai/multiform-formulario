import { BrowserRouter, Routes, Route } from "react-router-dom";

import { FormStep1 } from './pages/FormStep1'
import { FormStep2 } from './pages/FormStep2'
import { FormStep3 } from './pages/FormStep3'
import { FormStep4 } from './pages/FormStep4'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={FormStep1} />
        <Route path='/step2' Component={FormStep2} />
        <Route path='/step3' Component={FormStep3} />
        <Route path='/step4' Component={FormStep4} />
      </Routes>
    </BrowserRouter>
  )
}