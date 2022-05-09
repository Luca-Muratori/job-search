import SingleJob from "./SingleJob";

const JobsList = ({ job }) => (
  <>
    <ul>
      {job.map((job) => (
        <li key={job._id}>
          <SingleJob job={job} />
        </li>
      ))}
    </ul>
  </>
);

export default JobsList;
