import { BrowserRouter, Routes, Route } from "react-router-dom";
import Listing from "pages/Listing";
import Form from "pages/Form";
import Navbar from "components/Navbar";
import { Create } from "pages/Create";
import SignIn from "pages/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form" element={<Form />}>
          <Route path=":movieId" element={<Form />} />
        </Route>
        <Route path="/create" element={<Create />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
