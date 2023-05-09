import HomePage from "./pages/HomePage/ArticlePage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import styles from './reset.css';
function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
