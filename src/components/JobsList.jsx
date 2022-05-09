import SingleJob from "./SingleJob";

const JobsList = ({ job }) => (
  <>
    {job.map((job) => (
      <SingleJob job={job} />
    ))}
  </>
);

export default JobsList;
