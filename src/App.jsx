import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import { Provider } from 'react-redux'
import store from './redux/store'
import Home from "./pages/Home.jsx"
import SignIn from "./pages/SignIn.jsx"
import SignUp from "./pages/SignUp.jsx"
import Cars from "./pages/Cars.jsx"
import SignOut from "./pages/SignOut.jsx"


function App() {

  return (
    // serverCalls.setUser()
    <>
      <BrowserRouter>
      <Navbar/>
        <Provider store={store}>
          <Routes>
            <Route key={1} path={"/"} element={<Home/>}/>
            <Route key={2} path={"/cars"} element={<Cars/>}/>
            <Route key={3} path={"/signout"} element={<SignOut/>}/>
            <Route key={4} path={"/signin"} element={<SignIn/>}/>
            <Route key={5} path={"/signup"} element={<SignUp/>}/>
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  )
}

export default App
