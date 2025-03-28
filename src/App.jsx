import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import SmoothResizeScrollWrapper from "./components/common/SmoothResizeScrollWrapper";

function App() {
  return (
    <SmoothResizeScrollWrapper>
      <Layout />
    </SmoothResizeScrollWrapper>
  );
}

export default App;
