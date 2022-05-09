const SingleJob = ({ job }) => {
  return (
    <div>
      {job.company_name}-{job.title}
    </div>
  );
};

export default SingleJob;
