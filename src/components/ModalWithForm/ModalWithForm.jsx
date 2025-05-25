import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  onClose,
  onSubmit,
  onSwitch,
  switchText,
  errorMessage,
}) {
  return (
    <div className="modal">
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} type="button" className="modal__close" />
        <form className="modal__form" onSubmit={onSubmit}>
          {children}

            <p className="modal__error">{errorMessage}</p>
          <div className="modal__buttons-container">

            <button type="submit" className="modal__submit">
              {buttonText}
            </button>
            <button type="button" onClick={onSwitch} className="modal__switch">
              {switchText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;

// import { useEffect, useState } from "react";
// import "./ModalWithForm.css";

// function ModalWithForm({
//   children,
//   buttonText,
//   title,
//   onClose,
//   onSubmit,
//   onSwitch,
//   switchText,
//   errorMessage,
// }) {
//   const [isLoading, setIsLoading] = useState(false);
//   const submitText = isLoading ? "Loading..." : buttonText;

//   const submit = () => {
//     onSubmit();
//     setIsLoading(true);
//   };

//   useEffect(() => {
//     setIsLoading(false);
//   }, [errorMessage, children]);

//   return (
//     <div className="modal">
//       <div className="modal__content">
//         <h2 className="modal__title">{title}</h2>
//         <button onClick={onClose} type="button" className="modal__close" />
//         <form className="modal__form" onSubmit={submit}>
//           {children}

//           <p className="modal__error">{errorMessage}</p>
//           <div className="modal__buttons-container">
//             <button type="submit" className="modal__submit">
//               {submitText}
//             </button>
//             <button type="button" onClick={onSwitch} className="modal__switch">
//               {switchText}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default ModalWithForm;
