import { InputGroup, Form } from "react-bootstrap";

const SearchInput = ({ searchQuery }) => {
  return (
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Search</Form.Label>
      <Form.Control type="text" placeholder="Search here" value={searchQuery} />
    </Form.Group>
  );
};

export default SearchInput;
