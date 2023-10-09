import React from 'react'

export default function Home() {
  return (
    <div className='row'>
        <div className='col sm-6'>
      <form className='myform'>
        <h1 className='h1 text-primary'>User Login</h1><br/>
        <input type='text' placeholder='name' className='form-control'></input><br/>
        <input type='text' placeholder='email' className='form-control'></input><br/>
        {/* <input type='text' placeholder='dob' className='form-control'></input><br/>
        <input type='text' placeholder='contact' className='form-control'></input><br/>
  <input type='text' placeholder='add' className='form-control'></input><br/> */}
        <input type='text' placeholder='password' className='form-control'></input><br/>

        <br/>
        <button type='submit' className='btn btn-primary'>Login</button>
      </form>
        </div>
        <div className='col sm-6'>
        <form className='myform'>
        <h1 className='h1 text-primary'>Sign Up</h1><br/>
        <input type='text' placeholder='name' className='form-control'></input><br/>
        <input type='text' placeholder='email' className='form-control'></input><br/>
        <input type='text' placeholder='dob' className='form-control'></input><br/>
        <input type='text' placeholder='contact' className='form-control'></input><br/>
        <input type='text' placeholder='add' className='form-control'></input><br/>
        <br/>
        <button type='submit' className='btn btn-primary'>Sign Up</button>

      </form>
        </div>

    </div>
  )
}
