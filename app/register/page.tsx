import React from 'react'
import Style from './register.module.css'

export default function register() {
  return (
    <div className={Style['container-all']}>
        <div className={Style['container-content']}>
            <h1> Sign up to MangaShiro </h1>
            <div className={Style['container-input']}>
              <input type="text" placeholder='Email'/>
              <input type="text" placeholder='Username'/>
              <input type="text" placeholder='Password'/>
              <input type="text" placeholder='Confirm Password'/>
            </div>
            <div className={Style['container-down']}>
              <button> Sign up </button>
            <small>
              <a href="/login"> Login </a>
            </small>  
          </div>
        </div>
    </div>
  )
}
