import React, { useState } from 'react'

const Contact = () => {

const[data,setData]=useState({

fullname:"",
phone:"",
email:"",
msg:"",

})
const InputEvent=(e)=>{

const{name,value}=e.target;
setData((preVal) => {
  return{
    ...preVal,
    [name] : value,
  }
})

}
const formSubmit = (e)=>{
  e.preventDefault();
  alert(
    `My name is ${data.fullname}.My mobile number is ${data.phone} and email is ${data.email}, Here is what I want to say ${data.msg}`
  )
}


  return (
    <>
   <div className="my-1">
    <h1 className='text-center'>Contact Us</h1>
   </div>
   <div className=" container contact_div">
        <div className="row">
            <div className="col-md-6 col-10 mx-auto ">
    <form onSubmit={formSubmit}>

    <div className="mb-3">
<label for="exampleFormControlInput1"  className='form-label' >FullName</label>
<input type='text' className='form-control'  id="exampleFormControlInput1" 
name='fullname' value={data.fullname}  onChange={InputEvent} placeholder='Enter your name'></input>
</div>


<div className="mb-3">
<label for="exampleFormControlInput1"  className='form-label' >Phone</label>
<input type='number' className='form-control'  id="exampleFormControlInput1" 
name='phone' value={data.phone}  onChange={InputEvent} placeholder='Enter your phone number'></input>
</div>


<div className="mb-3">
<label for="exampleFormControlInput1"  className='form-label' >Email Address</label>
<input type='email' className='form-control' required  id="exampleFormControlInput1"
name='email' value={data.email}  onChange={InputEvent}  placeholder='Enter your email'></input>
</div>

<div className="mb-3">
  <label for="exampleFormControlTextarea1"  className='form-label'>Message</label>
  <textarea className='form-control '
  name='msg' value={data.msg}  onChange={InputEvent} id="exampleFormControlTextarea1" rows="3"> </textarea>
</div>


<div className='col-12 mb-4'>

  <button className='btn btn-outline-primary' type='submit'>Submit</button>
</div>




    </form>



            </div>
            </div>
            </div>

    </>
  )
}

export default Contact
