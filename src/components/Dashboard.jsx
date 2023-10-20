import { useState } from 'react'
import DataTable from "./DataTable.jsx"
import Modal from "./Modal.jsx"
import { useStore } from 'react-redux'
import serverCalls from '../api/server.js'
import useGetData from '../custom-hooks/GetData.js'

const Dashboard = () => {
    const [open, setOpen] = useState(false)
    const store = useStore()
    const {carData, getData} = useGetData()

    const click = () =>{
        setOpen(true)
    }
    const clickClose = () =>{
        setOpen(false)
    }
    const deleteCar = async () =>{
        serverCalls.delete(store.getState().car.id)
        await getData()
        window.location.reload()
    }

  return (
    <div className="z-0">
        <Modal open={open} close={clickClose}/>
        <div className="flex grow content-center justify-center">
            <DataTable/>
        </div>
        <div className="flex grow content-center justify-center mt-5">
            <button className="mx-5 p-2 bg-yellow-300 rounded-lg" onClick={click}>Add Car</button>
            <button className="mx-5 p-2 bg-yellow-300 rounded-lg" onClick={click}>Update Car</button>
            <button className="mx-5 p-2 bg-yellow-300 rounded-lg" onClick={deleteCar}>Delete Car</button>
        </div>
    </div>
  )
}

export default Dashboard