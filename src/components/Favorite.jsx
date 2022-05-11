import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { removeFromFavorite } from "../slices/favorite/favoriteSlice";
import { BiTrash } from "react-icons/bi";

const mapStateToProps = (state) => ({
  favoriteContent: state.favorite.content,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromFavoriteProp: (index) => {
    dispatch(removeFromFavorite(index));
  },
});

const Favorite = ({ favoriteContent, removeFromFavoriteProp }) => (
  <ul>
    {favoriteContent.map((job, i) => (
      <li>
        <p key={job._id}>
          {job.title}-
          <Link to={`/company/${job.company_name}`}>{job.company_name}</Link>
          <Button
            style={{ marginLeft: "5px" }}
            onClick={() => removeFromFavoriteProp(i)}
          >
            <BiTrash />
          </Button>
        </p>
      </li>
    ))}
  </ul>
);

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
