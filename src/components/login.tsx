import React,{useState} from 'react'; 
import {Link} from "react-router-dom";
import './login.scss';
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
import {useHistory} from 'react-router-dom';


interface State {
    email: string;
    password: string;
    amount:number;
    showPassword:boolean
  }

export const Login:React.FC = ()=>{
    const [values,setValues] = useState<State>({
        email:"",
        password:"",
        showPassword:false,
        amount:23
    })

    const handleChange = (prop:keyof State)=>(e:React.ChangeEvent<HTMLInputElement>)=>{
        setValues({...values, [prop]: e.target.value})
    }
    const history = useHistory();
    const handleSubmit = (e:any)=>{
      e.preventDefault();

      history.push('/dashboard')
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
            <Card className="card-content">
                <img style={{width:"50px",height:"50px"}} src={Logo} alt="logo"/>
                <Typography variant="h3" className="login_title">Organizer Login</Typography>
                <span className="login_description">Use your company email to login</span>

                <form className="form-input">
                <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '30ch' }} style={{padding:"2px"}}>
                <FormHelperText id="standard-email-helper-text" style={{fontSize:"15px", color:"black"}}>Email</FormHelperText>
          <Input
            id="standard-adornment-weight"
            value={values.email}
            onChange={handleChange('email')}
            aria-describedby="standard-email-helper-text"
            inputProps={{
              'aria-label': 'email',
            }}
            placeholder="email"
          />
          
        </FormControl>

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
       <Button variant="contained" onClick={handleSubmit} className="login_button">Login</Button>

       <span className="forgot_pass">Forgot password?   <strong ><Link className="reset_pass"to="/forgot_password">Reset</Link></strong></span>
                </form>
            </Card>
        </div>
    )
}