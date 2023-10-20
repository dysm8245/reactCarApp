import { useForm } from "react-hook-form"
import {useDispatch, useStore} from 'react-redux'
import {chooseUsername, choosePassword} from "../redux/slices/userSlice"
import Input from "./Input.jsx"
import serverCalls from "../api/server.js"
import { useNavigate } from "react-router-dom"

const SignInForm = () => {
    const {register, handleSubmit} = useForm({})
    const dispatch = useDispatch()
    const store = useStore()
    const navigate = useNavigate()

    const onSubmit = async (data) =>{
        dispatch(chooseUsername(data.Username))
        dispatch(choosePassword(data.Password))
        const token = await serverCalls.login(store.getState().user)
        localStorage.setItem("token", token.token)
        serverCalls.setUser()
        navigate("/cars")
    }

  return (
    <form className="p-5 rounded-lg bg-slate-300" onSubmit={handleSubmit(onSubmit)}>
        <div>
            <Input {...register("Username")} name="Username" placeholder="Username" />
        </div>
        <div>
            <Input {...register("Password")} name="Password" placeholder="Password" />
        </div>
        <div>
            <button className="mt-2 p-2 bg-yellow-300 rounded-lg">Submit</button>
        </div>
    </form>
  )
}

export default SignInForm