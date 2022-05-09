import useState from "react";
import SearchInput from "./SearchInput.jsx";
import JobsList from "./JobsList.jsx";

const Homepage = ({ job, searchQuery }) => {
  return (
    <>
      <SearchInput />
      <JobsList job={job} searchQuery={searchQuery} />
    </>
  );
};

export default Homepage;
