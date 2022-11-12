import SigninForm from "./demo/SigninForm"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import DemoHome from "./demo/Home"
import Dashboard from "./demo/Dashboard"
import "./App.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo/dashboard" element={<Dashboard />} />
          <Route path="/demo/home" element={<DemoHome />} />
          <Route path="/demo/signin" element={<SigninForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
