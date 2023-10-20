import CarForm from "./CarForm.jsx"

const Modal = (props) => {

  if(props.open){
    return(
        <div className="flex justify-center align-middle">
            <div className="mt-32 fixed z-10 bg-slate-300 p-5 rounded-lg">
                <button className="hover:text-white" onClick={props.close}>X</button>
                < CarForm />
            </div>
        </div>
    )
  }
  else{
    return(
        <>
        </>
    )
  }
}

export default Modal