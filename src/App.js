import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage.jsx";
import { useEffect, useState } from "react";
import CompanyListJob from "./components/CompanyListJob.jsx";
import Favorite from "./components/Favorite.jsx";
import FavoriteIndicator from "./components/FavoriteIndicator.jsx";

const App = () => {
  const [job, setJob] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = async () => {
    try {
      let response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs`);
      if (response.ok) {
        let data = await response.json();
        setJob(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDataByRole = async (searchQuery) => {
    try {
      let response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?search=${searchQuery}&limit=10`
      );
      if (response.ok) {
        let data = await response.json();
        setJob(data.data);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchDataByRole(searchQuery);
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
    searchQuery === "" ? fetchData() : fetchDataByRole(searchQuery);
  };

  return (
    <div>
      <BrowserRouter>
        <FavoriteIndicator />
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
          <Route path={`/company/:companyName`} element={<CompanyListJob />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
