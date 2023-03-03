import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import GifSearch from "./GifSearch";

function App() {
  return (
      
      <Routes>
        <Route path="/login" element={<LoginForm/>}>
      
        </Route>
        <Route path="/gif-search" element={<GifSearch/>}>
        
        </Route>
        
      </Routes>
    
  );
}

export default App;
