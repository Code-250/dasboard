import React,{useState} from 'react'; 
import {Link} from "react-router-dom";
import './login.scss';
import './forgotpass.scss';
import Card from '@mui/material/Card'
import Logo from '../assets/red_icon.png'
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Button from "@mui/material/Button";
import {useHistory} from 'react-router-dom';

interface State {
    email: string;
  }

export const ForgotPassword:React.FC = ()=>{
    const [values,setValues] = useState<State>({
        email:"",
    })
    const history = useHistory()

    const handleSubmit = ()=>{
        history.push('/new_password')
    }

    const handleChange = (prop:keyof State)=>(e:React.ChangeEvent<HTMLInputElement>)=>{
        setValues({...values, [prop]: e.target.value})
    }
    return(

        <div className="container">
            <div className="clip-class"></div>
            <Card className="card-content forgotPass">
                <img style={{width:"50px",height:"50px"}} src={Logo} alt="logo"/>
                <Typography variant="h3" className="login_title">Forgot Password</Typography>
                <div className='login_description'>

                <span >Use your ShowApp email to reset your password</span>
                </div>

                <form className="form-input" onSubmit={handleSubmit}>
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
       <Button type='submit'variant="contained" className="login_button">Submit</Button>

       <span className="forgot_pass">Back to?<strong ><Link className="reset_pass"to="/">Login</Link></strong></span>
                </form>
            </Card>
        </div>
    )
}