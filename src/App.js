import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage.jsx";
import { useEffect, useState } from "react";

const App = () => {
  const [job, setJob] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = async () => {
    try {
      let response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?search=${searchQuery}&limit=30`
      );
      if (response.ok) {
        let data = await response.json();
        setJob(data.data);
        console.log(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Homepage job={job} searchQuery={searchQuery} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
