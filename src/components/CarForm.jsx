import { useForm } from "react-hook-form"
import Input from "./Input.jsx"
import serverCalls from "../api/server.js"
import { useSelector } from "react-redux"

const CarForm = () => {
    const {register, handleSubmit} = useForm({})
    const id = useSelector((state) => state.car.id)

    const onSubmit = async (data) =>{
        const car ={
            make: data.Make,
            model: data.Model,
            year: data.Year
        }
        //store.getState().car.id
        if(id == null){
            await serverCalls.create(car)
        }
        else{
            await serverCalls.update(car, id)
        }
        window.location.reload()
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <Input {...register("Make")} name="Make" placeholder="Make of your car" />
        </div>
        <div>
            <Input {...register("Model")} name="Model" placeholder="Model of your car" />
        </div>
        <div>
            <Input {...register("Year")} name="Year" placeholder="Year of your car" />
        </div>
        <div>
            <button className="mt-2 p-2 bg-yellow-300 rounded-lg">Submit</button>
        </div>
    </form>
  )
}

export default CarForm