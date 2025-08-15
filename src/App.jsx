import { Routes, Route } from 'react-router-dom';
import NavigationBar from './Component/NavigationBar'
import Home from './Pages/Home';
import Buy from './Pages/Buy'
import Development from './Pages/Development'
import Portfoilo from './Pages/Portfoilo'
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
        <Route path="/Development" element={<Development />} />
        <Route path="/Portfoilo" element={<Portfoilo />} />
        <Route path="/Upgrade" element={<Upgrade />} />
        <Route path="/Contact" element={<Work />} />
        <Route path="/Doc" element={<Doc />} />
      </Routes>
    </>
  )
}

export default App