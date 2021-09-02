import "./RemoveFromCartModal.css";
import Modal from 'react-bootstrap/Modal';

function RemoveFromCartModal({onHide, ...props})
{

    return(
        <Modal class="modal-content" show={props.show} >
        <Modal.Header closeButton>
          <Modal.Title>Usunąłeś {props.meal} z zamówienia</Modal.Title>
        </Modal.Header>
        <Modal.Body>....</Modal.Body>
        <Modal.Footer>
          <button onClick={onHide}>
            OK
          </button>
        </Modal.Footer>
      </Modal>
    )
   
}
export default RemoveFromCartModal;