import './App.css';
import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {Route} from "react-router-dom";
import Services from "./components/Services";
import Connection from "./components/Connection";
import TransitionWrapper from "./components/TransitionWrapper";

function App() {
    return <div className={"md:w-[96vw] sm:w-[100vw] block mx-auto opacity-0 transition-[2s]"}>
        <Header/>
        <TransitionWrapper>
            <Route path="/" element={<Main/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/connection" element={<Connection/>}/>
        </TransitionWrapper>
        <Footer/>
    </div>

}

export default App;
