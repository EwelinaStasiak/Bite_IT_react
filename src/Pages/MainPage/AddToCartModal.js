import "./AddToCartModal.css";
import Modal from 'react-bootstrap/Modal';
import ModalFooter from 'react-bootstrap/ModalFooter'



function AddToCartModal({onHide, ...props})
{

    return(
        <Modal class="modal-content" show={props.show} >
        <Modal.Header closeButton>
          <Modal.Title>Dodałeś {props.meal} do zamówienia</Modal.Title>
        </Modal.Header>
        <Modal.Body>Aby sfinalizować zamówienie przejdź do karty "Zamówienie"</Modal.Body>
        <Modal.Footer>
          <button onClick={onHide}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    )
   
}
export default AddToCartModal;