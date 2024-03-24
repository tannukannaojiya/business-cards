

import { BrowserRouter, Routes, Route } from "react-router-dom";

import AllCards from "./components/AllCards";
import Form from "./LoginComponent/Form";
import JobForm from "./JobForm/JobForm";

function App() {
  return (
   <BrowserRouter>
    <Routes>
       <Route path="card" element={<AllCards/>} />
      <Route path="/" element={<Form/>}/> 
      <Route path="jobForm" element={<JobForm/>}/>
    </Routes>
   </BrowserRouter>
    
    
   
    
    

    
  );
}

export default App;
