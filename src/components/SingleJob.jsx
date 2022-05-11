import { Link } from "react-router-dom";
import CompanyListJob from "./CompanyListJob.jsx";
import { MdFavorite } from "react-icons/md";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addToFavorite } from "../slices/favorite/favoriteSlice";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToFavoriteProp: (job) => {
      dispatch(addToFavorite(job));
    },
  };
};

const SingleJob = ({ job, addToFavoriteProp }) => {
  return (
    <div style={{ display: "flex", marginBottom: "5px" }}>
      <div>
        <Link to={`/company/${job.company_name}`}>{job.company_name}</Link> -
        {job.title}
      </div>
      <Button
        style={{ marginLeft: "5px" }}
        color="success"
        onClick={() => {
          addToFavoriteProp(job);
        }}
      >
        <MdFavorite />
      </Button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleJob);
