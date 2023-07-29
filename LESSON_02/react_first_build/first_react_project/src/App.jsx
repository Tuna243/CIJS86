import logo from './logo.svg';
import './App.css';
// My components
import Header from './components/common/Header';
import Contents from './pages/Contents';
// import Footer from './components/common/Footer';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Contents></Contents>
        {/* <Footer/> */}
        
    </div>
  );
}

export default App;
