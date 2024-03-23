

import { BrowserRouter, Routes, Route } from "react-router-dom";

import AllCards from "./components/AllCards";
import Form from "./LoginComponent/Form";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="card" element={<AllCards/>} />
      <Route path="/" element={<Form/>}/>
      

      
    </Routes>
   </BrowserRouter>
    
    
   
    
    

    
  );
}

export default App;
