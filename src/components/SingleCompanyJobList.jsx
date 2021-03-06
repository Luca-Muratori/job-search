import { Card } from "react-bootstrap";

const SingleCompanyJobList = ({ job }) => {
  const date = job.publication_date.split("T");
  // .dangerouslySetInnerHTML()

  return (
    <>
      <div>title: {job.title}</div>
      <div>category: {job.category}</div>
      <div>company name: {job.company_name}</div>
      <div dangerouslySetInnerHTML={{ __html: job.description }}></div>
      <div>type: {job.job_type}</div>
      <div>{date[0]}</div>
      <a href={job.url}>{job.url}</a>
      <div>{job.candidate_required_location}</div>
      <div>salary:{job.salary}</div>
    </>
  );
};

export default SingleCompanyJobList;
