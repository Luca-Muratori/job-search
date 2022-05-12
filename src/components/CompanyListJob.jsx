import { useParams } from "react-router-dom";
import SingleCompanyJobList from "./SingleCompanyJobList";
import { useEffect, useState } from "react";

const CompanyListJob = () => {
  const [job, setJob] = useState([]);
  const params = useParams();

  const companyName = params.companyName;

  const fetchJobByCompanyName = async (companyName) => {
    try {
      const response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?company=${companyName}`
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
    fetchJobByCompanyName(companyName);
  }, []);

  return (
    <>
      <ol>
        {job.map((job) => (
          <li
            style={{ border: "1px solid black", marginBottom: "10px" }}
            key={job._id}
          >
            <SingleCompanyJobList job={job} />
          </li>
        ))}
      </ol>
    </>
  );
};

export default CompanyListJob;
