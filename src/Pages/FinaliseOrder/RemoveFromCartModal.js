import "./RemoveFromCartModal.css";
import Modal from 'react-bootstrap/Modal';

function RemoveFromCartModal(props)
{

    return(
        <Modal class="modal-content" show={props.show} >
        <Modal.Header closeButton>
          <Modal.Title>Czy chcesz usunąć {props.meal} z zamówienia</Modal.Title>
        </Modal.Header>
        <Modal.Body>....</Modal.Body>
        <Modal.Footer>
          <button onClick={props.removeMealFromOrder}>
            Tak
          </button>
          <button onClick={props.handleClose}>
            Nie
          </button>
        </Modal.Footer>
      </Modal>
    )
   
}
export default RemoveFromCartModal;