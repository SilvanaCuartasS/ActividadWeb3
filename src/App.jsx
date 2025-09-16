import Header from './components/header';
import { NameProvider } from './contexts/nameContext';
import GrandChild from './components/grandchild';
import Footer from "./components/footer";

function App() {
  return (
    <NameProvider>
        <Header/>
        <GrandChild/>
        <Footer/>
    </NameProvider>
  );
}

export default App;
