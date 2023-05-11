
import ArticlePage from "./pages/ArticlePage/ArticlePage";
import CollaboratorsPage from "./pages/CollaboratorsPage/CollaboratorsPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage/PrivacyPolicyPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import './reset.css';
function App() {
  return (
    <div className="App">
      <Header/>
      {/* <ArticlePage/> */}
      {/* <CollaboratorsPage/> */}
      {/* <AboutUsPage/> */}
      {/* <PrivacyPolicyPage/> */}
      <ContactPage/>
      <Footer/>
    </div>
  );
}

export default App;
