import { useContext } from 'react'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { pagesMapping, RoutingContext } from './context/Routing'
import './App.css';

function App() {
  const { page } = useContext(RoutingContext)

  return (
    <>
      {(pagesMapping.home === page) && <Home />}
      {(pagesMapping.about === page) && <About />}
      {(pagesMapping.contact === page) && <Contact />}
    </>
  );
}

export default App;
