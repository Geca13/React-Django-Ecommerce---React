import { Container } from 'react-bootstrap'
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';

import { BrowserRouter as Router , Route } from 'react-router-dom'

function App() {
  return (
    <Router >
      <Header/>
        <main className="py-3">
          <Container>
          
          <Route path exact='/' component={Homepage}/>
          <Route path ='/product/:id' component={ProductPage}/>
          <Route path ='/cart/:id?' component={CartPage}/>
          <Route path ='/login' component={LoginPage}/>
          </Container>
        </main>
      <Footer/>
    </Router>
  );
}

export default App;
