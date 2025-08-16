import { Routes, Route } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar'
import Home from './Pages/Home';
import Buy from './Pages/Buy'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import Upgrade from './Pages/Upgrade'
import Work from './Pages/Work'
import Doc from './Pages/Doc'
// import SignIn from './Component/SignIn';
// import SignUp from './Component/SignUp';
function App() {

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Buy" element={<Buy />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Upgrade" element={<Upgrade />} />
        <Route path="/Contact" element={<Work />} />
        <Route path="/Doc" element={<Doc />} />
      </Routes>
    </>
  )
}

export default App