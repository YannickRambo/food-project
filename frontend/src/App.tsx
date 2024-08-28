import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FoodList } from "./FoodList"
import { FoodForm } from "./components/FoodForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FoodList />} />
        <Route path="/create" element={<FoodForm />}/>
        <Route path="*"/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
