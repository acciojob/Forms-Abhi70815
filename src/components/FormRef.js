import React, { useRef } from 'react'
import Card from './Card';

const FormRef = () => {
    const full_nmaeRef = useRef("");
    const emailRef= useRef("");
    const passwordRef = useRef("");
    const Confirm_passRef=useRef("");

    const handleSubmit =(e)=>{
        e.preventDefault();
        const formData={
            full_name: full_nmaeRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            Confirm_pass: Confirm_passRef.current.value,
        };
        console.log(formData);
    }
  return (
    <Card>
        <h2>Form using Ref</h2>
        <form id='info-form' onSubmit={handleSubmit}>
           <input
            id='fullname'
            type='text'
            placeholder='Full Name'
            ref={full_nmaeRef}
            />
            <input id='email' type='email' placeholder='Email' ref={emailRef}/>
            <input
             id='password'
             type='password'
             placeholder='Password'
             ref={passwordRef}
             />
             <input
              id='password_confirmation'
              type='password'
              placeholder='Confirm Password'
              ref={Confirm_passRef}/>

              <button type='submit'> Submit</button>
        </form>
    </Card>
  )
}

export default FormRef