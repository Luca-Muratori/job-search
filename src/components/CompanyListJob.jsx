import { useParams } from "react-router-dom";
import SingleCompanyJobList from "./SingleCompanyJobList";
import { useEffect, useState } from "react";
const CompanyListJob = () => {
  const [job, setJob] = useState([]);
  const params = useParams();

  const companyName = params.companyName;
  console.log(companyName);

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
    console.log("job", job);
  }, []);

  return (
    <>
      <ul>
        {job.map((job) => (
          <li key={job._id}>
            <SingleCompanyJobList job={job} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CompanyListJob;
