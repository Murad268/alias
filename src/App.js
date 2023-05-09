
import ArticlePage from "./pages/ArticlePage/ArticlePage";
import CollaboratorsPage from "./pages/CollaboratorsPage/CollaboratorsPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import './reset.css';
function App() {
  return (
    <div className="App">
      <Header/>
      {/* <ArticlePage/> */}
      <CollaboratorsPage/>
      <Footer/>
    </div>
  );
}

export default App;
