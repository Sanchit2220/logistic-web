import { GlobalStyle } from "./globalStyles";
import { lazy, Suspense } from "react";
 import Loader from "./components/Loader/index";
  const Home = lazy(() => import("./Pages/Home"));
const Header = lazy(() => import("./components/Header/index"));
 const Footer = lazy(()=> import ("./components/Footer/index"));
function App() {
  return (
    <>
      <Suspense fallback={<Loader/>}>
        <GlobalStyle />
     
        <Header />
       <Home/>
        <Footer/>
      </Suspense>

    </>
  );
}

export default App;
