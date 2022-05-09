import { Card } from "react-bootstrap";

const SingleCompanyJobList = ({ job }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{job.title}</Card.Title>
          <Card.Text>{job.category}</Card.Text>
          <Card.Text>{job.company_name}</Card.Text>
          <Card.Text>{job.description}</Card.Text>
          <Card.Text>{job.job_type}</Card.Text>
          <Card.Text>{job.publication_date}</Card.Text>
          <Card.Text>{job.url}</Card.Text>
          <Card.Text>{job.candidate_required_location}</Card.Text>
          <Card.Text>{job.salary}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleCompanyJobList;
