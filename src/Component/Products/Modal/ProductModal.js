import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const hello = 'hello'
function ProductModal({show, handleClose}) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button variant="primary"  onClick={handleClose}>Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProductModal;