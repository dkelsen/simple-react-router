import { useContext } from 'react'

import { RoutingContext, pagesMapping } from '../context/Routing'
import logo from '../logo.svg';

export default function Contact() {
  const { setPage } = useContext(RoutingContext)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the <code>Contact</code> page.
        </p>
        <p className="App-link" onClick={() => setPage(pagesMapping.home)}>
          Home
        </p>
      </header>
    </div>
  );
}
