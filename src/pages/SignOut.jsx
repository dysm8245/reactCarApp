import {useNavigate} from "react-router-dom"

const SignOut = () => {
    const navigate = useNavigate()
    const logout = () =>{
        window.localStorage.clear()
        navigate("/signin")
    }
    const redirect = () =>{
        navigate("/")
    }

  return (
    <div className="flex grow justify-center align-middle">
      <div className="mt-40 flex justify-center align-middle">
        <h1 className="text-xl">Are you sure you want to logout?</h1>
        <button className="mx-5 p-2 bg-yellow-300 rounded-lg" onClick={logout}>Yes</button>
        <button className="mx-5 p-2 bg-yellow-300 rounded-lg" onClick={redirect}>No</button>
      </div>
    </div>
  )
}

export default SignOut