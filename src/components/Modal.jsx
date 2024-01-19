import { useNavigate } from "react-router-dom";
import classes from "./Modal.module.css";

function Modal({ children }) {
    const navigate = useNavigate();
  return (
    <>
      <div className={classes.backdrop} onClick={()=> navigate('..')}>
        {" "}
      </div>
      <dialog open={true} className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}
export default Modal;
