import { useState } from "react"
import { useDispatch, useStore, useSelector} from "react-redux"
import {chooseId} from "../redux/slices/carSlice"

const SelectBox = (id) => {
    const [clicked, setClicked] = useState(false)
    const dispatch = useDispatch()
    const store = useStore()

    const select = () =>{
        setClicked(!clicked)
    }
    {if(clicked){
        dispatch(chooseId(id.id))
        return(<div className="w-5 h-5 bg-blue-700 border" onClick={select}></div>)
    }
    else{
        if(store.getState().car.id == null){
            dispatch(chooseId(null))
        }
        else{
            dispatch(chooseId(store.getState().car.id))
        }
        return(<div className="w-5 h-5 bg-white border" onClick={select}></div>)
    }}
}

export default SelectBox