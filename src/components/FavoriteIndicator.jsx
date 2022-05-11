import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { MdFavorite } from "react-icons/md";

const mapStateToProps = (state) => {
  return {
    favoriteLength: state.favorite.content.length,
  };
};

const FavoriteIndicator = ({ favoriteLength }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Button color="primary" onClick={() => navigate("/favorite")}>
        <MdFavorite />
        <span>{favoriteLength}</span>
      </Button>
    </div>
  );
};

export default connect(mapStateToProps)(FavoriteIndicator);
