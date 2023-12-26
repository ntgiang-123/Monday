import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserTemplate from "./template/UserTemplate";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserTemplate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
