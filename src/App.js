import { Container } from 'react-bootstrap'
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import ProductPage from './pages/ProductPage'

import { BrowserRouter as Router , Route } from 'react-router-dom'

function App() {
  return (
    <Router >
      <Header/>
        <main className="py-3">
          <Container>
          <h1>Welcome</h1>
          <Route path exact='/' component={Homepage}/>
          <Route path ='/product/:id' component={ProductPage}/>
          </Container>
        </main>
      <Footer/>
    </Router>
  );
}

export default App;
