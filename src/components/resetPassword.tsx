import React,{useState} from 'react'; 
import {Link} from "react-router-dom";
import './resetPassword.scss';
import Card from '@mui/material/Card'
import Logo from '../assets/red_icon.png'
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Button from "@mui/material/Button";


interface State {
    password: string;
    showPassword:boolean
  }

export const ResetPassword:React.FC = ()=>{
    const [values,setValues] = useState<State>({
        password:"",
        showPassword:false,
    })

    const handleChange = (prop:keyof State)=>(e:React.ChangeEvent<HTMLInputElement>)=>{
        setValues({...values, [prop]: e.target.value})
    }

    const handleShowPassword = ()=>{
        setValues({
            ...values,
            showPassword:!values.showPassword
        })
    }
    const handleMouseDownPassword =(e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()
    }
    return(

        <div className="container">
            <div className="clip-class"></div>
            <Card className="resetPass">
                <img style={{width:"50px",height:"50px"}} src={Logo} alt="logo"/>
                <Typography variant="h3" className="login_title">Set New Password</Typography>
                <div className="login_description">
                  <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                </div>
                <form className="form-input">
                <FormControl sx={{ m: 1, width: '30ch' }} variant="standard">
          <FormHelperText id="standard-password-helper-text" style={{fontSize:"15px", color:"black"}}>Password</FormHelperText>
          <Input
            id="standard-adornment-password"
            className="password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            placeholder="password"
          />
        </FormControl>
       <Button variant="contained" className="login_button">Change Password</Button>

       <span className="forgot_pass">Recall Password?   <strong ><Link className="reset_pass"to="/">login</Link></strong></span>
                </form>
            </Card>
        </div>
    )
}