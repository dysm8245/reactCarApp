import { TextField } from "@mui/material"
import { forwardRef } from "react"

export const Input = forwardRef((props, ref) => {
  return (
    <div className="my-5">
        <TextField variant="standard" inputRef={ref} {...props} type="text" >
            
        </TextField>
    </div>
  )
})

export default Input
