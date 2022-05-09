import useState from "react";
import SearchInput from "./SearchInput.jsx";
import JobsList from "./JobsList.jsx";

const Homepage = ({ job, searchQuery, handleChange }) => {
  return (
    <>
      <SearchInput
        job={job}
        handleChange={handleChange}
        searchQuery={searchQuery}
      />
      <JobsList job={job} />
    </>
  );
};

export default Homepage;
