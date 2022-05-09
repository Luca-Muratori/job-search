import { Link } from "react-router-dom";
import CompanyListJob from "./CompanyListJob.jsx";
const SingleJob = ({ job }) => {
  return (
    <div>
      <Link to={`/company/${job.company_name}`}>{job.company_name}</Link> -
      {job.title}
    </div>
  );
};

export default SingleJob;
