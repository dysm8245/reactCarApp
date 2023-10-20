import { useForm } from "react-hook-form"
import {useDispatch, useStore} from 'react-redux'
import {chooseFirst, chooseLast, chooseEmail, chooseUsername, choosePassword} from "../redux/slices/userSlice"
import Input from "./Input.jsx"
import serverCalls from "../api/server.js"
import { useNavigate } from "react-router-dom"

const SignUpForm = () => {
    const {register, handleSubmit} = useForm({})
    const dispatch = useDispatch()
    const store = useStore()
    const navigate = useNavigate()

    const onSubmit = (data) =>{
        // console.log(data)
        dispatch(chooseFirst(data.first))
        dispatch(chooseLast(data.last))
        dispatch(chooseEmail(data.email))
        dispatch(chooseUsername(data.username))
        dispatch(choosePassword(data.password))
        serverCalls.signup(store.getState().user)
        navigate("/signin")
    }

  return (
    <form className="p-5 rounded-lg bg-slate-300" onSubmit={handleSubmit(onSubmit)}>
        <div>
            <Input {...register("first")} name="first" placeholder="First Name" />
        </div>
        <div>
            <Input {...register("last")} name="last" placeholder="Last Name" />
        </div>
        <div>
            <Input {...register("email")} name="email" placeholder="Email" />
        </div>
        <div>
            <Input {...register("username")} name="username" placeholder="Username" />
        </div>
        <div>
            <Input {...register("password")} name="password" placeholder="Password" />
        </div>
        <div>
            <button className="mt-2 p-2 bg-yellow-300 rounded-lg">Submit</button>
        </div>
    </form>
  )
}

export default SignUpForm