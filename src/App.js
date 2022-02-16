import { Navigate, Route, Routes } from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import Panel from './Components/Panel/Panel';
import Notfound from './Pages/404/Notfound';
import Home from './Pages/Home/Home';
import Documents from './Components/Documents/Documents';
import AuthContextProvider, { useAuth } from './Context/AuthContextProvider';
import ModalProvider from './Context/ModalProvider';

function App() {

  

  return (
    <>
      <AuthContextProvider>
        <ModalProvider>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/panel" element={<Panel />} />
            <Route path='/panel/:id' element={<Documents />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </ModalProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
