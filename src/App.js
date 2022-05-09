import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage.jsx";
import { useEffect, useState } from "react";

const App = () => {
  const [job, setJob] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchDataByRole = async (searchQuery) => {
    try {
      let response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?search=${searchQuery}&limit=10`
      );
      if (response.ok) {
        let data = await response.json();
        setJob(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataByRole();
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
    fetchDataByRole(searchQuery);
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                job={job}
                handleChange={handleChange}
                searchQuery={searchQuery}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
