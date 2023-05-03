
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Alert = (props) =>  {
  return (
    <Modal {...props} size="lg" centered>
      <Modal.Body>
        <p>
            {props.message}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button className='btn-secondary' onClick={props.onHide}>Conferma</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default Alert;