import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ChakraProvider>
        <Router>
          <div>{/* <Toaster /> */}</div>
          {/* <Navbar /> */}
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
          {/* <Footer /> */}
        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;
