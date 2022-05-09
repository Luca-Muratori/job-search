import { Form } from "react-bootstrap";

const SearchInput = ({ searchQuery, handleChange }) => {
  return (
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Search by role</Form.Label>
      <Form.Control
        type="text"
        placeholder="Search here"
        value={searchQuery}
        onChange={handleChange}
      />
    </Form.Group>
  );
};

export default SearchInput;
